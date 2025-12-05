import { BookmarkIcon as BookmarkSolid, CheckIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon as BookmarkOutline, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SaveProblem from "./SaveProblem";

function OneProblem({problem_details}) {

    const difficultyLevel = problem_details.difficulty;
    const styleForDifficulty = {
        "color": (difficultyLevel === "easy") ? "#7BE8A0":(difficultyLevel === "medium" ? "#F7D57A":"#EF4444")
    }

    return (
        <tr className="sm:hover:bg-[#262D36]  border">
            <td className="py-1 cursor-default">
                <div className="w-full h-full flex justify-center items-center ">
                    {problem_details.is_completed && //convert here to true or false
                        <CheckIcon className="h-5 w-5 text-[#3A82F6]"/>
                    }
                </div>
            </td>
            <td className="py-1">
                <div className="w-full h-full flex justify-start items-center">
                    <h3 className="text-[#F3F4F6] font-semibold text-base md:text-lg">{problem_details.id}. {problem_details.name}</h3>
                </div>
                
            </td>
            <td className="py-1">
                <div className="w-full h-full flex justify-center items-center text-[#F3F4F6] ">
                    <Link href={`problems/${problem_details.slug}`} >
                        <div className="cursor-pointer -my-2 py-2 px-3">
                            <ArrowTopRightOnSquareIcon className="h-5 w-5 sm:hover:scale-110 transition-transform delay-100"/>
                        </div>
                    </Link>
                </div>
            </td>
            <td className="py-1">
                <div className="w-full h-full flex justify-center items-center ">
                        {problem_details.leetcode_link &&
                            <a href={problem_details.leetcode_link} target="_blank" rel="noopener noreferrer">
                                <div className="sm:hover:scale-110 transition-transform delay-100 -my-2 py-2 px-3">
                                    <div className="h-6 w-6 relative ">
                                        <Image
                                            src="/LeetCode_logo.png"
                                            alt="LeetCode Redirect"
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </a>
                        }
                </div>
            </td>
            <td className="py-1">
                <div className="w-full h-full flex justify-center items-center">
                    <p style={styleForDifficulty} className="text-sm md:text-base ">{difficultyLevel}</p>
                </div>
            </td>
            <td className="py-1">
                <div className="flex justify-center items-center ">
                    {/* <div className="cursor-pointer -my-2 py-2 px-3 sm:hover:scale-110 transition-transform delay-100">
                       {problem_details.is_saved ?
                            (<BookmarkSolid className="h-5 w-5 text-[#3A82F6] "/>)
                            :
                            (<BookmarkOutline className="h-5 w-5 sm:h-5 sm:w-5 text-[#8F98A3]  sm:hover:text-[#B7C1CD]"/>)
                        } 
                    </div> */}
                    <SaveProblem is_saved={problem_details.is_saved} id={problem_details.id} />
                </div>
            </td>
        </tr>
    )
}

export default OneProblem;