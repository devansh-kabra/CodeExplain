
function ProblemDescription({description}) {
    return (
        <div className="flex flex-col font-inter my-1">
            <h3 className="text-[#DDE3EA] font-medium text-base">Description: </h3>
            <p className="text-[#AAB4BF] text-base">
                {description}
            </p>
        </div>
    )
}

export default ProblemDescription;