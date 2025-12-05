// import { useSession } from "next-auth/react"

import { useEffect, useState } from "react";
import Submission from "./submissionsTabComponents/Submission";
import Loading from "../loading";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

import fetchSubmissions from "../util/fetchSubmissions";

export default function SubmissionsTab({problem_details, setHistoryPage, openLatest}) {

    const [submissions, setSubmissions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const slug = problem_details.slug;

    useEffect(() => {
        async function fetchData() {
            const response = await fetchSubmissions(slug);
            setSubmissions(response);
            setIsLoading(false);
        }
        fetchData();
    }, []);
    
    if (isLoading) {
        return <Loading />
    } 
    
    return (
        <>
            <div className="flex justify-between items-center sticky top-0 z-10 bg-[#1D232B] py-2">
                <button className="bg-[#2A3138] text-[#E5EAF0] border border-[#3A424C] active:bg-[#1D232B] hover:bg-[#343C45] p-1 rounded-full h-7 w-7 sm:h-8 sm:w-8 flex justify-center items-center hover:scale-101 relative before:content-[''] before:absolute before:pointer-events-auto before:inset-[-0.4rem] before:z-1 sm:before:hidden"
                    onClick={() => setHistoryPage(false)}>
                    <ArrowLeftIcon className="h-6 w-6 "/>
                </button>
                <div className="flex-1 text-center pr-8 sm:pr-10">
                    <h3 className="text-2xl sm:text-xl lg:text-2xl text-[#E5EAF0] text-shadow-[#0F141A] text-shadow-md font-bold">Submissions</h3>
                </div>
            </div>
            <div className="px-2 flex flex-col gap-1">
                {submissions.map((submission, index) => <Submission key={submission.id} submission={submission} expandLatest={(openLatest && index === 0)}/>)}
                {submissions.length === 0 &&
                    <div className="w-full border border-[#2A3038] flex justify-between items-center p-2 rounded-lg bg-[#1A1F24]">
                        <p className="text-base md:text-lg text-[#E5EAF0] font-inter">No Submissions Yet!</p>
                    </div>
                }
            </div>
        </>
    )
}
