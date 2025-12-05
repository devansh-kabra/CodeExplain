"use client";
import { useState, useTransition } from "react";
import SearchBar from "./Filters/SearchBar";
import AllOrSaved from "./Filters/AllOrSaved";
import RandomQ from "./Filters/RandomQ";
import MoreFilters from "./Filters/MoreFilters";
import Problems from "./Problems";

function ProblemList({all_problems}) {

    const [displayProblems, setDisplayProblems] = useState(all_problems);
    const [filters, setFilters] = useState({
        saved: "all",
        topics: new Set(),
        difficulty: new Set(),
    });

    //useTransition makes it loader
    const [isPending, startTransition] = useTransition();

    const filtering = (new_filter) => {
        startTransition(() => {
            
            const mergedFilters = {...filters, ...new_filter};
            setFilters(mergedFilters);
            
            setDisplayProblems(
                all_problems.filter(problem => 
                    (mergedFilters.saved === "all" || problem.is_saved) &&
                    (mergedFilters.topics.size === 0 || problem.topics.some(topic => mergedFilters.topics.has(topic))) &&
                    (mergedFilters.difficulty.size === 0 || mergedFilters.difficulty.has(problem.difficulty))
                )
            );
            
        });
    }
   
    return (
        <div className="rounded-sm w-[90%] sm:w-[85%] lg:w-[75%] gap-2 bg-[#1C2229] relative">
            <div id="problem-navbar" className="bg-[#1D232B] border border-[#2A3038] rounded-sm p-2 flex flex-col gap-2 sm:flex-row sm:gap-0 justify-between px-2">
                <div id="left" className="flex gap-2 sm:w-fit">
                    <AllOrSaved display={filters.saved} startFiltering={filtering}/>
                </div>
                <div id="right" className="flex gap-2 justify-end">
                    <SearchBar />
                    <RandomQ all_problem_slugs={displayProblems.map(problem => problem.slug)}/>
                    <MoreFilters displayTopics={filters.topics} displayDifficulty={filters.difficulty} filterFn={filtering}/>
                </div>
            </div>
            {isPending &&
                <div className="w-full h-full flex justify-center items-center top-0 bottom-0 absolute">
                    Filtering...
                </div>
            }

            <Problems display_problems={displayProblems}/>
            
        </div>
    )
}

export default ProblemList;