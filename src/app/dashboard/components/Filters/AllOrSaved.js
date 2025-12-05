
function AllOrSaved({display, startFiltering}) {

    return (
        <>
            <div id="all-problems" onClick={() => {startFiltering({saved: "all"});}}
                className={`problem-navbar-button w-1/2 sm:w-auto px-2 py-1 cursor-default  ${display === "all" ? "":"bg-[#2A3138]! sm:hover:bg-[#343C45]!"}`}>
                <h3 className="text-base">All Problems</h3>
            </div>
            <div id="saved-problems" onClick={() => {startFiltering({saved: "saved"});}}
                className={`problem-navbar-button w-1/2 sm:w-auto px-2 py-1 cursor-default  ${display === "all" ? "bg-[#2A3138]! sm:hover:bg-[#343C45]!":""}`}>
                <h3 className="text-base">Saved</h3>
            </div>
        </>
    )
}

export default AllOrSaved;