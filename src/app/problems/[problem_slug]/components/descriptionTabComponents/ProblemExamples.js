
function ProblemExamples({examples}) {
    return (
        <div className="font-inter flex flex-col gap-1">
            <h3 className="text-[#DDE3EA] font-medium text-base">Examples: </h3>
            <div className="bg-[#232930] border border-[#2F363D] text-[#DDE3EA] text-sm flex flex-col ">
                {examples.map((example, idx) => {
                    return (
                        <div key={idx} className="flex flex-col border border-[#2F363D] p-1">
                            <h4>Example {idx+1}:</h4>
                            <p>Input: {example.input}</p>
                            <p>Output: {example.output}</p>
                            {example.explanation &&
                                <p>Explanation: {example.explanation}</p>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProblemExamples;