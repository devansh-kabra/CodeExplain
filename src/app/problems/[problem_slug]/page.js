import Navbar from "@/components/Navbar";
import DescriptionTab from "./components/DescriptionTab";
// import findData from "./dummy_data";
import ExplanationTab from "./components/ExplanationTab";
import fetchProblem from "./util/fetchProblem";

//auth
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from 'next/navigation'

async function ProblemPage({params}) {
    const urlParams = await params;
    const slug = urlParams.problem_slug;

    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/");
        return;
    }
    const userId = session.user.dbId;
    
    const problem_details = await fetchProblem(userId, slug) //fetch here

    return (
        <div className="min-h-dvh bg-[#161B22] ">
            <h1 className="sr-only">{problem_details.name}</h1>
            <Navbar/>
            <div className="mt-3 w-full flex flex-col items-center gap-1 sm:gap-0 sm:flex-row" >
                <DescriptionTab problem_details={problem_details} />
                <ExplanationTab problem_details={problem_details} />
            </div>  
        </div>
    )
}

export default ProblemPage;