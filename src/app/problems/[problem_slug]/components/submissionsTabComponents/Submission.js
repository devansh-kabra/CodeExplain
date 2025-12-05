import { useState } from "react";
import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from "@heroicons/react/24/solid";
import Preview from "./submissionDisplay/Preview";
import Expand from "./submissionDisplay/Expand";


export default function SubmissionPreview({submission, expandLatest}) {

    const score = submission.score;
    const score_color = (score > 75) ? "text-[#4ADE80]":(score > 50 ? "text-[#FACC15]":"text-[#F87171]");
    const submitted_at = new Date(submission.submitted_at);
    const display_submitted_at = `${submitted_at.getDate()}/${submitted_at.getMonth()+1}/${submitted_at.getFullYear()} ${submitted_at.getHours().toString().padStart(2, '0')}:${submitted_at.getMinutes().toString().padStart(2, '0')}`
    const [expand_latest, setExpand_latest] = useState(expandLatest);
    const [expand, setExpand] = useState(expandLatest);

    return (
        <div className={`w-full border border-[#2A3038] ${expand ? "border-l-[#3A82F6] border-l-2":""} flex justify-between  items-center p-4 rounded-lg 
                ${expand_latest ? "bg-[#22272E] hover:bg-[#1A1F24] active:bg-[#22272E]":"bg-[#1A1F24] hover:bg-[#22272E] active:bg-[#1A1F24]"}  
                font-sans cursor-default relative `}
                onClick={() => {setExpand(!expand); setExpand_latest(false)}}>

            {expand ? 
                (<Expand answer={submission.answer} feedbacks={submission.feedbacks} display_submitted_at={display_submitted_at} score={score} score_color={score_color}/>)
                :
                (<Preview answer={submission.answer} display_submitted_at={display_submitted_at} score={score} score_color={score_color}/>)
            }

            <div className="absolute top-1 right-1 text-[#9EA7B0]">
                {expand ? 
                    (<ArrowsPointingInIcon className="h-4 w-4 " />)
                    :
                    (<ArrowsPointingOutIcon className="h-4 w-4" />)
                }
            </div>
        </div>
    )
}