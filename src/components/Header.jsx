import logo_1 from "../assets/image/logo1.4.png";
import logo_2 from "../assets/image/logo_2.3.png";
import logo_3 from "../assets/image/logo3.3.png";
import logo_4 from "../assets/image/logo_4.3.png";
import logo_5 from "../assets/image/logo_5.3.png";

const Header = () => {
  
  const cards = [
    { icon: logo_1, text: "Like", iconColor: "brightness-0 [filter:invert(40%)_sepia(100%)_saturate(500%)_hue-rotate(230deg)]" },
    { icon: logo_2, text: "Follow" },
    { icon: logo_3, text: "Level" },
    { icon: logo_4, text: "Message" },
    { icon: logo_5, text: "Search" },
  ];

  return (
    <div className="w-full bg-[#F9F9F9] md:pb-7.5">
      <div className="grid grid-cols-5 gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-3 xl:gap-3.5 2xl:gap-4">
        {cards.map((card, index) => (
          <div key={index} className="group">
            <div className="flex flex-col items-center justify-center gap-2 md:gap-3 p-2 md:p-6 bg-white rounded-[15px] hover:bg-[#854FCA] transition-all duration-300">
              <div className="w-4 sm:w-5 md:w-6 lg:w-8 xl:w-9 2xl:w-10 h-4 sm:h-5 md:h-6 lg:h-8 xl:h-9 2xl:h-10 transition-all duration-300 group-hover:scale-110">
                <img
                  src={card.icon}
                  alt={card.text}
                  className=" group-hover:brightness-0 group-hover:invert"
                />
              </div>
              <p className="font-lexend font-medium text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] leading-none text-center text-[#9AA2AB] group-hover:text-white transition-colors duration-300">
                {card.text}
              </p>
            </div>
            <div className="h-0.5 md:h-0.75 w-0 bg-[#854FCA] mx-auto mt-1 md:mt-2 rounded-full transition-all duration-300 group-hover:w-[80%]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
