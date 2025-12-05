import TopicList from "./descriptionTabComponents/TopicList";
import ProblemDescription from "./descriptionTabComponents/ProblemDescription";
import ProblemExamples from "./descriptionTabComponents/ProblemExamples";
import ProblemConstrains from "./descriptionTabComponents/ProblemConstrains";
import TopBar from "./descriptionTabComponents/TopBar";

function DescriptionTab({problem_details}) {

    return (
        <div className="w-[95%] sm:w-[40%] lg:w-[30%] bg-[#1D232B] border border-[#2A3038] px-4 pt-2 pb-4 rounded flex flex-col gap-3 sm:h-[calc(100dvh-68px)] overflow-y-auto scrollbar-hide" >
            <TopBar id={problem_details.id} name={problem_details.name} status={problem_details.is_completed} difficulty={problem_details.difficulty}/>
            <TopicList topics={problem_details.topics}/>
            <ProblemDescription description={problem_details.description}/>
            <ProblemExamples examples={problem_details.examples}/>
            <ProblemConstrains constraints={problem_details.constraints}/>
        </div>
    )
}

export default DescriptionTab;