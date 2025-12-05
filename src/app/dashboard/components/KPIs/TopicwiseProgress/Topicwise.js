import topicwise_progress from "@/app/dashboard/util/getTopicwiseProgress";
import TopicList from "./Topiclist";

async function Topicwise({userId}) {

    const topics = await topicwise_progress(userId);

    return (
        <div id="topicwise-progress" className="dashboard_kpi_boxes flex flex-col flex-1 gap-1">
            <TopicList topics={topics} container_id={"topicwise-progress"}/>
        </div>  
    )
}

export default Topicwise;