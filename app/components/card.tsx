"use client";

import React from "react";
import Image from "next/image";

export default function HomeCardFN({ title, image}: { title: string, image: string }) {
    return (
        <div className="relative from-[#D72142] to-transparent border-b-2 border-b-[#D72142] border-[#3C3C3C] shadow-md p-4 scroll-ml-6 max-w-[150.45px] card border-[1px] cursor-pointer hover:scale-105 transition-all h-[212px] place-content-center">
            <Image src="/images/cardimage.png" alt="AWP | Neo Noir" width={120} height={120} className="absolute" />
            <Image src="/images/cardtopright.svg" alt="AWP | Neo Noir" width={15.24} height={15.36} className="absolute top-0 right-0 z-10" />
            <div className="flex flex-col items-center">
                <div className="flex absolute top-2 left-1 items-center">
                    <p className="bg-[#2D2D2D4D] rounded-full text-[#D72142CC] font-bold p-1">FN</p>
                    <div className="ml-2 flex text-white font-bold text-md">50.89<p className="text-[#3FFE9E]">$</p></div>
                </div>
                <img src={image} className="w-[120px]" alt={title} />
                <p className="mt-2 font-bold text-white text-nowrap">AWP | Neo Noir</p>
            </div>
        </div>
    );
}
