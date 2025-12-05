import { db } from "../../../../lib/db";

export default async function fetchAllProblems(userId) {
    try {
        const res = await db.query(`
            SELECT 
                p.id,
                p.name,
                p.slug,
                p.difficulty,
                p.leetcode_link,

                -- saved / completed flags
                (sp.problem_id IS NOT NULL) AS is_saved,
                (cp.problem_id IS NOT NULL) AS is_completed,

                -- topic ids or names aggregated
                COALESCE(array_agg(t.name), '{}') AS topics

            FROM problems p

            -- Saved status
            LEFT JOIN saved_problems sp 
            ON p.id = sp.problem_id AND sp.user_id = $1

            -- Completed status
            LEFT JOIN completed_problems cp
            ON p.id = cp.problem_id AND cp.user_id = $1

            -- Topics
            LEFT JOIN problem_topics pt
            ON p.id = pt.problem_id

            LEFT JOIN topics t
            ON pt.topic_id = t.id

            GROUP BY 
                p.id, p.name, p.slug, p.difficulty, p.leetcode_link,
                sp.problem_id, cp.problem_id
            ORDER BY p.id;    

        `, [userId]);

        const all_problems = res.rows;
        return all_problems;
    } catch (err) {
        console.log("error: ", err);
        throw new Error("Cannot connect to database");
    }

}