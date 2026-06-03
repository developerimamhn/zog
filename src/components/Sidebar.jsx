import icon from '../assets/image/icon.png';
import icon_2 from '../assets/image/icon_2.png';
import icon_4 from '../assets/image/icon_4.png';
import icon_3 from '../assets/image/icon_3.png';

const menuItems = [
    { id: 1, title: "FAQ", icon: icon },
    { id: 2, title: "News", icon: icon_2 },
    { id: 3, title: "Account", icon: icon_3 },
    { id: 4, title: "Logout", icon: icon_4 },
];

const Sidebar = () => {
    return (
        <div className="hidden md:flex flex-col">
            <div className="p-3 lg:p-3.5 xl:p-4 2xl:p-5 flex flex-col justify-between rounded-[15px] opacity-100 bg-[#F76743]">
                <div className='flex items-center gap-2.5'>
                    <div className="w-4.5 lg:w-5 xl:w-6 2xl:w-8 h-4.5 lg:h-5 xl:h-6 2xl:h-8 bg-white/30 rounded-full flex items-center justify-center">
                        <svg className='z-10 w-2 h-2 xl:w-2.5 xl:h-2.5' viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.6 2.29999H1.4C0.902944 2.29999 0.5 2.70293 0.5 3.19999V7.69999C0.5 8.19704 0.902944 8.59999 1.4 8.59999H8.6C9.09706 8.59999 9.5 8.19704 9.5 7.69999V3.19999C9.5 2.70293 9.09706 2.29999 8.6 2.29999Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.80007 8.6V1.4C6.80007 1.16131 6.70525 0.932387 6.53647 0.763604C6.36769 0.594821 6.13877 0.5 5.90007 0.5H4.10007C3.86138 0.5 3.63246 0.594821 3.46368 0.763604C3.29489 0.932387 3.20007 1.16131 3.20007 1.4V8.6" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <p className='font-lexend font-medium text-[12px] leading-[100%] tracking-[0%] text-[#FFFFFF] opacity-45'>Pay</p>
                        <p className='font-lexend font-medium text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[100%] tracking-[0%] text-[#FFFFFF]'>628,000</p>
                    </div>
                </div>
                <button className="mt-4 flex items-center justify-center gap-1 lg:gap-1.5 xl:gap-2 2xl:gap-2.5 rounded-[10px] bg-white py-2.5 w-full cursor-pointer">
                    <span className='w-3 lg:w-3.25 xl:w-3.5 2xl:w-3.75 h-3 lg:h-3.25 xl:h-3.5 2xl:h-3.75 top-[1.5px] bg-[#F76743] opacity-100 rounded-full flex items-center justify-center'>
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 3H0.5M3 0.5V5.5V0.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <span className='font-lexend font-medium text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] leading-[100%] tracking-[0%] text-[#000000]'>
                        Add it
                    </span>
                    <svg className='w-1 xl:w-1.25 2xl:w-1.5 h-1.75 xl:h-2 2xl:h-2.25' viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.353516 8.35358L4.35352 4.35358L0.353515 0.353577" stroke="black" />
                    </svg>
                </button>
            </div>
            <div className="p-5 rounded-[15px] bg-[#FFFFFF] mt-3.75">
                <p className="font-lexend font-medium text-[12px] leading-[100%] tracking-[0%] text-[#9AA2AB]">
                    MAIN MENU
                </p>
                <ul className="pr-5 flex flex-col gap-7.5 mt-6.25">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className="flex items-center gap-2.5 cursor-pointer"
                        >
                            <img src={item.icon} alt={item.title} className="h-4 w-auto" />
                            <span className="font-lexend font-medium text-[14px] leading-[100%] tracking-[0%] text-[#272742]">
                                {item.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar