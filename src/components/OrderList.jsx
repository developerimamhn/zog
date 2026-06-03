import { useState } from "react";
import insta_icon from '../assets/image/insta_icon.png';

const orders = [
  { id: 1, name: "Order 1" },
  { id: 2, name: "Order 2" },
  { id: 3, name: "Order 3" },
];

const OrderList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <div className="hidden md:block w-full h-fit p-3 lg:p-3.5 xl:p-4 2xl:p-5 rounded-[15px] bg-[#FFFFFF] opacity-100">
      <div className="flex flex-col gap-5">
        <div className='flex items-center gap-2.5'>
          <img src={insta_icon} alt="Logo" className="h-5 w-auto" />
          <p className='font-lexend font-semibold text-[18px] leading-[100%] tracking-[0%] text-[#272742]'>
            Link
          </p>
        </div>
        <div className="w-full flex items-center justify-between p-1.25 rounded-[10px] bg-[#FFFFFF] shadow-[0px_0px_6px_0px_#0000000F] opacity-100">
          {orders.map((item, index) => {
            const isSelected =
              hoveredTab !== null
                ? hoveredTab === index
                : activeTab === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                onMouseEnter={() => setHoveredTab(index)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`py-1.5 px-3.25 sm:px-3.5 md:px-2 lg:px-4 xl:px-6.25 rounded-lg text-[10px] lg:text-[12px] font-lexend font-normal transition-all duration-500 ease-in-out cursor-pointer
              ${isSelected
                    ? "bg-[#7F56DA] text-white"
                    : "bg-transparent text-[#9AA2AB]"
                  }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <div>
          <textarea
            placeholder="Text here"
            className="p-4 w-full h-[180.71px] rounded-[10px] border border-[#F9F9F9] bg-[#FBFBFB] font-normal text-[14px] leading-[100%] tracking-[0%] text-[#000000] opacity-100 outline-none resize-none transition-all duration-200"
          />
        </div>
      </div>
      <div className="flex items-center justify-end mt-7">
        <button className="flex items-center justify-center rounded-[10px] py-2.5 px-4 lg:px-7.5 gap-2 lg:gap-2.5 bg-[#7F56DA] opacity-100 cursor-pointer">
          <span className="font-lexend font-medium text-[12px] lg:text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF]">
            Next
          </span>
          <svg width="10" height="8" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.11538 3.5L0.5 3.5L8.11538 3.5Z" fill="white" />
            <path d="M5.73077 6.5L8.5 3.5L5.73077 0.5M8.11538 3.5L0.5 3.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default OrderList
