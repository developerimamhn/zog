import { useState } from "react";
import logo_1 from "../assets/image/like.svg";
import logo_2 from "../assets/image/man.svg";
import logo_3 from "../assets/image/Vectorsss.png";
import logo_4 from "../assets/image/massage.svg";
import logo_5 from "../assets/image/search.svg";

const Header = () => {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    { icon: logo_1, text: "Like", bg: "bg-[rgba(133,79,202,0.1)]" },
    { icon: logo_2, text: "Follow", bg: "bg-[rgba(133,79,202,0.1)]" },
    { icon: logo_3, text: "Level", bg: "bg-[rgba(133,79,202,0.1)]" },
    { icon: logo_4, text: "Message", bg: "bg-[rgba(133,79,202,0.1)]" },
    { icon: logo_5, text: "Search", bg: "bg-[rgba(133,79,202,0.1)]" },
  ];

  return (
    <div className="w-full bg-[#F9F9F9] px-1.5 sm:px-2.5 rounded-[15px]">
      <div className="grid grid-cols-5 gap-2.5 sm:gap-2.25 md:gap-2.5 lg:gap-3 xl:gap-3.5 2xl:gap-4 mb-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group"
            onClick={() => setActiveCard(index)}
          >
            {/* MOBILE VIEW */}
            <div className={`flex sm:hidden w-full h-14 rounded-[15px] items-center justify-center transition-all duration-300
                ${activeCard === index ? "bg-[#854FCA]" : "bg-[#854FCA]/5"}
              `}
            >
              <img
                src={card.icon}
                alt={card.text}
                className={`w-5.75 h-5.75 object-contain transition-all duration-300
                  ${activeCard === index ? "brightness-0 invert" : ""}
                `}
              />
            </div>

            {/* DESKTOP VIEW */}
            <div className={`hidden sm:flex flex-col items-center justify-center gap-3 py-3.75 rounded-[15px] transition-all duration-300
                ${activeCard === index ? "bg-[#854FCA]" : "bg-white"}
              `}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                  ${activeCard === index ? "bg-white/20" : card.bg}
                `}
              >
                <img
                  src={card.icon}
                  alt={card.text}
                  className={`w-5 h-5 object-contain transition-all duration-300
                    ${activeCard === index ? "brightness-0 invert" : ""}
                  `}
                />
              </div>

              <p className={`font-lexend font-medium text-[13px] lg:text-[14px] text-center transition-colors duration-300 md:block hidden
                  ${activeCard === index ? "text-white" : "text-[#9AA2AB]"}
                `}
              >
                {card.text}
              </p>
            </div>
            <div className="md:hidden mt-1.25 flex justify-center">
              <div className={`h-0.75 rounded-full bg-[#854FCA] transition-all duration-300
                  ${activeCard === index ? "w-[60%]" : "w-0"}
                `}
              />
            </div>
            <div className="hidden md:flex mt-1.25 justify-center">
              <div className={`h-0.75 rounded-full bg-[#854FCA] transition-all duration-300
                  ${activeCard === index ? "w-[70%]" : "w-0"}
                `}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
