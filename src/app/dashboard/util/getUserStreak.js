import { db } from "../../../../lib/db";

export default async function getUserStreak(userId) {
    const today = new Date();
    today.setHours(0,0,0,0);

    const response = await db.query(`
        SELECT streak, last_streak_update
        FROM users
        WHERE id = $1
    `, [userId]);
    const {streak, last_streak_update} = response.rows[0];

    if (!last_streak_update) {
        return 0;
    } else {
        last_streak_update.setHours(0,0,0,0);
        const differenceInTime = today.getTime()-last_streak_update.getTime();
        const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
        if (differenceInDays <= 1) {
            return streak;
        } else {
            await db.query(`
                UPDATE users
                SET streak = 0, last_streak_update = NULL
                WHERE id = $1
            `, [userId]);
            return 0;
        }
    }
}