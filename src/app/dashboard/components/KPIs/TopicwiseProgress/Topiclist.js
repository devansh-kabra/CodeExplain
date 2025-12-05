"use client";
import Topic from "./Topic";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { useRef , useState, useEffect} from "react";

export default function TopicList({topics, container_id}) {

    const [scrolled, setScrolled] = useState(false);

    const bottomRef = useRef(null);
    const upperRef = useRef(null);

    useEffect(() => {
        
        const container = document.getElementById(container_id) || null;
        const options = {
            root: container,
            threshold: 0.1,
        };
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === upperRef.current) {
                        setScrolled(false);
                    } 
                    if (entry.target === bottomRef.current) {
                        setScrolled(true);
                    }
                }
            })
        }, options);

        if (upperRef.current) {observer.observe(upperRef.current);}
        if (bottomRef.current) {observer.observe(bottomRef.current)}

        return () => observer.disconnect();
    }, [])

    const scroll = () => {
        if (scrolled) {
            upperRef.current?.scrollIntoView({behavior: "smooth"});
            setScrolled(false);
        } else {
            bottomRef.current?.scrollIntoView({behavior: "smooth"});
            setScrolled(true);
        }
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <h2 className="text-[#DDE3EA] font-poppins text-lg sm:text-base md:text-lg text-center mr-3">
                    Topicwise progress
                </h2> 
                <button className="text-[#DDE3EA] -m-2 p-2" onClick={scroll}>
                    {scrolled ? 
                        (<ArrowUpCircleIcon className="h-6 w-6" />)
                        :
                        (<ArrowDownCircleIcon className="h-6 w-6" />)
                    }
                    
                </button>
            </div>
            <hr className="border border-[#2A3038]"/>
            <div className="topicwise_kpi grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 overflow-scroll scrollbar-hide max-h-full relative">
                <div ref={upperRef} className="invisible h-0 m-0 p-0 col-span-full" aria-hidden={true}></div>
                {topics.map(topic => (
                    <Topic key={topic.topic_id} topic={topic.topic_name} solved={topic.completed_problems} total={topic.total_problems}/>
                ))}
                <div ref={bottomRef} className="invisible relative h-1 -mt-1 m-0 p-0 col-span-full" aria-hidden={true}></div>
            </div> 
        </>
    )
}