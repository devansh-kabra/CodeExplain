import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { db } from "../../../../lib/db";

export async function POST(request) {
    const body = await request.json();
    const session = await getServerSession(authOptions);

    if (!session) {
        return Response.json({
            "message": "User Not Logged in",
        }, {
            status: 401
        });
    }

    const userId = session.user.dbId;
    const { problem_id } = body;

    try {
        await db.query(`
            INSERT INTO saved_problems
            VALUES ($1, $2)
        `, [userId, problem_id]);
    } catch (err) {
        console.log(err);
        return Response.json({
            "message": "Unsuccessful"
        }, {
            status: 503
        });
    }

    return Response.json({
        "message": "Successful"
    });
}

export async function DELETE(request) {
    const body = await request.json();
    const session = await getServerSession(authOptions);

    if (!session) {
        return Response.json({
            "message": "User Not Logged in",
        }, {
            status: 401
        });
    }

    const userId = session.user.dbId;
    const {problem_id} = body;

    try {
        await db.query(`
            DELETE FROM saved_problems
            WHERE user_id = $1
            AND problem_id = $2
        `, [userId, problem_id]);
    } catch (err) {
        console.log(err);
        return Response.json({
            "message": "Unsuccessful"
        }, {
            status: 503
        });
    }

    return Response.json({
        "message": "Successful"
    },{
        status: 200
    });
}