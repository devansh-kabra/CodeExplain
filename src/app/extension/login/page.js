"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ExtensionLogin() {
    const {data: session, status} = useSession();

    useEffect(() => {
        async function getExtensionToken() {
            const response = await fetch("/api/extension/auth");
            const {token} = await response.json();

            window.postMessage(
                {
                    source: "CodeExplain",
                    type: "EXTENSION_TOKEN",
                    token
                },
                "https://code-explain-seven.vercel.app"
            );

            const timer = setTimeout(() => window.close(), 800);
            return () => clearTimeout(timer);
        }

        if (status === "authenticated") {
            return getExtensionToken();
        }
       
    }, [status]);

    if (status === "unauthenticated") {
        redirect("/api/auth/signin?callbackUrl=%2Fextension%2Flogin");
    } 

    return (
        <div className="h-dvh flex justify-center items-center font-inter ">
            <p>
                Connecting to Extension... You may close this tab!
            </p>
        </div>
    )
}