import MyCircularProgressbar from './MyCircularProgressBar';
import count_solved_problems from '@/app/dashboard/util/countSolvedProblems';

async function TotalProgress({userId, total}) {

    const count_solved = await count_solved_problems(userId);

    return (
        <div id="total-progress" className="dashboard_kpi_boxes flex items-center justify-center gap-4">
            <h2 className="text-[#DDE3EA] font-poppins text-lg sm:text-base md:text-lg text-center">
                Total Progress 
                <br/>
                {count_solved} / {total}
            </h2>
            <div className="w-20 h-20 sm:hover:scale-105 transition-transform duration-100 ease-in-out cursor-default flex items-center">
                <MyCircularProgressbar solved={count_solved} total={total} />
            </div>
        </div>
    )
    
}

export default TotalProgress;