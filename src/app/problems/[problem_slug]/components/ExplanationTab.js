"use client";
import ExplanationText from "./explanationTabComponents/TipTap/ExplanationText";
import TopBar from "./explanationTabComponents/topbar/TopBar";
import { useState, useEffect, useRef } from "react";
import SubmissionsTab from "./SubmissionsTab";
import Loading from "../loading";

function ExplanationTab({problem_details}) {

    const editorRef = useRef(null);
    
    const [historyPage, setHistoryPage] = useState(false);
    const [openLatest, setOpenLatest] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    const [content, setContent] = useState(''); //this is text
    const [originalContent, setOriginalContent] = useState(''); //this is html

    const [loading, setLoading] = useState(false);

    const problem_id = problem_details.id;
    const slug = problem_details.slug;

    useEffect(() => {

        const runSubmit = async () => {

            const submit = async (content, slug) => {
                
                if (content.length === 0 || content === '') {
                    alert("Explanation cannot be empty");
                    setSubmitted(false)
                    return;
                } else if (!slug) {
                    alert("Some issue detected, trying to fix it...");
                    setSubmitted(false)
                    return;
                }

                setLoading(true);
                const finalContent = content.replace(/\n{2,}/g, "\n").trim(); //replace(/[ \t]+/g, " ") - optional

                try {
                    const response = await fetch(`/api/submit/${slug}`, {
                        method: "POST",
                        headers: {"Content-Type": "application/json" },
                        body: JSON.stringify({
                            problem_id: problem_id,
                            explanation: finalContent
                        }),
                    });

                    const result = await response.json();
                    setOpenLatest(true);
                    setLoading(false);
                    setSubmitted(false);
                    setHistoryPage(true);
                } catch (err) {
                    alert("Could Not Submit.\nWe are fixing this");
                    setLoading(false);
                    setSubmitted(false);
                }
            }
        
            await submit(content, slug);   
        }

        if (submitted) {
            runSubmit();
        }
        
    }, [submitted]);

    const handleSpeechInput = (text) => {
        if (editorRef.current) {
            editorRef.current.commands.insertContent(text);
        }
    }


    return (
        <div className="w-[95%] sm:w-[60%] lg:w-[70%] bg-[#1D232B] border border-[#2A3038] px-4 mb-4 sm:mb-0 rounded flex flex-col  h-[calc(100dvh-68px)] overflow-y-scroll scrollbar-hide">
            {loading ?
                (<Loading />)
                :
                (historyPage ?
                    (
                        <SubmissionsTab problem_details={problem_details} setHistoryPage={setHistoryPage} openLatest={openLatest}/>
                    ):
                    (
                        <>
                            <TopBar problem_id={problem_details.id} is_saved={problem_details.is_saved} leetcode_link={problem_details.leetcode_link} problem_slug={problem_details.slug} setHistoryPage={setHistoryPage} setSubmitted={setSubmitted} handleSpeechInput={handleSpeechInput}/>
                            <hr className="text-[#2A3038] -mx-4"/> 
                            <ExplanationText initialContent={originalContent} updateContent={setContent} updateOrigialContent={setOriginalContent} setEditorRef={(editor) => (editorRef.current = editor)}s/>
                        </>
                    )
                )
            }
            
        </div>
    )
}

export default ExplanationTab;