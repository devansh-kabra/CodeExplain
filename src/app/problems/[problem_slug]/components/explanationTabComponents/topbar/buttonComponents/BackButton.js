"use client";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function BackButton({classNameForButton}) {
    const router = useRouter();
    const handleBack = () => {
        if (typeof window !== 'undefined' && window.history.length > 1) {
            router.back();
        } else {
            router.push("/dashboard")
        }
        
    }

    return (
        <button className={classNameForButton} onClick={handleBack} title="Go Back">
            <ArrowLeftIcon className="h-6 w-6 "/>
        </button>
    )
}

