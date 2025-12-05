"use client";
import { ArrowLeftIcon, MicrophoneIcon, Bars3Icon, BookmarkIcon as BookmarkSolid } from "@heroicons/react/24/solid";
import { BookmarkIcon as BookmarkOutlines } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";

function SmallScreenTopBar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const classNameForButton = "bg-[#2A3138] text-[#E5EAF0] border border-[#3A424C] active:bg-[#1D232B] hover:bg-[#343C45] p-1 rounded-full h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center hover:scale-101 relative before:content-[''] before:absolute before:pointer-events-auto before:inset-[-0.4rem] before:z-1 sm:before:hidden";

    return (
        <div className="flex sm:hidden justify-between items-center relative">
            <button className={classNameForButton} onClick={() => setMenuOpen(!menuOpen)}>
                <Bars3Icon className="h-6 w-6 "/>
            </button>
            {menuOpen &&
                <div className="flex z-10 bg-[#1D232B] gap-3">
                    <button className={classNameForButton}>
                        <ArrowLeftIcon className="h-6 w-6 "/>
                    </button>
                    <button className={classNameForButton}>
                        <MicrophoneIcon className="h-6 w-6 "/>
                    </button>
                    <a target="_blank" rel="noopener noreferrer">
                        <button className={classNameForButton + " relative "}>
                            <Image
                                src="/LeetCode_logo.png"
                                alt="LeetCode Redirect"
                                fill
                                className="object-cover object-center p-1 "
                            />
                        </button> 
                    </a>
                    <button className={classNameForButton}>
                        <BookmarkSolid className="h-6 w-6 "/>
                    </button>
                </div>
            }
            <button className="bg-[#2A3138]  border border-[#3A424C] hover:bg-[#343C45] text-center rounded-full px-4  h-8 sm:h-10  active:bg-[#1D232B] hover:scale-101 flex justify-center items-center absolute right-0">
                <p className="text-xl font-poppins font-semibold text-[#E5EAF0]">Submit</p>
            </button>
        </div>
    )
}

export default SmallScreenTopBar;