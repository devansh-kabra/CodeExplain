import Navbar from "@/components/Navbar";
import TotalProgress from "./components/KPIs/TotalProgress/TotalProgress";
import WeeklyProgress from "./components/KPIs/WeeklyProgress/WeeklyProgress";
import Topicwise from "./components/KPIs/TopicwiseProgress/Topicwise";
import ProblemList from "./components/ProblemList";

import { Suspense } from "react";

//auth
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { redirect } from 'next/navigation'

//problems
import fetchAllProblems from "./util/fetchAllProblems";
import Loading from "./loading";

export default async function Dashboard() {
    //fetch the problems here itself for SEO make this page async
    // const all_problems
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/");
        return;
    }
    const userId = session.user.dbId;
//     {
//     id: 6,
//     name: 'Subarray with maximum sum',
//     slug: 'subarray-with-maximum-sum',
//     difficulty: 'medium',
//     leetcode_link: 'https://leetcode.com/problems/maximum-subarray/description/',
//     is_saved: false,
//     is_completed: false,
//     topics: [ 'Array', 'Dynamic Programming' ]
//   }

    const all_problems = await fetchAllProblems(userId);

    return (
        <div id="dashboard" className="bg-[#1A1F25] min-h-dvh flex flex-col gap-4 pb-8">
            <h1 className="sr-only">Dashboard</h1>
            <Navbar/>
            <section id="stats" className="w-full flex justify-center mt-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 rounded-sm w-[90%] sm:w-[85%] lg:w-[75%] gap-2 bg-[#1C2229] ">
                    <Suspense fallback={<Loading/>}>
                        <Topicwise userId={userId} />
                    </Suspense>
                    <Suspense fallback={<Loading/>}>
                        <TotalProgress userId={userId} total={all_problems.length}/>
                    </Suspense> 
                    <Suspense fallback={<Loading/>}>
                        <WeeklyProgress userId={userId}/>
                    </Suspense>
                </div>
            </section>
            <section id="problems" className="w-full flex justify-center mt-2" >
                <ProblemList all_problems={all_problems} />
            </section>
        </div>
    )
}