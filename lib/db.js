import dotenv from "dotenv";
import Pool from "pg-pool"

dotenv.config({path: ".env.local"});

export const db = new Pool({
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    max: 20,
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 5000,
});

// export const db = new Pool({
//     connectionString: process.env.NEON_CONNECTION_STRING,
//     ssl: {
//         rejectUnauthorized: false,
//     }
// });