import Navbar from "@/components/Navbar";
import FAQ from "./components/FAQ/Faq";
import Image from "next/image";
import { ExploreNow, BeginNow } from "./components/HomePageButton";

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { redirect } from 'next/navigation'

export default async function Home() {
    
    const session = await getServerSession(authOptions);
    if (session) {
        redirect("/dashboard");
        return;
    }

    return (
        <div className="bg-linear-180 from-[#161B22] to-[#2A3138]">
            <Navbar/>
            <h1 className="sr-only">CodeExplain</h1> 
            <section id="intro" className="grid grid-cols-1 lg:grid-cols-2 px-6 min-h-[calc(100dvh-56px)]">
                <div id="illustraion" className="pt-2 md:pt-5 flex justify-center items-center">
                    <div className="relative w-full h-full max-w-xl aspect-square lg:aspect-video">
                        <Image
                            src="/home_page_gif.gif"
                            alt="Illustration for CodeExplain's need"
                            fill
                            className="object-cover object-center h-[50%] w-[50%]"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center text-center justify-start mt-6 md:mt-0 mb-4 lg:mb-0 md:justify-center text-white gap-4">
                    <h2 className="font-inter text-[#A7C4FF] italic font-bold text-2xl sm:text-3xl text-shadow-lg/45 mb sm:mb-6">because coding is not enough!</h2>
                    <p className="max-w-[90%] sm:max-w-[75%] lg:max-w-[65%] font-inter text-center font-medium text-base sm:text-lg text-shadow-md/40 text-[#D1D5DB]">
                        CodeExplain teaches you how to communicate your logic clearly and confidently in interviews.
                    </p>
                    <ExploreNow/>
                </div>
            </section>
            <hr className="border border-[#2E363F]" />
            <section id="FAQ" className="min-h-dvh pt-14 mb-2 flex flex-col items-center gap-4">
                <FAQ/>
                <BeginNow/>
            </section>
        </div>
    );
}
