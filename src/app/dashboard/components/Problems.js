import OneProblem from "./OneProblem";

function Problems({display_problems}) {
    return (
        <div className="w-full overflow-scroll scrollbar-hide">
            <table className="w-full min-w-[560px] border-separate border-spacing-y-2.5 border-[#2C323B]">
                <thead className=" text-white font-poppins bg-[#1E242B] text-base md:text-lg lg:text-xl">
                    <tr>
                        <th scope="col" className="w-[10%] py-1">Status</th>
                        <th scope="col" className="w-[40%]">Name</th>
                        <th scope="col" className="w-[10%]">Explain</th>
                        <th scope="col" className="w-[10%]">Solve</th>
                        <th scope="col" className="w-[20%]">Difficulty</th>
                        <th scope="col" className="w-[10%]">Save</th>
                    </tr>
                </thead>
                <tbody className="font-inter">
                    {display_problems.map(problem_details => 
                        <OneProblem key={problem_details.id} problem_details={problem_details}/>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Problems;