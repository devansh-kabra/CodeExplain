"use client"
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useState, useRef } from 'react';

function QnA(props) {
    const [unhide, setUnHide] = useState(false);
    const answerRef = useRef(null);

    const answerStyle = {
        "maxHeight": unhide ? `${answerRef.current?.scrollHeight}px`:'0px',
        "transition": "max-height 0.3s ease-in-out",
    }

    return (
        <div className={`${unhide ? "bg-[#262D35] border-[#3B4652]":"bg-[#1F242B] border-[#2E363F]"}  border w-[90%] sm:w-[75%] lg:w-[50%] 
            rounded-lg h-fit flex-col justify-center text-left px-4 py-2 hover:border-[#3B4652]`}>
            <div id='question' className='flex justify-between items-center cursor-pointer -mx-4 px-4 -my-3 py-3'  onClick={()=>setUnHide(!unhide)}>
                <h3 className="text-[#E8ECF0] font-inter text-sm sm:text-base max-w-[80%]">{props.Q}</h3>
                <div className={`${unhide ? "text-white":"text-[#AAB4BF]"} -m-3.5 p-3.5 sm:-m-3 sm:p-3 flex flex-col items-center justify-center hover:scale-110 hover:text-[#D0D6DD]
                    transition-transform duration-300 ease-in-out cursor-pointer`}>
                    <ChevronDownIcon className="h-4 w-4 sm:h-5 sm:w-5"/>
                </div>
            </div>
            <div className='mt-2 overflow-hidden ' ref={answerRef} style={answerStyle}>
                <hr className="border border-[#323A43]"/>
                <div id='answer' className='flex items-center mt-2'>
                    <p className='text-[#C2CBD3] font-inter text-xs sm:text-sm '>{props.A}</p>
                </div>
            </div>
        </div>
    )
}

export default QnA;