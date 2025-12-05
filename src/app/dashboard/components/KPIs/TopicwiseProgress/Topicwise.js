import Topic from "./Topic";
import { db } from "../../../../../../lib/db";

const topicwise_progress = async (userId) => {
    try {
        const res = await db.query(`
            SELECT 
                t.id AS topic_id,
                t.name AS topic_name,

                -- Total number of problems in this topic
                COUNT(DISTINCT pt.problem_id) AS total_problems,

                -- Completed problems for this user
                COUNT(DISTINCT cp.problem_id) AS completed_problems

            FROM topics t

            LEFT JOIN problem_topics pt
                ON t.id = pt.topic_id

            LEFT JOIN completed_problems cp
                ON pt.problem_id = cp.problem_id
                AND cp.user_id = $1

            GROUP BY 
                t.id, t.name

            ORDER BY 
                t.id;
        `, [userId]);

        const topicwise_prog = res.rows;
        return topicwise_prog;
    } catch (err) {
        console.log(err);
        throw new Error("Cannot connect to database");
    }
}

async function Topicwise({userId}) {
    //dummmy data:
    // const topics = [
    //     { topic: "Sorting", solved: 18, total: 20 },
    //     { topic: "Array", solved: 25, total: 30 },
    //     { topic: "Bin Search", solved: 15, total: 20 },
    //     { topic: "Strings", solved: 20, total: 25 },
    //     { topic: "Linked List", solved: 12, total: 15 },
    //     { topic: "Recursion", solved: 8, total: 10 },
    //     { topic: "BitManip", solved: 6, total: 8 },
    //     { topic: "Stack/Queue", solved: 14, total: 18 },
    //     { topic: "Heaps", solved: 7, total: 10 },
    //     { topic: "Greedy", solved: 9, total: 12 },
    //     { topic: "Bin Tree", solved: 13, total: 15 },
    //     { topic: "BST", solved: 8, total: 10 },
    //     { topic: "Graphs", solved: 11, total: 15 },
    //     { topic: "DP", solved: 20, total: 25 },
    //     { topic: "Sliding/2Ptr", solved: 10, total: 12 },
    // ];

    const topics = await topicwise_progress();

    return (
        <div id="topicwise-progress" className="dashboard_kpi_boxes flex flex-col flex-1 gap-1">
            <h2 className="text-[#DDE3EA] font-poppins text-lg sm:text-base md:text-lg text-center">
                Topicwise progress
            </h2>
            <hr className="border border-[#2A3038]"/>
            <div className="topicwise_kpi grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 overflow-scroll scrollbar-hide max-h-full">
                {topics.map((topic, index) => (
                    <Topic key={topic.topic_id} topic={topic.topic_name} solved={topic.completed_problems} total={topic.total_problems}/>
                ))}
            </div> 
        </div>  
    )
}

export default Topicwise;