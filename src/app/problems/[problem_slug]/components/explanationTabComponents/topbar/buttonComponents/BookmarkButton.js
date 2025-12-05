import {BookmarkIcon as BookmarkSolid } from "@heroicons/react/24/solid";
import { BookmarkIcon as BookmarkOutline } from "@heroicons/react/24/outline";
import toggleBookmark from "@/app/util/toggleBookmark";
import { useState } from "react";

export default function BookmarkButton({classNameForButton, is_saved, problem_id}) {

    const [bookmarked, setBookmarked] = useState(is_saved);

    const handleClick = async () => {
        const book = !bookmarked; //if bookmarked and clicked means unbookmark so book = false and vice versa
        setBookmarked(!bookmarked);
        const result = await toggleBookmark(problem_id, book); //if book is true we bookmark else we unbook
        if (!result) {
            setBookmarked(!book); //setting it again
        }
    }

    return (
        <button className={classNameForButton} title="Bookmark" onClick={handleClick}>
            {bookmarked ?
                (<BookmarkSolid className="h-6 w-6 "/>):(<BookmarkOutline className="h-6 w-6 "/>)
            }
        </button>
    )
}