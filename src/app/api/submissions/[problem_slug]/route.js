import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { db } from "../../../../../lib/db";

async function fetchUserSubmissions(userId, slug) {
    if (!userId || !slug) {
        return [];
    }

    try {
        const response = await db.query(`
            SELECT 
                ans.id,
                ans.answer, 
                ans.score, 
                ans.feedbacks, 
                ans.submitted_at
            FROM user_answers ans
            JOIN problems p ON ans.problem_id = p.id  
            WHERE p.slug = $1                        
            AND ans.user_id = $2                     
            ORDER BY ans.submitted_at DESC
        `, [slug, userId]);
        const submissions = response.rows;
        // console.log(response);
        return submissions;
    } catch (err) {
        throw new Error("Cannot connect to database");
    }
}

export async function GET(request, {params}) {
    const {problem_slug} = await params;
    const session = await getServerSession(authOptions);

    if (!session) {
        return Response.json({
            submissions: []
        });
    }

    const userId = session.user.dbId;
    const submissions = await fetchUserSubmissions(userId, problem_slug);
    
    return Response.json({
        submissions: submissions,
    });
}