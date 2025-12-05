import { db } from "../../../../../lib/db";
export default async function fetchSignals(slug) {

    if (!slug) {
        return [];
    } 

    try {
        const response = await db.query(`
            SELECT ps.weight, ps.text, ps.feedback, ps.embedding
            FROM problem_signals ps
            JOIN problems p ON ps.problem_id = p.id
            WHERE p.slug = $1
        `, [slug]);
        
        const signals = response.rows;
        return signals;
    } catch (err) {
        console.error("DEBUG DB ERROR:", err);
        throw new Error("cannot connect to databses")
    }
}