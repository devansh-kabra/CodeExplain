import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";

function RandomQ() {
    return (
        <div className="problem-navbar-button flex items-center justify-center">
            <button className="px-4 py-1 cursor-pointer" title="Random">
                <ArrowsRightLeftIcon className="h-5 w-5"/>
            </button>
        </div>
    )
}

export default RandomQ;