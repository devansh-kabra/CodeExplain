import { db } from "../../../../lib/db";

export default async function topicwise_progress(userId) {
    try {
        const res = await db.query(`
            SELECT 
                t.id AS topic_id,
                t.name AS topic_name,

                -- Total number of problems in this topic
                COUNT(DISTINCT pt.problem_id) AS total_problems,

                -- Completed problems for this user
                COUNT(DISTINCT cp.problem_id) AS completed_problems

            FROM topics t

            LEFT JOIN problem_topics pt
                ON t.id = pt.topic_id

            LEFT JOIN completed_problems cp
                ON pt.problem_id = cp.problem_id
                AND cp.user_id = $1

            GROUP BY 
                t.id, t.name

            ORDER BY 
                t.id;
        `, [userId]);

        const topicwise_prog = res.rows;
        return topicwise_prog;
    } catch (err) {
        console.log(err);
        throw new Error("Cannot connect to database");
    }
}