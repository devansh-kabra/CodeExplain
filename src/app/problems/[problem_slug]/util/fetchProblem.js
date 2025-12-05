import { db } from "../../../../../lib/db";
//run only on server side directly calls the db

export default async function fetchProblem(userId, slug) {
    try {
        const res = await db.query(`
            SELECT 
                p.id,
                p.name,
                p.slug,
                p.difficulty,
                p.leetcode_link,
                p.description,
                p.examples,
                p.constraints,

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

            WHERE p.slug = $2

            GROUP BY 
                p.id, p.name, p.slug, p.difficulty, p.leetcode_link, p.description, p.examples, p.constraints,
                sp.problem_id, cp.problem_id
            ORDER BY p.id;    

        `, [userId, slug]);

        const problem_details = res.rows[0];
        return problem_details;
    } catch (err) {

    }
}