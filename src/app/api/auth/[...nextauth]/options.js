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
            if (!user) {
                return false;
            }
            return true;
        },
        async redirect({url, baseUrl}) {
            if (url?.startsWith("/") || url?.startsWith(baseUrl)) return url;
            return baseUrl;
        },
        async session({session, token }) {
            if (!token?.dbId) {
                return null; // forces logout
            }
            session.user.dbId = token.dbId;
            session.user.name = token.name;
            session.user.email = token.email;
            return session;
        },
        async jwt({token, user}) {
            if (user) {
                let userId = null;

                const res = await db.query("SELECT id FROM users WHERE email = $1", [user.email]);
                const isNew = res.rowCount === 0;
                
                if (isNew) {
                    const id_res = await db.query("INSERT INTO users(name, email) VALUES($1, $2) RETURNING id", [user.name, user.email]);
                    userId = await id_res.rows[0].id;
                }  else {
                    userId = await res.rows[0].id;
                }

                token.dbId = userId; 
                token.name = user.name;
                token.email = user.email;
            }

            if (token?.dbId) {
                try {
                    const check = await db.query(
                        "SELECT id FROM users WHERE id = $1",
                        [token.dbId]
                    );

                    if (check.rowCount === 0) {
                        return null;
                    }  
                } catch (err) {
                    return null;
                }
                
            }

            return token;
        }
    }
}