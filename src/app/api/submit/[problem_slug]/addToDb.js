import { db } from "../../../../../lib/db";

export default async function addToDb(userId, problem_id, answer, score, feedbacks) {
    try {
        await db.query(`
            INSERT INTO user_answers (user_id, problem_id, answer, score, feedbacks)
            VALUES ($1, $2, $3, $4, $5)
        `, [userId, problem_id, answer, score, feedbacks]);
    } catch (err) {
        console.error("DEBUG DB ERROR:", err);
        throw new Error("Cannot connect to database");
    }
}