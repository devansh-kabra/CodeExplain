"use client";
import { BookmarkIcon as BookmarkSolid, CheckIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon as BookmarkOutline, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import toggleBookmark from "@/app/util/toggleBookmark";

export default function SaveProblem({is_saved, id}) {

    const [bookmarked, setBookmarked] = useState(is_saved);

    const handleClick = async () => {
        const book = !bookmarked; //if bookmarked and clicked means unbookmark so book = false and vice versa
        setBookmarked(!bookmarked);
        const result = await toggleBookmark(id, book); //if book is true we bookmark else we unbook
        if (!result) {
            setBookmarked(!book); //setting it again
        }
    }

    return (
        <div className="cursor-pointer -my-2 py-2 px-3 sm:hover:scale-110 transition-transform delay-100" onClick={handleClick}>
            {bookmarked ?
                (<BookmarkSolid className="h-5 w-5 text-[#3A82F6] "/>)
                :
                (<BookmarkOutline className="h-5 w-5 sm:h-5 sm:w-5 text-[#8F98A3]  sm:hover:text-[#B7C1CD]"/>)
            } 
        </div>
    )
}