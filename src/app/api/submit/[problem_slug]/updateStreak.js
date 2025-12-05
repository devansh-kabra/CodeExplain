import { db } from "../../../../../lib/db";

export default async function updateStreak(userId) {

    const today = new Date();

    try {
        const response = await db.query(`
            SELECT streak, last_streak_update
            FROM users
            WHERE id = $1
        `, [userId]);

        const {streak, last_streak_update} = response.rows[0];

        if (!last_streak_update) {
            await db.query(`
                UPDATE users
                SET streak = 1, last_streak_update = $1
                WHERE id = $2
            `, [today, userId]);
        } else {
            today.setHours(0,0,0,0);
            last_streak_update.setHours(0,0,0,0);
            const differenceInTime = today.getTime() - last_streak_update.getTime();
            const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
         
            if (differenceInDays === 1) {
                await db.query(`
                    UPDATE users
                    SET streak = $1, last_streak_update = $2
                    WHERE id = $3
                `, [streak+1, today, userId]);
            } else if (differenceInDays > 1) {
                
                await db.query(`
                    UPDATE users
                    SET streak = 1, last_streak_update = $1
                    WHERE id = $2
                `, [today, userId]);
            }
        }
    } catch (err) {
        // console.error("DEBUG DB ERROR:", err);
        throw new Error("Cannot connect to database")
    }
}