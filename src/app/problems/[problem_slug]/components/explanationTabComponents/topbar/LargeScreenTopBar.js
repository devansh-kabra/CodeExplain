//this is for large screens only
import { ArrowLeftIcon, MicrophoneIcon, Bars3Icon, BookmarkIcon as BookmarkSolid } from "@heroicons/react/24/solid";
import { BookmarkIcon as BookmarkOutlines } from "@heroicons/react/24/outline";
import Image from "next/image";

function LargeScreenTopBar() {

    const classNameForButton = "bg-[#2A3138] text-[#E5EAF0] border border-[#3A424C] active:bg-[#1D232B] hover:bg-[#343C45] p-1 rounded-full h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center hover:scale-101 relative before:content-[''] before:absolute before:pointer-events-auto before:inset-[-0.4rem] before:z-1 sm:before:hidden";

    return ( 
        <div className="hidden sm:flex justify-between items-center ">
            <div className="flex gap-3 sm:gap-1.5">
                <button className={classNameForButton}>
                    <ArrowLeftIcon className="h-6 w-6 "/>
                </button>
                <button className={classNameForButton}>
                    <MicrophoneIcon className="h-6 w-6 "/>
                </button>
            </div>
            <div>
                <button className="bg-[#2A3138]  border border-[#3A424C] hover:bg-[#343C45] text-center rounded-full px-4  h-8 sm:h-10  active:bg-[#1D232B] hover:scale-101 flex justify-center items-center">
                    <p className="text-xl font-poppins font-semibold text-[#E5EAF0]">Submit</p>
                </button>
            </div>
            <div className="flex gap-3 sm:gap-1.5">
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
        </div>
    )
}

export default LargeScreenTopBar;