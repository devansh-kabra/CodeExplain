import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import similarity from "compute-cosine-similarity";

import fetchSignals from "./fetchSignals";
import embed from "./embed";
import addToDb from "./addToDb";
import updateStreak from "./updateStreak";

const THRESHOLD = 0.7;

export async function POST(request, {params}) {
    const { problem_slug } = await params;
    const body = await request.json();
    const { problem_id, explanation } = body;

    //getting user id
    const session = await getServerSession(authOptions);
    if (!session) {
        return Response.json({
            score: null,
            feedbacks: ["NOT_LOGGED_IN"],
        });
    }

    const userId = session.user.dbId;

    const explanation_vector_embed = await embed(explanation);
    const signals = await fetchSignals(problem_slug);
    
    const feedback = [];
    let score = 0;
    let maxScore = 0;

    for (const signal of signals) {
        
        const cosine = similarity(explanation_vector_embed, signal.embedding);
        maxScore += signal.weight;
        
        if (cosine > THRESHOLD) {
            score += signal.weight;
        } else {
            feedback.push(signal.feedback);
        }
    }

    const finalScore = Math.round((score/maxScore)*100);

    //user_id, problem_id, answer, score, submitted_at, feedbacks
    try {
        await addToDb(userId, problem_id, explanation, finalScore, feedback);
        await updateStreak(userId);
    } catch (err) {
        return Response.json({
            error: "Cannot connect to databse"
        }, {
            status: 503
        });
    }
    
    return Response.json({
        score: finalScore,
        feedbacks: feedback,
    });
}