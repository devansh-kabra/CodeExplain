"use client"
//this is a file for home page buttons
import { signIn } from "next-auth/react";

export function ExploreNow() {

    const handleClick = () => {
        document.getElementById("FAQ").scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    return (
        <button className={`font-poppins bg-[#2C3640] hover:bg-[#37414C] active:bg-[#1F252B] ring ring-[#3A4750] font-semibold
                            text-base sm:text-lg xl:text-lg text-white text-shadow-md py-0 px-0 sm:py-1 sm:px-3 min-h-10 sm:min-h-9 
                            w-35 sm:w-38 xl:w-38 rounded-full cursor-pointer active:scale-95 hover:scale-101 transition-transform duration-300 ease-in-out`}
                onClick={handleClick} >
            Explore Now!
        </button>
    )
}

export function BeginNow() {

    const handleClick = () => {
        signIn(undefined, {
            callbackUrl: "/dashboard"
        });
    }


    return (
        <button className={`font-poppins bg-[#2C3640] hover:bg-[#37414C] active:bg-[#1F252B] ring ring-[#3A4750] font-semibold
                            text-base sm:text-lg xl:text-lg text-white text-shadow-md py-0 px-0 sm:py-1 sm:px-3 min-h-10 sm:min-h-9 
                            w-35 sm:w-38 xl:w-38 rounded-full cursor-pointer active:scale-95 hover:scale-101 transition-transform duration-300 ease-in-out`}
                onClick={handleClick} >
            Begin Now!
        </button>
    )
}
