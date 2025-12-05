function getFirstWords(text, num) {
    let count = 0;
    let firstTenWords = "";
    const words = text.split(' ');

    for (const word of words) {
        firstTenWords += word + " ";
        count += 1;

        if (count === num) {
            break;
        }
    }

    if (words.length > num) {
        firstTenWords += "...";
    }

    return firstTenWords;

}

export default function Preview({answer, display_submitted_at, score, score_color}) {
    const explanation_to_display = getFirstWords(answer, 20);
    const explanation_to_display_on_phone = getFirstWords(answer, 10);

    return (
        <>
            <div className="flex flex-col gap-3 flex-1 pr-4 ">
                <div className="flex gap-2 items-start text-sm md:text-base">
                    <h4 className="font-bold text-[#9EA7B0] md:whitespace-nowrap">Your answer:</h4>
                    <p className="text-[#E5EAF0] leading-relaxed hidden sm:block">{explanation_to_display}</p>
                    <p className="text-[#E5EAF0] leading-relaxed sm:hidden">{explanation_to_display_on_phone}</p>
                </div>
                <div className="flex-col gap-2  text-[#636E7B]">
                    <div className="flex gap-2 text-sm">
                        <span className="font-medium">Submitted at:</span>
                        <span>{display_submitted_at}</span>
                    </div>
                    <div className="md:hidden text-base">
                        <span className="font-medium">Score: </span>
                        <span className={`font-bold ${score_color}`}>{score}</span>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center border-l border-[#2A3038] pl-2 md:pl-4  md:min-w-16 ">
                <span className={`text-2xl font-bold ${score_color}`}>{score}</span>
                <span className="text-xs text-[#636E7B] uppercase tracking-wider">Score</span>
            </div>
        </>
    )
}