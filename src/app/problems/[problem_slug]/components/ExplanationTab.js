import ExplanationText from "./explanationTabComponents/TipTap/ExplanationText";
import TopBar from "./explanationTabComponents/topbar/TopBar";

function ExplanationTab() {
    return (
        <div className="w-[95%] sm:w-[60%] lg:w-[70%] bg-[#1D232B] border border-[#2A3038] px-4 pt-2 pb-4 mb-4 sm:mb-0 rounded flex flex-col gap-3 h-[calc(100dvh-68px)] overflow-y-scroll scrollbar-hide">
            <TopBar />
            <hr className="text-[#2A3038] -mx-4"/> 
            <ExplanationText />
        </div>
    )
}

export default ExplanationTab;