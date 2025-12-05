
function Topic({topic, solved, total}) {

    return (
        <div className={`flex justify-between text-white text-base sm:text-sm lg:text-base 
            font-inter p-1.5 sm:hover:bg-[#262D36] active:bg-[#262D36] cursor-default`}>
            <h3 className="mr-1">{topic}:</h3>
            <p>{solved}/{total}</p>
        </div>
    )
}

export default Topic;