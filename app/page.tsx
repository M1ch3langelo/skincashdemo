import Image from "next/image";
import Card from "./components/card";

export default function Home() {
  const cards = Array.from({ length: 21 }, (_, index) => (
    <Card key={index} title={`AWP | Neo Noir ${index + 1}`} image="/images/awp.png" />
  ));
  return (
    <>
    <Image src="/images/blob1.png" alt="Background" width={452} height={152} className="absolute -z-10" />
    <Image src="/images/blob2.png" alt="Background" width={552} height={152} className="absolute right-0 -z-10" />
    <main className="home flex flex-col h-screen p-4">
      <nav className="nav flex justify-between w-full p-4 text-white">
        <div className="logo items-center flex">
          <Image src="/images/logo.png" alt="Logo" width={200} height={50} />
        </div>
        <ul className="nav-links flex space-x-4 items-center">
          <li className="nav-link text-[#3FFE9ECC] cursor-pointer hover:text-[#3FFE9ECC] transition-all">SELL SKINS</li>
          <li className="nav-link text-[#FFFFFF4D] cursor-pointer hover:text-[#3FFE9ECC] transition-all">HOW IT WORKS?</li>
          <li className="nav-link text-[#FFFFFF4D] cursor-pointer hover:text-[#3FFE9ECC] transition-all">FAQ</li>
          <button className="bg-[#3FFE9E] rounded-sm text-black font-bold p-2 hover:scale-[1.025] transition-all">
            Login via Steam
          </button>
        </ul>
      </nav>
      <div className="flex flex-col lg:flex-row lg:space-x-4 place-content-center mt-[40px]">
        <div className="bg-[#2B2B2B40] p-2" id="inventorypanel">
          <p className="text-[#FFFFFF4D]">Your Inventory</p>
          <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:justify-between space-y-4 lg:space-y-0">
            <input type="text" placeholder="Search Item..." className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] lg:max-w-[336px]" />
            <select name="items" id="items" className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] w-full lg:max-w-[178px]">
              <option value="volvo">Tradeable Items</option>
              <option value="saab">Locked Items</option>
            </select>
            <select name="items" id="items" className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] w-full lg:max-w-[178px]">
              <option value="volvo">Quality</option>
              <option value="saab">Factory New</option>
            </select>
            <select name="items" id="items" className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] w-full lg:max-w-[178px]">
              <option value="volvo">Float</option>
              <option value="saab">0-0.08</option>
            </select>
            <div className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] p-2 w-full max-w-[143px]">
            <input type="checkbox" name="select-all" id="select-all" className="accent-green-400" />
            <label htmlFor="select-all" className="ml-8">Select All</label>
            </div>
          </div>
          <div className="cards-container flex flex-wrap gap-4 mt-[40px] bg-[#1B1B1B] p-1">
            {cards}
          </div>
          <p className="text-right text-[#3EFF9EBF] mt-4 cursor-pointer">Change trade URL</p>
        </div>

        <div className="flex flex-col" id="payment">
          <p className="text-[#636665]">Choose payment method</p>
          <div className="flex w-full bg-[#222222] justify-around">
            <div className=" bg-[#222222] content-center p-4 max-w-[164px] max-h-[164px] cursor-pointer">
              <Image src="/images/ltc.png" alt="Paypal" width={32} height={64} className="hover:scale-110 transition-all" />
            </div>
            <div className="bg-[#222222] content-center p-4 max-w-[164px] max-h-[164px] cursor-pointer">
              <Image src="/images/eth.png" alt="Paypal" width={32} height={64} className="hover:scale-110 transition-all" />
            </div>
            <div className="backgroundglow content-center p-4 max-w-[164px] max-h-[164px] cursor-pointer border-[#0E959980] border-2">
              <Image src="/images/tether.png" alt="Paypal" width={32} height={64} className="hover:scale-110 transition-all" />
            </div>
            <div className=" bg-[#222222] content-center p-4 max-w-[164px] max-h-[164px] cursor-pointer">
              <Image src="/images/btc.png" alt="Paypal" width={32} height={64} className="hover:scale-110 transition-all" />
            </div>
          </div>
          <div className="w-full justify-around flex font-bold">
            <p className="select-none text-[#1B1B1B]">LTC</p>
            <p className="select-none text-[#1B1B1B]">ETH</p>
            <p className="text-center text-[#0E9599] ml-3 text-sm">TETHER</p>
            <p className="select-none text-[#1B1B1B]">BTC</p>
          </div>
          <p className="text-[#636665]">Wallet address</p>
          <input type="text" placeholder="Enter wallet address" className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] p-2" />
          <p className="text-[#636665]">Promo Code</p>
          <div className="flex">
            <input type="text" placeholder="Enter promo code" className="bg-[#1B1B1B] border-[#222222] border-[1px] text-[#4A4A4A] placeholder-[#4A4A4A] p-2" />
            <button className="bg-[#1F1F1F] text-[#4A4A4A] p-2">Claim</button>
          </div>
          <p className="text-[#636665]">Selected Items</p>
          <div className="w-[336px] h-[234px] border-[#222222] border-[1px]"></div>
          <div className="border-[#222222] border-[1px] flex flex-col p-2 mt-8 space-y-2">
            <div className="flex w-full justify-between">
            <div className="flex">
              <p className="text-[#7B7B7B]">0/1000</p>
              <p className="text-[#606261] ml-2">Items selected:</p>
            </div>
            <p className="text-[#3FFE9E]">$3,000.00</p>
            </div>
            <div className="flex w-full justify-between">
              <p className="text-[#606261] ">Promocode Bonus:</p>
              <p className="text-[#3FFE9E]">$300.00</p>
            </div>
            <div className="flex w-full justify-between">
              <p className="text-[#606261] ">Loyalty:</p>
              <p className="text-[#3FFE9E]">$55.00</p>
            </div>
            <div className="flex w-full justify-between">
              <p className="text-[#606261] ">Payout fee:</p>
              <p className="text-[#3FFE9E]">$120.00</p>
            </div>
            <div className="flex">
            <p className="text-[#606261] ">You will receive:</p>
            <p className="text-[#3FFE9E] ml-1"> $4,200.69</p>
            </div>
            <button className="bg-[#3FFE9E] text-black font-bold py-2 border-[#00000045] border-2 hover:scale-[1.025] transition-all">Add $1.00 to proceed</button>
          </div>
        </div>
      </div>
      <footer className="footer flex justify-between w-full p-4 text-white">
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
        <p className="text-[#393939]">2024 SkinCash. All rights </p>
        <p className="text-[#393939]">Terms of Service</p>
        </div>
        <ul className="nav-links flex space-x-4 items-center">
          <li className="nav-link text-[#8D8D8D] cursor-pointer hover:text-[#3FFE9ECC] transition-all">Product</li>
          <li className="nav-link text-[#8D8D8D] cursor-pointer hover:text-[#3FFE9ECC] transition-all">Service</li>
        </ul>
      </footer>
    </main>
    </>
  );
}
