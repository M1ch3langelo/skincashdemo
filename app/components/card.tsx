"use client";

import React from "react";
import Image from "next/image";

export default function HomeCardFN({ title }: { title: string,}) {
    return (
        <div className="relative from-[#D72142] to-transparent border-b-2 border-b-[#D72142] shadow-md p-4 scroll-ml-6 max-w-[150.45px] card cursor-pointer hover:scale-105 transition-all h-[212px] place-content-center">
            <Image src="/images/cardimage.png" alt="image" width={120} height={120} className="absolute top-5" />
            <Image src="/images/cardtopright.svg" alt="topright" width={10.24} height={15.36} className="absolute top-0 right-0 z-10" />
            <Image src="/images/cardbackground.png" alt="Lines" layout="fill" objectFit="cover" quality={100} className="absolute z-30" />
            <div className="flex flex-col items-center">
                <div className="flex absolute top-2 left-1 items-center">
                    <p className="bg-[#2D2D2D4D] rounded-full text-[#D72142CC] font-bold p-1 text-[10px]">FN</p>
                    <div className="ml-2 flex text-white font-bold text-[11px]">50.89<p className="text-[#3FFE9E]">$</p></div>
                </div>
                <Image src="/images/awp.png" width={132.67} height={110.18} alt="alt" />
                <p className="mt-2 font-bold text-white text-nowrap absolute bottom-4 text-[10px]">AWP | Neo Noir</p>
            </div>
        </div>
    );
}
