
function DayStreak(props) {
    const date = props.date;
    const month = props.month;
    const active = props.active;

    return (
        <div className={`font-inter border flex flex-col items-center justify-center cursor-default rounded p-0.5 overflow-hidden
            ${active ? "bg-[#3A82F6] border-[#1F2A37] sm:hover:bg-[#5A97FF]":"bg-[#22272E] border-[#2D333B] sm:hover:bg-[#2A3138]"}`}>

            <p className={`text-[6px] sm:text-[4px] lg:text-[6px] ${active ? "text-[#E5F0FF]":"text-[#7D8590]"}`}>{month}</p>
            <h3 className={`text-lg sm:text-base lg:text-lg ${active ? "text-white":"text-[#E5F0FF]"}`}>{date}</h3>
        </div>
    )
}

export default DayStreak;