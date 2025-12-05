"use client";
import Image from "next/image";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import { signOut, SessionProvider } from "next-auth/react";


function Navbar() {

    const [openPopUp, setOpenPopUp] = useState(false);
    //for animation

    function PopUp() {
        return (
            <div className={`cursor-pointer absolute top-1/2 right-full`}>
                <button id="logout" className={`bg-[#D9534F] hover:bg-[#C64541] active:bg-[#A83733] px-2 py-1 
                    rounded-2xl border border-[#9E3A38] cursor-pointer`}> 
                    <p className="font-inter text-white text-xs md:text-sm" onClick={() => signOut({callbackUrl: "/"})}>Logout</p>
                </button>
            </div>
        )
    }


    return(
        <>
            <div id="navbar" className="bg-[#161B22] fixed top-0 right-0 left-0 z-10 ">
                <div id="navbar-content" className="flex h-12 lg:h-14 pr-2 sm:px-4 items-center justify-between gap-8 relative">
                    <div id="logo" className="relative w-50 sm:w-60 h-12 lg:w-75 overflow-hidden cursor-pointer left-0">
                        <Link href="/">
                            <Image
                                src="/Logo.png"
                                alt="Logo of CodeExplain"
                                fill
                                className="object-cover object-center"
                                loading="eager"
                                priority
                            />
                        </Link>
                    </div>
                    <div id="right-content" className="flex justify-center items-center relative">
                        <button  className="active:scale-98 hover:scale-105 transition-transform delay-25 ease-out cursor-pointer"
                                onClick={() => setOpenPopUp(!openPopUp)}
                        >
                            <UserCircleIcon className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-white"/>
                        </button>
                        {openPopUp &&
                            <PopUp/>
                        }
                    </div>
                </div>
            </div>
            <div id="spacer" className="h-12 lg:h-14"></div>
        </>
    )
}

export default Navbar;