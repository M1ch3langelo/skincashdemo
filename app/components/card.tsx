"use client";

import React from "react";

export default function HomeCardFN({ title, image}: { title: string, image: string }) {
    return (
        <div className="from-[#D72142] to-transparent border-b-2 border-b-[#D72142] border-[#3C3C3C] rounded-md shadow-md p-4 scroll-ml-6 snap-start max-w-[150.45px] card border-2 cursor-pointer hover:scale-105 transition-all">
            <div className="flex flex-col items-center">
                <div className="flex">
                    <p className="text-lg bg-[#2D2D2D4D] rounded-full text-[#D72142CC] font-bold">FN</p>
                    <div className="text-lg ml-2 flex text-white font-bold">50.89<p className="text-[#3FFE9E]">$</p></div>
                </div>
                <img src={image} className="w-[120px]" alt={title} />
                <p className="mt-2 font-bold text-white text-nowrap">AWP | Neo Noir</p>
            </div>
        </div>
    );
}