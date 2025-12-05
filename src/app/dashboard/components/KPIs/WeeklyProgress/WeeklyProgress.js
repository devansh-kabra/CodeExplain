
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

function WeeklyProgress() {
    const today = new Date();
    const past7Days = []; //will be generated and sent from the server

    for (let i=6; i >= 0; i -= 1) {
        const day = new Date();
        day.setDate(today.getDate()-i);
        past7Days.push(day);
    }


    return (
        <div className="w-full grid grid-cols-7 gap-1">
            {past7Days.map(day =>
                (
                    <DayStreak key={day.getDate()} date={day.getDate()} month={monthMap(day.getMonth())} active={Math.floor(Math.random()*2)}/>
                    
                )
            )}
        </div>
    )
}

export default WeeklyProgress;