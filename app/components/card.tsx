"use client";

import React from "react";
import Image from "next/image";

export default function HomeCardFN({ title }: { title: string,}) {
    return (
        <div className="relative w-[150.45px] card cursor-pointer h-[212px] place-content-center">
            <div className="flex flex-col items-center ">
                <div className="flex absolute top-2 left-1 items-center z-30">
                    <p className="bg-[#2D2D2D4D] rounded-full text-[#D72142CC] font-bold p-1 text-[10px]">FN</p>
                    <div className="ml-2 flex text-white font-bold text-[11px]">50.89<p className="text-[#3FFE9E]">$</p></div>
                </div>
                <Image src="/images/awp.png" width={132.67} height={110.18} alt="alt" className="z-30 hover:scale-105 transition-transform" />
                <p className="mt-2 font-bold text-white text-nowrap absolute bottom-4 text-[10px] z-30">AWP | Neo Noir</p>
            </div>
            <Image src="/images/cardbg.svg" width={150.45} height={212} alt="cardborder" className="absolute top-0" />
            <Image src="/images/cardimage.png" alt="image" width={130.62} height={184.11} className="absolute top-5" />
            <Image src="/images/cardtopright.svg" alt="topright" width={5.24} height={5.36} className="absolute top-0 right-0 z-10" />
            <div className="bglines z-20 absolute h-[35%] w-full bottom-0" />
            <div className="bggradient z-10 absolute h-[80%] w-full bottom-0 border-b-[#D72142] border-b-[1px]" />
        </div>
    );
}
