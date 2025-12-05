export default function Expand({answer, feedbacks, display_submitted_at, score, score_color}) {
    return (
        <>
            <div className="flex flex-col gap-3 flex-1 pr-4 ">
                <div className="flex gap-2 items-start text-sm md:text-base">
                    <h4 className="font-bold text-[#9EA7B0] md:whitespace-nowrap">Your answer:</h4>
                    <p className="text-[#E5EAF0] leading-relaxed">{answer}</p>
                </div>
                <div className="flex gap-2 items-start text-sm md:text-base">
                    <h4 className="font-bold text-[#9EA7B0] md:whitespace-nowrap mr-0.5 md:mr-1">Feedbacks:</h4>
                    <ol>
                        {feedbacks.map((feedback, index) => 
                            <li key={index} className="list-decimal pl-0.5 ml-2 text-[#E5EAF0] leading-relaxed">{feedback}</li>
                        )}
                    </ol>
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