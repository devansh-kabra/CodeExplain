import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { db } from "../../../../../lib/db";

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 7,
    },
    callbacks: {
        async signIn({user}) {
            try {
                const res = await db.query("SELECT id FROM users WHERE email = $1", [user.email]);
                const isNew = res.rowCount === 0;
                
                if (isNew) {
                    await db.query("INSERT INTO users(name, email) VALUES($1, $2)", [user.name, user.email]);
                }  
            } catch (err) {
                return false;
            }

            return true;
        },
        async redirect({url, baseUrl}) {
            if (url?.startsWith("/") || url?.startsWith(baseUrl)) return url;
            return baseUrl;
        },
        async session({session, token }) {
            session.user.dbid = token.dbId;
            session.user.name = token.name;
            session.user.email = token.email;
            return session;
        },
        async jwt({token, user}) {
            if (user) {
                token.dbId = user.id; 
                token.name = user.name;
                token.email = user.email;
            }
            return token;
        }
    }
}