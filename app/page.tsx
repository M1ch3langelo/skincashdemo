"use client";

import Image from "next/image";
import Card from "./components/card";
import { useState } from "react";

export default function Home() {
  const cards = Array.from({ length: 21 }, (_, index) => (
    <Card key={index} title={`AWP | Neo Noir ${index + 1}`} />
  ));
  const [isLtcSelected, setIsLtcSelected] = useState(false);
  const [isEthSelected, setIsEthSelected] = useState(false);
  const [isUsdtSelected, setIsUsdtSelected] = useState(true);
  const [isBtcSelected, setIsBtcSelected] = useState(false);
  
  const handleLtcSelected = () => {
    setIsLtcSelected(true);
    setIsEthSelected(false);
    setIsUsdtSelected(false);
    setIsBtcSelected(false);
  }

  const handleEthSelected = () => {
    setIsLtcSelected(false);
    setIsEthSelected(true);
    setIsUsdtSelected(false);
    setIsBtcSelected(false);
  }

  const handleUsdtSelected = () => {
    setIsLtcSelected(false);
    setIsEthSelected(false);
    setIsUsdtSelected(true);
    setIsBtcSelected(false);
  }

  const handleBtcSelected = () => {
    setIsLtcSelected(false);
    setIsEthSelected(false);
    setIsUsdtSelected(false);
    setIsBtcSelected(true);
  }

  return (
    <>
    <Image src="/images/blob1.png" alt="Background" width={452} height={152} className="absolute -z-10" />
    <Image src="/images/blob2.png" alt="Background" width={552} height={152} className="absolute right-0 -z-10" />
    <main className="home flex flex-col h-full p-4 lg:mx-[5rem]">
      <nav className="nav flex justify-between w-full p-4 text-white">
        <div className="logo items-center flex mr-4 lg:mr-0">
          <Image src="/images/logo.png" alt="Logo" width={200} height={50} />
        </div>
        <ul className="nav-links flex space-x-4 items-center">
          <li className="nav-link text-[#3FFE9ECC] cursor-pointer hover:text-[#3FFE9ECC] transition-all font-bold">SELL SKINS</li>
          <li className="nav-link text-[#FFFFFF4D] cursor-pointer hover:text-[#3FFE9ECC] transition-all font-bold">HOW IT WORKS ?</li>
          <li className="nav-link text-[#FFFFFF4D] cursor-pointer hover:text-[#3FFE9ECC] transition-all font-bold">FAQ</li>
          <button className="bg-[#3FFE9E] border-[#00000045] border-b-[3px] border-r-[3px] rounded-sm text-black font-bold p-2 hover:scale-[1.025] transition-all">
            Login via Steam
          </button>
        </ul>
      </nav>
      <div className="flex flex-col lg:flex-row lg:space-x-[3rem] place-content-center mt-[40px]">
        <div className="bg-[#2B2B2B40] p-2 px-4" id="inventorypanel">
          <p className="text-[#FFFFFF4D]">Your Inventory</p>
          <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:justify-between space-y-4 lg:space-y-0">
            <input type="text" placeholder="Search Item..." className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] w-full lg:max-w-[336px] xl:max-w-[536px] h-[48px] pl-4" />
            <select name="items" id="items" className="bg-[#1B1B1B] px-2 border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] h-[48px] w-full lg:max-w-[178px] xl:max-w-[378px]">
              <option value="volvo">Tradeable Items</option>
              <option value="saab">Locked Items</option>
            </select>
            <select name="items" id="items" className="bg-[#1B1B1B] px-2 border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] h-[48px] w-full lg:max-w-[178px] xl:max-w-[378px]">
              <option value="volvo">Quality</option>
              <option value="saab">Factory New</option>
            </select>
            <select name="items" id="items" className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] lg:max-w-[178px] px-2 h-[48px] w-full xl:max-w-[378px]">
              <option value="volvo">Float</option>
              <option value="saab">0-0.08</option>
            </select>
            <div className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] p-2 w-full lg:max-w-[183px] h-[48px] flex items-center xl:max-w-[383px]">
            <label className="switch">
                <input type="checkbox" name="select-all" id="select-all" />
                <span className="slider"></span>
            </label>
            <label htmlFor="select-all" className="ml-8">Select All</label>
            </div>
          </div>
          <div className="cards-container scrollbar overflow-y-scroll overflow-x-hidden h-[687px] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-[40px] bg-[#1B1B1B] p-2 pb-4" id="cards-container">
            {cards}
          </div>
          <p className="text-right text-[#3EFF9EBF] mt-4 cursor-pointer text-[12px]">Change trade URL</p>
        </div>

        <div className="mt-4 lg:mt-0 flex flex-col bg-[#2B2B2B40] p-2 lg:max-w-[368px]" id="payment">
          <p className="text-[#636665] font-semibold">Choose payment method</p>
          <div className="w-full bg-[#1B1B1B] grid grid-cols-4 h-[84px] mt-2 border-[1px] border-[#222222]">
            <div 
              className={`p-4 max-w-[164px] max-h-[164px] cursor-pointer flex items-center ${isLtcSelected ? 'border-[1px] border-[#898989]' : ''}`} 
              onClick={handleLtcSelected}>
              <svg width="58" height="42" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${isLtcSelected ? 'ltcselected' : ''}`}>
                <path fillRule="evenodd" clipRule="evenodd" d="M2.82682 22.428L0 23.536L1.36289 18.018L4.22339 16.858L8.34575 0H18.5061L15.497 12.392L18.2901 11.25L16.9431 16.75L14.1163 17.892L12.4364 24.858H27.7333L26.004 32H0.4992L2.82682 22.428Z" fill={isLtcSelected ? "#898989" : "#3C3C3C"}/>
              </svg>
            </div>
            <div 
              className={`flex items-center place-content-center p-4 max-w-[164px] max-h-[164px] cursor-pointer ${isEthSelected ? 'border-[1px] border-[#798EFF]' : ''}`}
              onClick={handleEthSelected}>
              <svg width="58" height="42" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${isEthSelected ? 'fill-[#798EFF] ethselected ' : ''}`}>
                <path d="M12.8087 0V15.1524L25.6156 20.8751L12.8087 0Z" fill={isEthSelected ? "#798EFF" : "#FFFFFF26"} fillOpacity="1"/>
                <path d="M12.8086 0L0 20.8751L12.8086 15.1524V0Z" fill={isEthSelected ? "#798EFF" : "#FFFFFF1C"} fillOpacity="1"/>
                <path d="M12.8086 30.6942V40.9899L25.6241 23.2598L12.8086 30.6942Z" fill={isEthSelected ? "#798EFF" : "#FFFFFF26"} fillOpacity="1"/>
                <path d="M12.8086 40.9899V30.6925L0 23.2598L12.8086 40.9899Z" fill={isEthSelected ? "#798EFF" : "#FFFFFF1A"} fillOpacity="1"/>
                <path d="M12.8086 28.3117L25.6155 20.8755L12.8086 15.1562V28.3117Z" fill={isEthSelected ? "#798EFF" : "#FFFFFF1A"} fillOpacity="1"/>
                <path d="M0 20.8755L12.8086 28.3117V15.1562L0 20.8755Z" fill={isEthSelected ? "#798EFF" : "#FFFFFF26"} fillOpacity="1"/>
              </svg>
            </div>
            <div 
              className={` ${isUsdtSelected ? 'border-[1px] border-[#0E959980]' : ''} flex items-center place-content-center max-w-[164px] max-h-[164px] cursor-pointer`}
              onClick={handleUsdtSelected}>
              <svg width="58" height="42" viewBox="0 0 797 738" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${isUsdtSelected ? 'usdtselected' : ''}`}>
                <path d="M797.374 348.792C797.374 298.54 660.637 256.613 478.929 246.94L478.915 166.872H705.799V0.237793H85.404V166.872H312.27V247.332C133.871 257.668 0.421875 299.157 0.421875 348.792C0.421875 398.433 133.871 439.926 312.27 450.245V737.766H478.915V450.636C660.637 440.984 797.374 399.044 797.374 348.792ZM398.896 398.296C203.857 398.296 45.7422 368.109 45.7422 330.85C45.7422 299.302 159.119 272.816 312.27 265.446V284.436H312.288V362.253C339.899 363.802 368.918 364.613 398.896 364.613C426.5 364.613 453.307 363.911 478.932 362.627V265.157C635.403 272.075 752.057 298.839 752.057 330.85C752.054 368.109 593.935 398.296 398.896 398.296Z" fill={isUsdtSelected ? "#039196" : "#3C3C3C"} 
                />
              </svg>
            </div>
            <div 
              onClick={handleBtcSelected}
              className={`flex items-center place-content-center max-w-[164px] max-h-[164px] cursor-pointer ${isBtcSelected ? 'border-[1px] border-[#FFAC00]' : ''}`}>
              <svg width="58" height="42" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${isBtcSelected ? 'btcselected' : ''}`}>
                <path d="M30.3765 16.04C31.0045 11.848 27.8105 9.594 23.4465 8.09L24.8625 2.41L21.4065 1.55L20.0265 7.08C19.1185 6.852 18.1865 6.64 17.2565 6.428L18.6465 0.862L15.1905 0L13.7745 5.678C13.0225 5.506 12.2825 5.338 11.5665 5.158L11.5705 5.14L6.8025 3.95L5.8825 7.642C5.8825 7.642 8.4485 8.23 8.3945 8.266C9.7945 8.616 10.0465 9.542 10.0045 10.278L8.3925 16.748C8.4885 16.772 8.6125 16.808 8.7525 16.862L8.3865 16.772L6.1265 25.836C5.9545 26.26 5.5205 26.898 4.5405 26.656C4.5765 26.706 2.0285 26.03 2.0285 26.03L0.3125 29.986L4.8125 31.108C5.6485 31.318 6.4685 31.538 7.2745 31.744L5.8445 37.488L9.2985 38.348L10.7145 32.668C11.6585 32.922 12.5745 33.158 13.4705 33.382L12.0585 39.038L15.5145 39.898L16.9445 34.166C22.8405 35.282 27.2725 34.832 29.1385 29.5C30.6425 25.208 29.0645 22.73 25.9625 21.116C28.2225 20.596 29.9225 19.11 30.3765 16.04ZM22.4765 27.116C21.4105 31.41 14.1805 29.088 11.8365 28.506L13.7365 20.896C16.0805 21.482 23.5945 22.64 22.4765 27.116ZM23.5465 15.978C22.5725 19.884 16.5565 17.898 14.6065 17.412L16.3265 10.512C18.2765 10.998 24.5625 11.904 23.5465 15.978Z" fill={isBtcSelected ? "#FFAC00" : "#3C3C3C"}/>
              </svg>
            </div>
          </div>
          <div className="w-full grid grid-cols-4 font-bold mt-2">
            <p className={`select-none justify-center flex ${isLtcSelected ? 'text-[#898989] animate-text-up' : 'opacity-0'}`}>LTC</p>
            <p className={`select-none justify-center flex ${isEthSelected ? 'text-[#627EEB] animate-text-up' : 'opacity-0'}`}>ETH</p>
            <p className={`select-none justify-center flex ${isUsdtSelected ? 'text-[#0E9599] animate-text-up' : 'opacity-0'}`}>USDT</p>
            <p className={`select-none justify-center flex ${isBtcSelected ? 'text-[#FFAC00] animate-text-up' : 'opacity-0'}`}>BTC</p>
          </div>
          <p className="text-[#636665] font-semibold">Wallet address</p>
          <input type="text" placeholder="Enter wallet address" className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] p-2 mt-2" />
          <p className="text-[#636665] font-semibold mt-4">Promo Code</p>
          <div className="flex my-4 w-full">
            <input type="text" placeholder="Enter promo code" className="bg-[#1B1B1B] border-[#222222] w-full border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] p-2" />
            <button className="bg-[#1F1F1F] text-[#4A4A4A] p-2 border-[1px] border-[#2B2B2B] px-4">Claim</button>
          </div>
          <p className="text-[#636665] font-medium">Selected Items</p>
          <div className="w-[336px] h-[234px] border-[#222222] border-[1px] bg-[#1B1B1B]"></div>
          <div className="border-[#222222] border-[1px] flex flex-col p-2 mt-8 space-y-2">
            <div className="flex w-full justify-between">
            <div className="flex font-medium">
              <p className="text-[#7B7B7B]">0/1000</p>
              <p className="text-[#606261] ml-2">Items selected:</p>
            </div>
            <p className="text-[#3FFE9E] font-medium">$3,000.00</p>
            </div>
            <div className="flex w-full justify-between font-medium">
              <p className="text-[#606261] ">Promocode Bonus:</p>
              <p className="text-[#3FFE9E]">$300.00</p>
            </div>
            <div className="flex w-full justify-between font-medium">
              <p className="text-[#606261] ">Loyalty:</p>
              <p className="text-[#3FFE9E]">$55.00</p>
            </div>
            <div className="flex w-full justify-between font-medium">
              <p className="text-[#606261] ">Payout fee:</p>
              <p className="text-[#3FFE9E]">$120.00</p>
            </div>
            <div className="flex font-medium">
            <p className="text-[#606261] font-semibold ">You will receive:</p>
            <p className="text-[#3FFE9E] ml-1 font-semibold"> $4,200.69</p>
            </div>
            <button className="bg-[#3FFE9E] text-black font-bold py-2 border-[#00000045] border-2 hover:scale-[1.025] transition-all">Add $1.00 to proceed</button>
          </div>
        </div>
      </div>
    </main>
    <footer className="footer flex justify-between w-full p-4 text-white bg-[#1A1A1A] pt-[20px] lg:px-[6rem]">
        <div className="flex flex-col space-y-4">
        <div className="logo items-center flex">
          <Image src="/images/logogray.png" alt="Logo" width={150} height={50} />
        </div>
        <div className="flex space-x-6">
          <div className="w-[32px] h-[32px] bg-[#222222]">
          </div>
          <div className="w-[32px] h-[32px] bg-[#222222]">
            <Image src="/images/twitter.png" alt="Twitter" width={32} height={32} />
          </div>
          <div className="w-[32px] h-[32px] bg-[#222222]">
            <Image src="/images/steam.png" alt="Instagram" width={32} height={32} />
          </div>
        </div>
        <p className="text-[#393939] max-w-[277px] text-left">2024 SkinCash. All rights 
        reserved. Look our Terms of Service</p>
        </div>
        <ul className="nav-links flex lg:space-x-[10rem]  font-bold">
          <li className="nav-link text-[#8D8D8D] cursor-pointer hover:text-[#3FFE9ECC] transition-all">Product</li>
          <li className="nav-link text-[#8D8D8D] cursor-pointer hover:text-[#3FFE9ECC] transition-all">Service</li>
        </ul>
      </footer>
    </>
  );
}
