import { FunnelIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function MoreFilters({displayTopics,displayDifficulty, filterFn}) {
    const [showPopUp, setShowPopUp] = useState(false);
    //default
    const topics = ["Sorting","Array","Binary Search","Strings","Linked List","Recursion","Bit Manipulation","Stack & Queue",
        "Two Pointer","Sliding Window","Heaps", "Greedy","Binary Tree","BST","Graphs","Dynamic Programming"
    ];
    const difficulty = ["easy", "medium", "hard"];

    //new
    const [selectedTopics, setSelectedTopics] = useState(displayTopics);
    const toggleTopic = (topic) => {
        setSelectedTopics(prev => {
            const updated = new Set(prev);
            updated.has(topic) ? updated.delete(topic):updated.add(topic);
            return updated;
        });
    }

    const [selectedDifficulty, setSelectedDifficulty] = useState(displayDifficulty);
    const toggleDifficulty = (level) => {
        setSelectedDifficulty(prev => {
            const updated = new Set(prev);
            updated.has(level) ? updated.delete(level):updated.add(level);
            return updated;
        });
    }

    const handleApply = () => {
        filterFn({topics: selectedTopics, difficulty: selectedDifficulty});
        setShowPopUp(false);
    }

    function FilterButton({content, selected, toggleFn}) {
        return (
            <div className="font-inter">
                <button className={`border ${selected ? "bg-[#3A82F6] border-[#3A82F6] text-white sm:hover:bg-[#4A8DFF]":
                    "bg-[#2A3138] border-[#2D333B] text-[#D0D7DE] sm:hover:bg-[#303841]"}  
                    px-3 py-1 text-sm rounded-2xl cursor-pointer `}
                    onClick={() => toggleFn(content)}>
                    {content}
                </button>
            </div>
        )
    }
    //absolute top-full right-0 sm:right-full
    function PopUp() {
        return (
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/55 flex justify-center items-center z-10">
                <div id="filter-popup" className={`flex flex-col gap-4  w-2xs sm:w-sm lg:w-md
                        bg-[#1F242C] border border-[#2D333B] shadow-xl p-2 rounded-xl cursor-default`}>
                    <div id="topic-filters" className="w-full flex flex-col gap-2">
                        <h4 className="font-poppins text-[#F0F3F7] self-start text-base sm:text-lg lg:text-xl font-semibold">Topics:</h4>
                        <div className="flex flex-wrap gap-2">
                            {topics.map(topic => 
                                <FilterButton key={topic} content={topic} selected={selectedTopics.has(topic)} toggleFn={toggleTopic}/>
                            )}
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <h4 className="font-poppins text-[#F0F3F7] self-start text-base sm:text-lg lg:text-xl font-semibold">Difficulty:</h4>
                        <div className="flex flex-wrap gap-2">
                            {difficulty.map(level => 
                                <FilterButton key={level} content={level} selected={selectedDifficulty.has(level)} toggleFn={toggleDifficulty}/>
                            )}
                        </div>
                    </div>
                    <div className="w-full flex gap-2 items-center">
                        <button onClick={handleApply}
                            className="font-inter grow bg-[#3A82F6] sm:hover:bg-[#5A97FF] active:bg-[#2F6AD9] rounded-2xl px-3  py-1 text-sm sm:text-base ">
                            Apply
                        </button>
                        <div title="Reset" onClick={() => {setSelectedTopics(new Set()); setSelectedDifficulty(new Set());}}>
                            <ArrowPathIcon className="w-5 h-5 sm:h-6 sm:w-6 text-[#F0F3F7]"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="problem-navbar-button flex items-center justify-center relative" title="Filter">
            <button className="px-4 py-1 cursor-pointer" onClick={() => setShowPopUp(!showPopUp)} >
                <FunnelIcon className="h-4 w-4 sm:h-5 sm:w-5"/>
            </button>
            {showPopUp && <PopUp/>}
        </div>
    )
}

export default MoreFilters;