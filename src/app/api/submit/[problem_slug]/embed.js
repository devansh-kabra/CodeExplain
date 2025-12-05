// import dotenv from "dotenv";
// dotenv.config({path: "../../../../../.env.local"});

export default async function embed(text) {

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent`,
        {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" ,
                "X-goog-api-key": process.env.GOOGLE_API_KEY,
            },
            body: JSON.stringify({
                model: "models/gemini-embedding-001",
                content: {
                    parts: [{ text: text}]
                }
            }),
        }
    );

        const data = await response.json();
        return data.embedding.values;

}
