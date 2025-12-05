"use client";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import BackButton from "./buttonComponents/BackButton";
import SubmitButton from "./buttonComponents/SubmitButton";
import LeetcodeButton from "./buttonComponents/LeetcodeButton";
import BookmarkButton from "./buttonComponents/BookmarkButton";
import HistoryButton from "./buttonComponents/HistoryButton";
import MicrophoneButton from "./buttonComponents/MicrophoneButton";

function SmallScreenTopBar({problem_id, is_saved, leetcode_link, problem_slug, setHistoryPage, setSubmitted, handleSpeechInput}) {

    const [menuOpen, setMenuOpen] = useState(false);
    const classNameForButton = "bg-[#2A3138] text-[#E5EAF0] border border-[#3A424C] active:bg-[#1D232B] hover:bg-[#343C45] p-1 rounded-full h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center hover:scale-101 relative before:content-[''] before:absolute before:pointer-events-auto before:inset-[-0.4rem] before:z-1 sm:before:hidden";

    return (
        <div className="flex sm:hidden justify-between items-center  flex-wrap sticky top-0 z-10 bg-[#1D232B] py-2">
            <button className={classNameForButton} onClick={() => setMenuOpen(!menuOpen)}>
                <Bars3Icon className="h-6 w-6 "/>
            </button>
            {menuOpen &&
                <div className="flex z-10 bg-[#1D232B] gap-3 flex-col absolute top-full pt-3">
                    <BackButton classNameForButton={classNameForButton}/>
                    <HistoryButton classNameForButton={classNameForButton} setHistoryPage={setHistoryPage}/>
                    <MicrophoneButton classNameForButton={classNameForButton} handleSpeechInput={handleSpeechInput}/>
                    <LeetcodeButton classNameForButton={classNameForButton + " relative "} leetcode_link={leetcode_link}/>
                    <BookmarkButton classNameForButton={classNameForButton} is_saved={is_saved} problem_id={problem_id}/>
                </div>
            }
            <SubmitButton classNameForButton={`bg-[#2A3138]  border border-[#3A424C] hover:bg-[#343C45] text-center rounded-full
                 px-4  h-8 sm:h-10  active:bg-[#1D232B] hover:scale-101 flex justify-center items-center absolute
                 right-0 text-xl font-poppins font-semibold text-[#E5EAF0]`} setSubmitted={setSubmitted}/>
        </div>
    )
}

export default SmallScreenTopBar;