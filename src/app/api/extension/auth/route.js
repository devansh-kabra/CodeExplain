import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { db } from "../../../../../lib/db";
import jwt from "jsonwebtoken";

function issueExtensionJwt(data) {
    return jwt.sign(
        {
            type: "extension",
            userId: data,
            aud: "chrome-extension"
        },
        process.env.NEXTAUTH_SECRET,
        {
            expiresIn: "30d"
        }
    );

}

export async function GET(request) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.dbId) {
        return new Response("Unauthorized", { status: 401 });
    }

    const token = issueExtensionJwt(session.user.dbId);

    return Response.json({ token });

}