import icon from '../assets/image/icon.png';
import icon_2 from '../assets/image/icon_2.png';
import icon_4 from '../assets/image/icon_4.png';
import icon_3 from '../assets/image/icon_3.png';
import imageone from '../assets/image/Mask Group.png';

const menuItems = [
    { id: 1, title: "FAQ", icon: icon },
    { id: 2, title: "News", icon: icon_2 },
    { id: 3, title: "Account", icon: icon_3 },
    { id: 4, title: "Logout", icon: icon_4 },
];

const Sidebar = () => {
    return (
        <div className="hidden md:flex flex-col">
            <div className="p-3 lg:p-3.5 xl:p-4 2xl:p-5 flex flex-col justify-between rounded-[15px] opacity-100 bg-[#F76743] relative overflow-hidden">
                <img src={imageone} alt="Image One" className="h-full w-full object-cover absolute top-0 left-0" />
                <div className='flex items-center gap-2.5 relative z-px'>
                    <div className="hidden sm:block">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.3" cx="16" cy="16" r="16" fill="white"/>
                        <path d="M19.1 13.7998H11.9C11.4029 13.7998 11 14.2027 11 14.6998V19.1998C11 19.6969 11.4029 20.0998 11.9 20.0998H19.1C19.5971 20.0998 20 19.6969 20 19.1998V14.6998C20 14.2027 19.5971 13.7998 19.1 13.7998Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.3002 20.1V12.9C17.3002 12.6613 17.2054 12.4324 17.0366 12.2636C16.8678 12.0948 16.6389 12 16.4002 12H14.6002C14.3615 12 14.1326 12.0948 13.9638 12.2636C13.795 12.4324 13.7002 12.6613 13.7002 12.9V20.1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div>
                        <p className='paybtn'>Pay</p>
                        <p className='counttext'>628,000</p>
                    </div>
                </div>
                <button className="btnpay relative z-px group">
                    <span className='w-3 lg:w-3.25 xl:w-3.5 2xl:w-3.75 h-3 lg:h-3.25 xl:h-3.5 2xl:h-3.75 top-[1.5px] bg-[#F76743] opacity-100 rounded-full flex items-center justify-center'>
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 3H0.5M3 0.5V5.5V0.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <span className='font-lexend font-medium text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] leading-[100%] tracking-[0%] text-black'>
                        Add it
                    </span>
                    <svg className='w-1 xl:w-1.25 2xl:w-1.5 h-1.75 xl:h-2 2xl:h-2.25 transition-transform duration-200 group-hover:translate-x-1' viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.353516 8.35358L4.35352 4.35358L0.353515 0.353577" stroke="black" />
                    </svg>
                </button>
            </div>
            <div className="p-5 rounded-[15px] bg-[#FFFFFF] mt-3.75">
                <p className="manupading">
                    MAIN MENU
                </p>
                <ul className="flex flex-col gap-7.5 mt-6.25">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className="flex items-center gap-2.5 cursor-pointer duration-200 hover:opacity-60 group"
                        >
                            <img src={item.icon} alt={item.title} className="h-4 w-auto " />
                            <span className="manuitemsslide group-hover:translate-x-1">
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