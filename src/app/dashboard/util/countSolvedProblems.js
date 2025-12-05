import { db } from "../../../../lib/db";

export default async function count_solved_problems(userId) {
    try {
        const res = await db.query(`SELECT COUNT(*) AS count FROM completed_problems WHERE user_id = $1`, [userId]);
        const count = res.rows[0].count;
        return count;
    } catch (err) {
        console.log(err);
        throw new Error("Cannot connect to database");
    }
}