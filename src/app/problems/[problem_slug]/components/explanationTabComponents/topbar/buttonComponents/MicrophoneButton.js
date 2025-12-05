"use client";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function MicrophoneButton({classNameForButton, handleSpeechInput}) {

    const [recognition, setRecognition] = useState(null);
    const [showPopUp, setShowPopUp] = useState(false);
    const [recognitionStarted, setRecognitionStarted] = useState(false);

    const localButtonClass = "font-inter";

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition;

        if (SpeechRecognition) {
            const instance = new SpeechRecognition();
            instance.continuous = true;
            instance.interimResults = false;

            instance.onresult = (event) => {
                console.log(event.results);
                const transcript = event.results[event.results.length - 1][0].transcript;
                handleSpeechInput(transcript)
            }

            setRecognition(instance);
        }
    }, []);

    const startSpeech = () => {
        setRecognitionStarted(true);
        if (!recognition) {
            alert("STT not supported");
        } else {
            recognition.start();
        }
    }

    const endSpeech = () => {
        recognition.stop();
        setRecognitionStarted(false);
        setShowPopUp(false);
    }

    function PopUp() {
        return (
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/55 flex justify-center items-center z-10">
                <div id="filter-popup" className={`flex flex-col gap-4  w-2xs sm:w-sm lg:w-md text-[#E5EAF0]
                        bg-[#1F242C] border border-[#2D333B] shadow-xl p-2 rounded-xl cursor-default`}>
                    <div className="w-full flex justify-center items-center ">
                        <MicrophoneIcon className="h-20 w-20 "/>
                    </div>
                    {recognitionStarted ? 
                        (
                            <button onClick={endSpeech} className={localButtonClass}>
                                Stop
                            </button>
                        ):
                        (
                            <button onClick={startSpeech} className={localButtonClass}>
                                Start
                            </button>
                        )
                    }
                </div>
            </div>
        )
    }

    return (
        <>
            <button className={classNameForButton} onClick={() => setShowPopUp(true)} title="Microphone">
                <MicrophoneIcon className="h-6 w-6 "/>
            </button>
            {showPopUp && <PopUp/>}
        </>
    )     
}