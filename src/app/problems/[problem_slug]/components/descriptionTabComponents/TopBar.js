//this is for description tab
import { CheckIcon } from "@heroicons/react/24/solid";

function TopBar({id, name, status, difficulty}) {

    //for difficulty level
    const styleForDifficulty = {
        "color": (difficulty === "easy") ? "#7BE8A0":(difficulty === "medium" ? "#F7D57A":"#EF4444")
    }

    return (
        <div id="basic-info" className="flex justify-between gap-2 max-w-full">
            <h2 className="font-inter font-semibold text-2xl sm:text-xl lg:text-2xl text-[#E5EAF0] text-shadow-[#0F141A] text-shadow-md wrap-break-word min-w-0">
                {id}. {name} 
            </h2>
            <div className="flex gap-2 items-center">
                <p style={styleForDifficulty} className="text-lg sm:text-base lg:text-lg">{difficulty}</p>
                {status && 
                    <div className=" text-[#3A82F6] " title="solved">
                        <CheckIcon className="h-5 w-5"/>
                    </div>
                }
            </div>
        </div>
    )
}

export default TopBar;