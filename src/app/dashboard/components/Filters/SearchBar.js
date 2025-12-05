import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

function SearchBar() {
    const [searchVal, setSearchVal] = useState('');
    

    return (
        <div className="problem-navbar-button px-2 py-1 cursor-default flex items-center justify-center overflow-hidden grow sm:grow-0">
            <input type="text" placeholder="Type a question name" value={searchVal} onChange={(e) => setSearchVal(e.target.value)}
                className={`focus:outline-none overflow-hidden min-w-0 sm:w-40 lg:w-50 mr-2 grow sm:grow-0 text-base`}/>
            <div className="cursor-pointer -mx-2 px-2" title="Search">
                <MagnifyingGlassIcon className="h-5 w-5"/>
            </div>
        </div>
    )
}

export default SearchBar;