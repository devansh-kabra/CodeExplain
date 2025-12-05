import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";

function RandomQ({all_problem_slugs}) {

    const handleClick = () => {
        let low = 0;
        let high = all_problem_slugs.length;

        const selected = Math.floor((Math.random())*high);

        window.open(`problems/${all_problem_slugs[selected]}`, '_blank')

    }

    return (
        <div className="problem-navbar-button flex items-center justify-center">
            <button className="px-4 py-1 cursor-pointer" title="Random" onClick={handleClick}>
                <ArrowsRightLeftIcon className="h-5 w-5"/>
            </button>
        </div>
    )
}

export default RandomQ;