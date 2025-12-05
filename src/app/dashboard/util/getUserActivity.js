import { db } from "../../../../lib/db";

export default async function getUserActivity(userId) {
    const response = await db.query(`
       SELECT submitted_at
       FROM user_answers
       WHERE user_id = $1 
       AND submitted_at >= now() - INTERVAL '7 days'
       ORDER BY submitted_at DESC; 
    `, [userId])

    const finalData = response.rows;
    
    const today = new Date();
    today.setHours(0,0,0,0);
    const sevenDayBefore = new Date();
    sevenDayBefore.setDate(today.getDate()-7);

    const userActivity = new Array(7).fill(false);

    for (const data of finalData) {
        const activity = new Date(data.submitted_at);
        activity.setHours(0,0,0,0);

        const differenceInTime = today.getTime()-activity.getTime();
        const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

        if (differenceInDays < 7) {
            userActivity[6-differenceInDays] = true;
        } else if (differenceInDays >= 7) {
            break;
        }
    }
    return userActivity;
    
}
