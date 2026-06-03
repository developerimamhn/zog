import { useState } from "react";
import insta_icon from '../assets/image/insta_icon.png';
import { useNavigate } from 'react-router-dom';

const orders = [
    { id: 1, name: "Order 1" },
    { id: 2, name: "Order 2" },
    { id: 3, name: "Order 3" },
];

const BackIcon = () => (
    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.75 0.75L0.75 4.75L4.75 8.75" stroke="#9AA2AB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
);

const CloseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5L5 15" stroke="#9AA2AB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5 5L15 15" stroke="#9AA2AB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
);

const HeartIcon = ({ filled }) => (
    <svg width="22" height="20" viewBox="0 0 22 20"
        fill={filled ? '#6C5CE7' : 'none'}
        stroke="#6C5CE7" strokeWidth="1.6">
        <path d="M11 19s-9-5.35-9-11.5A5.5 5.5 0 0 1 11 3.68 5.5 5.5 0 0 1 20 7.5C20 13.65 11 19 11 19Z" />
    </svg>
);

const AddLinkPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [hoveredTab, setHoveredTab] = useState(null);
    const [text, setText] = useState('');
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

    const handleNext = () => {
        console.log({ activeTab, text });
    };

    return (
        <div className="min-h-screen bg-[#F4F5F7] flex flex-col">
            <div className="flex items-center justify-between px-5 pt-5 pb-3">
                <button
                    onClick={() => navigate(-1)}
                    className="w-8.5 h-8.5 rounded-[10px] border border-[#E0E2E8] flex items-center justify-center bg-transparent cursor-pointer"
                >
                    <BackIcon />
                </button>
                <button
                    onClick={() => navigate('/')}
                    className="bg-transparent border-none cursor-pointer p-1"
                >
                    <CloseIcon />
                </button>
            </div>
            <div className="flex items-center justify-between px-5 pt-5">
                <button
                    onClick={() => setLiked(!liked)}
                    className="bg-transparent border-none cursor-pointer p-1"
                >
                    <HeartIcon filled={liked} />
                </button>
                <div className="flex items-center justify-center rounded-[10px] py-3.5 px-5 gap-2.5 bg-[#F76743] opacity-100">
                    <span className="font-lexend font-medium text-[16px] leading-[100%] tracking-[0%] text-[#FFFFFF]">
                        Pay 628,000
                    </span>
                    <span className="p-1.25 bg-[#FFFFFF] opacity-100 rounded-full flex items-center justify-center">
                        <svg width="7" height="7" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3.20221V2.20842H2.09714V0H3.2149V2.20842H5.33333V3.20221H3.2149V5.33333H2.09714V3.20221H0Z" fill="#F76743" />
                        </svg>

                    </span>
                </div>
                <button className="">
                    <img src={insta_icon} alt="Logo" className="h-5 w-auto" />
                </button>
            </div>
            <div className="flex gap-2 px-5 pb-5 pt-7.5">
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
                                className={`py-1.5 px-7.5 rounded-lg text-[12px] font-lexend font-normal transition-all duration-500 ease-in-out cursor-pointer
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
            </div>
            <div className="px-5">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Text here"
                    className="w-full h-40.25 p-4 rounded-[10px] border border-[#F7F7F7] bg-[#FFFFFF] opacity-100 font-lexend font-normal text-[14px] leading-[100%] outline-none resize-none text-[#9AA2AB]"
                />
            </div>
            <div className="flex justify-end px-5 py-6">
                <button
                    onClick={handleNext}
                    className="flex items-center justify-center rounded-[10px] py-2.5 px-6.25 gap-2.5 bg-[#7F56DA] font-lexend font-medium text-[14px] text-[#FFFFFF]" >
                    Next
                    <span>
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.11538 3.5L0.5 3.5L8.11538 3.5Z" fill="white" />
                            <path d="M5.73077 6.5L8.5 3.5L5.73077 0.5M8.11538 3.5L0.5 3.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </span>
                </button>
            </div>

        </div>
    );
};

export default AddLinkPage;

