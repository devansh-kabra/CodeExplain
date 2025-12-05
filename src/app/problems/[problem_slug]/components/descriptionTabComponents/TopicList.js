
function TopicList({topics}) {
    return (
        <div id="topics" className="flex gap-1 flex-wrap w-full cursor-default items-center">
            <h3 className="font-inter font-medium mr-1 text-sm text-[#DDE3EA]">Topics: </h3>
                {topics.map(topic => {
                    return (
                        <div key={topic} className="bg-[#2A3138] border border-[#3A424C] sm:hover:bg-[#343C45] rounded-2xl">
                            <p className="text-[#DDE3EA] text-xs px-2 font-inter">{topic}</p>
                        </div>
                    )
                })}
        </div>
    )
}

export default TopicList;