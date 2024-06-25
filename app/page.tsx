import Image from "next/image";
import Card from "./components/card";

export default function Home() {
  const cards = Array.from({ length: 21 }, (_, index) => (
    <Card key={index} title={`AWP | Neo Noir ${index + 1}`} />
  ));
  return (
    <>
    <Image src="/images/blob1.png" alt="Background" width={452} height={152} className="absolute -z-10" />
    <Image src="/images/blob2.png" alt="Background" width={552} height={152} className="absolute right-0 -z-10" />
    <main className="home flex flex-col h-full p-4 lg:mx-[5rem]">
      <nav className="nav flex justify-between w-full p-4 text-white">
        <div className="logo items-center flex">
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
            <input type="text" placeholder="Search Item..." className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] w-full xl:max-w-[336px] max-h-[48px] pl-4" />
            <select name="items" id="items" className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] max-h-[48px] lg:max-w-[178px]">
              <option value="volvo">Tradeable Items</option>
              <option value="saab">Locked Items</option>
            </select>
            <select name="items" id="items" className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] lg:max-w-[178px] max-h-[48px] lg:w-[178px]">
              <option value="volvo">Quality</option>
              <option value="saab">Factory New</option>
            </select>
            <select name="items" id="items" className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] lg:max-w-[178px] px-2 max-h-[48px] lg:w-[178px]">
              <option value="volvo">Float</option>
              <option value="saab">0-0.08</option>
            </select>
            <div className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] p-2 w-full lg:max-w-[183px] max-h-[48px] flex items-center">
            <label className="switch">
                <input type="checkbox" name="select-all" id="select-all" />
                <span className="slider"></span>
            </label>
            <label htmlFor="select-all" className="ml-8">Select All</label>
            </div>
          </div>
          <div className="cards-container flex flex-wrap gap-4 mt-[40px] bg-[#1B1B1B] p-2 pb-4">
            {cards}
          </div>
          <p className="text-right text-[#3EFF9EBF] mt-4 cursor-pointer text-[12px]">Change trade URL</p>
        </div>

        <div className="flex flex-col bg-[#2B2B2B40] p-2" id="payment">
          <p className="text-[#636665] font-semibold">Choose payment method</p>
          <div className="flex w-full bg-[#1B1B1B] justify-around mt-2 border-[1px] border-[#222222]">
            <div className="content-center p-4 max-w-[164px] max-h-[164px] cursor-pointer">
              <Image src="/images/ltc.png" alt="Paypal" width={32} height={64} className="hover:scale-110 transition-all" />
            </div>
            <div className="content-center p-4 max-w-[164px] max-h-[164px] cursor-pointer">
              <Image src="/images/eth.png" alt="Paypal" width={32} height={64} className="hover:scale-110 transition-all" />
            </div>
            <div className="backgroundglow content-center p-4 max-w-[164px] max-h-[164px] cursor-pointer border-[#0E959980] border-2">
              <Image src="/images/tether.png" alt="Paypal" width={32} height={64} className="hover:scale-110 transition-all" />
            </div>
            <div className="content-center p-4 max-w-[164px] max-h-[164px] cursor-pointer">
              <Image src="/images/btc.png" alt="Paypal" width={32} height={64} className="hover:scale-110 transition-all" />
            </div>
          </div>
          <div className="w-full justify-around flex font-bold">
            <p className="select-none text-[#1B1B1B] opacity-0">LTC</p>
            <p className="select-none text-[#1B1B1B] opacity-0">ETH</p>
            <p className="text-center text-[#0E9599] ml-3 text-sm">TETHER</p>
            <p className="select-none text-[#1B1B1B] opacity-0">BTC</p>
          </div>
          <p className="text-[#636665] font-semibold">Wallet address</p>
          <input type="text" placeholder="Enter wallet address" className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] p-2 mt-2" />
          <p className="text-[#636665] font-semibold mt-4">Promo Code</p>
          <div className="flex my-4">
            <input type="text" placeholder="Enter promo code" className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] p-2" />
            <button className="bg-[#1F1F1F] text-[#4A4A4A] p-2">Claim</button>
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
