
function ProblemConstrains({constraints}) {
    return (
        <div className="font-inter flex flex-col gap-1">
            <h3 className="text-[#DDE3EA] font-medium text-base">Constrains: </h3>
            <div className="bg-[#232930] border border-[#2F363D] text-[#DDE3EA] text-sm flex flex-col">
                <ul className="p-1 list-disc pl-5">
                    {constraints.map((constraint, idx) => {
                        return (
                            <li key={idx}>{constraint}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ProblemConstrains;