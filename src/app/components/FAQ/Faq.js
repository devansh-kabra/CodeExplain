import HomePageButton from "../HomePageButton.js";
import faqData from "./faqData.js";
import QnA from "./QnA.js";

function FAQ() {
    return (
        <div className="flex flex-col justify-center items-center pt-6 sm:pt-10 gap-6">
            <h2 className="font-poppins text-[#F5F7FA] font-bold text-3xl sm:text-4xl md:text-5xl text-shadow-lg/45 sm:mb-6 text-center">
                Why CodeExplain?
            </h2>
            <div id="accordion" className="w-full flex flex-col items-center gap-3">
                {faqData.map(item => 
                    (<QnA key={item.key} Q={item.Q} A={item.A}/>)
                )}
            </div>
        </div>
    )
}

export default FAQ;