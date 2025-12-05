import getUserStreak from "@/app/dashboard/util/getUserStreak.js";
import getUserActivity from "@/app/dashboard/util/getUserActivity.js";
import DayStreak from "./DayStreak.js";

function monthMap(monthIdx) {
    //month mapping:
    const months = {
        0: "January",
        1: "Febuary",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }

    return months[monthIdx];
}

async function WeeklyProgress({userId}) {
    const today = new Date();
    const past7Days = []; //will be generated and sent from the server

    for (let i=6; i >= 0; i -= 1) {
        const day = new Date();
        day.setDate(today.getDate()-i);
        past7Days.push(day);
    }

    const streak = await getUserStreak(userId);
    const userActivity = await getUserActivity(userId);


    return (
        <div id="weekly-progress" className="dashboard_kpi_boxes flex flex-col items-center justify-center gap-2">
            <h2 className="text-[#DDE3EA] font-poppins text-lg sm:text-base md:text-lg text-center">Streak: {streak}🔥</h2>
            <div className="w-full grid grid-cols-7 gap-1">
                {past7Days.map((day, i) =>
                    <DayStreak key={i} date={day.getDate()} month={monthMap(day.getMonth())} active={userActivity[i]}/>    
                )}
            </div>
        </div>
    )
}

export default WeeklyProgress;