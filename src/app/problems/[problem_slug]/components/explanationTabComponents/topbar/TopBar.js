//this file is for explanation tab
import LargeScreenTopBar from "./LargeScreenTopBar";
import SmallScreenTopBar from "./SmallScreenTopBar";


function TopBar({problem_id, is_saved, leetcode_link, problem_slug, setHistoryPage, setSubmitted, handleSpeechInput}) {
    return (
        <>
            <LargeScreenTopBar problem_id={problem_id} is_saved={is_saved} leetcode_link={leetcode_link} problem_slug={problem_slug} setHistoryPage={setHistoryPage} setSubmitted={setSubmitted} handleSpeechInput={handleSpeechInput}/>
            <SmallScreenTopBar problem_id={problem_id} is_saved={is_saved} leetcode_link={leetcode_link} problem_slug={problem_slug}  setHistoryPage={setHistoryPage} setSubmitted={setSubmitted} handleSpeechInput={handleSpeechInput}/>
        </>
    )
}

export default TopBar;