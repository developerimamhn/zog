import { useState } from "react";
import navbar_logo from '../assets/image/navbar_logo.png';
import navbar_profile from '../assets/image/navbar_profile.png';
import icon from '../assets/image/icon.png';
import icon_2 from '../assets/image/icon_2.png';
import icon_4 from '../assets/image/icon_4.png';

const menuItems = [
    { id: 1, title: "FAQ", icon: icon },
    { id: 2, title: "News", icon: icon_2 },
    { id: 3, title: "Account", icon: icon_4 },
];

const navItems = [
    { id: 1, name: "About", path: "/about" },
    { id: 2, name: "Help", path: "/help" },
    { id: 3, name: "Support", path: "/support" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // <div className="w-full h-17 bg-[#FFFFFF] flex items-center justify-between px-6 sm:px-13 md:px-18 lg:px-24 xl:px-30 2xl:px-37.5">
        <div className="bg-[#FFFFFF]">
            <div className="w-full max-w-400 mx-auto h-17 flex items-center justify-between px-4">
                <div className="hidden md:flex items-center gap-6.75">
                    <img src={navbar_logo} alt="Logo" className="h-6.25 w-auto cursor-pointer" />
                    <div className="relative w-77.25">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.6">
                                <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#636363" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14 14L11.1 11.1" stroke="#636363" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>
                        <input
                            type="text"
                            placeholder="Search"
                            className="font-lexend w-full h-9.5 rounded-[10px] bg-[#F8F8F8] pl-8.5 pr-3 outline-none font-normal text-[14px] text-[#000000] leading-[100%] tracking-[0%] " />
                    </div>
                </div>
                {/* Mobile Menu */}
                <div>
                    <div className="flex md:hidden items-center justify-between w-full">
                        <button onClick={() => setIsOpen(true)}>
                            <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.835693 0.835754H18.8362M0.835693 6.40735H12.8362M0.835693 11.9789H18.8362" stroke="#9AA2AB" stroke-width="1.67148" stroke-miterlimit="10" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                    {/* Overlay */}
                    <div
                        className={`fixed inset-0 bg-[#291C39] z-40 transition-all duration-300 md:hidden
                    ${isOpen ? "opacity-23 visible" : "opacity-0 invisible"}`}
                        onClick={() => setIsOpen(false)}
                    />

                    <div
                        className={`fixed top-0 left-0 h-full w-[50%] md:w-[50%] bg-white z-50 shadow-xl transition-transform duration-400 ease-in-out
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
               `}
                    >
                        <div className="p-5 flex items-center justify-end mt-1">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-2xl text-gray-500"
                            >
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.57385 12.3234C1.9767 12.9232 0.999149 12.9012 0.429546 12.2752C-0.101617 11.6914 -0.081471 10.7936 0.475342 10.2343L4.31696 6.37512L0.438531 2.53235C-0.15804 1.94127 -0.144078 0.972867 0.469285 0.399225C1.05047 -0.144325 1.95736 -0.131273 2.52266 0.42878L6.41358 4.28355L10.1694 0.510617C10.7599 -0.0826175 11.7244 -0.0687447 12.2976 0.541229C12.8445 1.1231 12.8314 2.03377 12.2681 2.5997L8.5102 6.37512L12.3448 10.8535C12.8595 11.4547 12.6877 12.3776 11.991 12.7533C11.5102 13.0125 10.9165 12.9269 10.5285 12.5426L6.41358 8.46668L2.57385 12.3234Z" fill="#9AA2AB" />
                                </svg>

                            </button>
                        </div>
                        <div className="flex items-center justify-center ">
                            <div className="w-21.5 h-21.5 rounded-full bg-[#FFC3A9] flex items-center justify-center">
                                <img src={navbar_profile} alt="Profile" className="h-[73.71428680419922px] w-[73.71428680419922px]" />
                            </div>
                        </div>
                        <div className="pl-5 pt-7.5 rounded-[15px] bg-[#FFFFFF]">
                            <p className="font-lexend font-medium text-[12px] leading-[100%] tracking-[0%] text-[#9AA2AB]">
                                MAIN MENU
                            </p>
                            <ul className="flex flex-col gap-7.5 mt-6.25">
                                {menuItems.map((item) => (
                                    <li
                                        key={item.id}
                                        className="flex items-center gap-2.5 cursor-pointer"
                                    >
                                        <img src={item.icon} alt={item.title} className="h-4 w-auto" />
                                        <span className="font-lexend font-medium text-[16px] leading-[100%] tracking-[0%] text-[#272742]">
                                            {item.title}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile sidebar card */}
                <div className="md:hidden flex items-center justify-center rounded-[10px] py-2.5 px-5 gap-2.5 bg-[#F76743] opacity-100">
                    <span className="font-lexend font-medium text-[16px] leading-[100%] tracking-[0%] text-[#FFFFFF]">
                        Pay 628,000
                    </span>
                    <span className="p-1.25 bg-[#FFFFFF] opacity-100 rounded-full flex items-center justify-center">
                        <svg width="7" height="7" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3.20221V2.20842H2.09714V0H3.2149V2.20842H5.33333V3.20221H3.2149V5.33333H2.09714V3.20221H0Z" fill="#F76743" />
                        </svg>

                    </span>
                </div>
                {/* Navbar items */}
                <div className="flex items-center gap-6">
                    <ul className="hidden md:flex items-center gap-7">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                className="font-lexend font-medium text-[14px] leading-[100%] tracking-[0%] text-[#9AA2AB] cursor-pointer"
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                    <div className="w-10.5 h-10.5 rounded-full bg-[#FFC3A9] flex items-center justify-center">
                        <img src={navbar_profile} alt="Profile" className="h-9 w-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
