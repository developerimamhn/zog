import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo_1 from "../assets/image/logo_1.png";
import logo_2 from "../assets/image/logo_2.png";
import logo_3 from "../assets/image/logo_3.png";
import logo_4 from "../assets/image/logo_4.png";
import logo_5 from "../assets/image/logo_5.png";
import logo_6 from "../assets/image/logo_6.png";
import logo_7 from "../assets/image/logo_7.png";
import logo_8 from "../assets/image/logo_8.png";
import logo_9 from "../assets/image/logo_9.png";
import Plus from "../assets/image/Vector.png";
import profile_avatar from "../assets/image/profile_avatar.png";
import profile_avatar2 from "../assets/image/profile_avatar2.png";
import profile_avatar3 from "../assets/image/profile_avatar3.png";
import profile_avatar4 from "../assets/image/profile_avatar4.png";
import profile_avatar5 from "../assets/image/profile_avatar5.png";
import profile_avatar6 from "../assets/image/profile_avatar6.png";
import profile_avatar7 from "../assets/image/profile_avatar7.png";
import profile_avatar8 from "../assets/image/profile_avatar8.png";
import profile_avatar9 from "../assets/image/profile_avatar9.png";

const users = [
  {
    group: "Today",
    rows: [
      {
        id: 1,
        name: "Jane Cooper",
        time: "17:30 AM",
        avatar: profile_avatar,
        orderDone: 12,
        orderTotal: 50,
        payment: "paid",
        status: "Working",
        score: "W305",
        cancelled: false,
        logo: logo_1,
      },
      {
        id: 2,
        name: "Robert Fox",
        time: "17:30 AM",
        avatar: profile_avatar2,
        orderDone: 12,
        orderTotal: 50,
        payment: "detail",
        paymentDetail: { qty: "3 of 10 ea", label: "Order 1" },
        status: "Working",
        score: "W3,500",
        cancelled: false,
        logo: logo_2,
      },
      {
        id: 3,
        name: "Cody Fisher",
        time: "17:30 AM",
        avatar: profile_avatar3,
        orderDone: 12,
        orderTotal: 50,
        payment: "detail",
        paymentDetail: { qty: "2 of 30 ea", label: "Order 1" },
        status: "Working",
        score: "W3,500",
        cancelled: false,
        logo: logo_3,
      },
      {
        id: 4,
        name: "Jacob Jones",
        time: "17:30 AM",
        avatar: profile_avatar4,
        orderDone: 12,
        orderTotal: 50,
        payment: "paid",
        status: "Canceled",
        score: "W70",
        cancelled: true,
        logo: logo_4,
      },
    ],
  },
  {
    group: "Yesterday",
    rows: [
      {
        id: 5,
        name: "Floyd Miles",
        time: "17:30 AM",
        avatar: profile_avatar5,
        orderDone: 12,
        orderTotal: 50,
        payment: "detail",
        paymentDetail: { qty: "2 of 30 ea", label: "Order 1" },
        status: "Working",
        score: "W2,100",
        cancelled: false,
        logo: logo_5,
      },
      {
        id: 6,
        name: "Floyd Miles",
        time: "17:30 AM",
        avatar: profile_avatar6,
        orderDone: 12,
        orderTotal: 50,
        payment: "paid",
        status: "Working",
        score: "W1,800",
        cancelled: false,
        logo: logo_6,
      },
      {
        id: 7,
        name: "Wade Warren",
        time: "17:30 AM",
        avatar: profile_avatar7,
        orderDone: 12,
        orderTotal: 50,
        payment: "detail",
        paymentDetail: { qty: "2 of 30 ea", label: "Order 1" },
        status: "Working",
        score: "W900",
        cancelled: false,
        logo: logo_7,
      },
    ],
  },
  {
    group: "Yesterday",
    rows: [
      {
        id: 8,
        name: "Guy Hawkins",
        time: "17:30 AM",
        avatar: profile_avatar8,
        orderDone: 12,
        orderTotal: 50,
        payment: "detail",
        paymentDetail: { qty: "2 of 30 ea", label: "Order 1" },
        status: "Working",
        score: "W600",
        cancelled: false,
        logo: logo_8,
      },
      {
        id: 9,
        name: "Jerome Bell",
        time: "17:30 AM",
        avatar: profile_avatar9,
        orderDone: 12,
        orderTotal: 50,
        payment: "paid",
        status: "Working",
        score: "W450",
        cancelled: false,
        logo: logo_9,
      },
      {
        id: 10,
        name: "Guy Hawkins",
        time: "17:30 AM",
        avatar: profile_avatar8,
        orderDone: 12,
        orderTotal: 50,
        payment: "detail",
        paymentDetail: { qty: "2 of 30 ea", label: "Order 1" },
        status: "Working",
        score: "W600",
        cancelled: false,
        logo: logo_8,
      },
    ],
  },
];

const orders = [
  { id: 1, name: "Order 1" },
  { id: 2, name: "Order 2" },
  { id: 3, name: "Order 3" },
];

export default function OrderDashboard() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [checked, setChecked] = useState({});
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("100");

  const allIds = users.flatMap(s => s.rows.map(r => r.id));
  const isAllChecked = allIds.length > 0 && allIds.every(id => !!checked[id]);
  const isIndeterminate = !isAllChecked && allIds.some(id => !!checked[id]);

  const toggleAll = () => {
    if (isAllChecked) {
      setChecked({});
    } else {
      const all = {};
      allIds.forEach(id => (all[id] = true));
      setChecked(all);
    }
  };

  const toggleCheck = (id) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="w-full bg-[#F9F9F9] p-4">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-2 mx-auto w-full mb-">
        <div className="flex items-center gap-2 shrink-0">
          <input
            type="checkbox"
            className="checkboxcontes"
            checked={isAllChecked}
            ref={el => { if (el) el.indeterminate = isIndeterminate; }}
            onChange={toggleAll}
          />
          <p className="md:hidden font-normal text-[9px] sm:text-[10.03px] md:text-[11px] lg:text-[12px] leading-[100%] tracking-[0%] text-[#272742]">
            Select all
          </p>
          <div className="hidden md:block relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[12px] rounded-md px-3.75 py-1.75 bg-white border-none outline-none cursor-pointer flex items-center gap-2"
            >
              {selected}
              <svg
                className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                width="9" height="6" viewBox="0 0 9 6" fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.353554 0.353577L4.35355 4.35358L8.35355 0.353577" stroke="black" />
              </svg>
            </button>

            <div className={`absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md overflow-hidden z-50 transition-all duration-200 origin-top ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
              }`}>
              {["100", "750", "500"].map((opt) => (
                <div
                  key={opt}
                  onClick={() => { setSelected(opt); setIsOpen(false) }}
                  className={`text-xs px-3 py-1.5 cursor-pointer transition-colors duration-150 ${selected === opt ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                    }`}
                >
                  {opt}
                </div>
              ))}
            </div>

            {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
          </div>
        </div>

        <div className="bg-white p-1 sm:p-1.25 rounded-[10px] inline-flex gap-1 shrink-0 border border-gray-100 ">
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
                className={`utnoneto
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

      {/* Sections container */}
      <div className=" mx-auto w-full space-y-6">
        {users.map((section, si) => (
          <div key={si}>
            <div className="flex items-center py-3 px-1 gap-7.5">
              <p className="usernametext">
                {section.group}
              </p>
              <div className="flex-1 border-t border-[#272742]/5 mr-4" />
            </div>
            <div className="w-full bg-white rounded-[15px] overflow-hidden">
              {section.rows.map((row) => (
                <div
                  key={row.id}
                  className={`w-full transition-colors hover:bg-gray-50 border-gray-100 last:border-b-0 `}
                >
                  {/* ── Desktop row (>= sm) ── */}
                <div className="hidden md:grid w-full px-4 py-3.5" style={{ gridTemplateColumns: '2fr 1fr 1fr 1.5fr' }}>

                  {/* Col 1 - Avatar + Name */}
                  <div className="flex items-center gap-3 min-w-0">
                    <input
                      type="checkbox"
                      checked={!!checked[row.id]}
                      onChange={() => toggleCheck(row.id)}
                      className="w-3.5 h-3.5 rounded-[3px] border-gray-300 accent-[#7F56DA] shrink-0 cursor-pointer"
                    />
                    <img
                      src={row.avatar}
                      alt={row.name}
                      className="w-8.75 h-8.75 rounded-full object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-[12.04px] md:text-[13px] lg:text-[14px] font-lexend font-medium text-[#272742] leading-none truncate">
                        {row.name}
                      </p>
                      <p className="text-[9px] sm:text-[10.03px] md:text-[11px] lg:text-[12px] font-lexend font-normal text-[#9AA2AB] opacity-70 leading-none mt-2">
                        {row.time}
                      </p>
                    </div>
                  </div>

                  {/* Col 2 - Order Progress */}
                  <div className="flex flex-col justify-center">
                    <p className="font-lexend font-normal text-[11px] sm:text-[12.04px] md:text-[13px] lg:text-[14px] leading-none text-gray-800">
                      {row.orderDone} <span className="text-gray-400">of</span>{" "}{row.orderTotal}
                    </p>
                    <div className="flex items-center gap-1.5 mt-3.25">
                      <div className="relative w-8.25 h-0.5 bg-[#DFEBFC] rounded-2xl">
                        <div
                          className="absolute left-0 top-0 h-0.5 bg-[#3385FF] rounded-2xl"
                          style={{ width: `${(row.orderDone / row.orderTotal) * 100}%` }}
                        />
                      </div>
                      {row.payment === "detail" && (
                        <span className="w-2.75 h-2.75 border border-[#7F56DA] rounded-[3px] hidden md:flex items-center justify-center shrink-0">
                          <img src={Plus} alt="plus" className="w-1.5 h-1.5" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Col 3 - Payment */}
                  <div className="hidden md:flex flex-col justify-center">
                    {row.payment === "paid" ? (
                      <span className="border border-[#0BAF4C] text-[#0BAF4C] font-lexend font-normal text-[12px] leading-none rounded-md px-2.5 py-1 w-fit">
                        Paid
                      </span>
                    ) : (
                      <div>
                        <p className="font-lexend font-normal text-[14px] leading-none text-[#272742]">
                          {row.paymentDetail.qty}
                        </p>
                        <div className="flex items-center gap-1 mt-1.5">
                          <span className="font-lexend font-normal text-[10px] text-[#5096FF]">
                            {row.paymentDetail.label}
                          </span>
                          <span className="w-3 h-3 border border-[#7F56DA] rounded-[3px] flex items-center justify-center shrink-0">
                            <img src={Plus} alt="plus" className="w-1.5 h-1.5" />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Col 4 - Status + Logo */}
                  <div className="flex items-center gap-4 justify-end">
                    <div>
                      <p className={`font-lexend font-medium text-[11px] sm:text-[12.04px] md:text-[13px] lg:text-[14px] leading-none ${row.cancelled ? "text-[#FF284C]" : "text-[#272742]"}`}>
                        {row.status}
                      </p>
                      <p className={`font-lexend text-[9px] sm:text-[10.03px] md:text-[11px] lg:text-[12px] line-through mt-1.5 ${row.cancelled ? "text-[#FF284C]" : "text-[#5096FF]"}`}>
                        {row.score}
                      </p>
                    </div>
                    {row.logo ? (
                      <img
                        src={row.logo}
                        alt={row.name}
                        className="w-9 h-9 rounded-[5px] object-contain hidden md:block shrink-0"
                      />
                    ) : (
                      <span className="text-lg shrink-0">◆</span>
                    )}
                  </div>

                </div>

                  {/* ── Mobile row (< sm) ── */}
                  <div className="flex md:hidden items-center gap-2 px-3 py-3">
                    <input
                      type="checkbox"
                      checked={!!checked[row.id]}
                      onChange={() => toggleCheck(row.id)}
                      className="w-3.5 h-3.5 rounded-[3px] border-gray-300 accent-[#7F56DA] shrink-0 cursor-pointer"
                    />

                    <img
                      src={row.avatar}
                      alt={row.name}
                      className="w-8 h-8 rounded-full object-cover shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-lexend font-medium text-[#272742] leading-none truncate">
                        {row.name}
                      </p>
                      <p className="text-[11px] font-lexend text-[#9AA2AB] opacity-70 leading-none mt-1">
                        {row.time}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <p className="font-lexend font-normal text-[9px] sm:text-[10.03px] md:text-[11px] lg:text-[12px] leading-none text-gray-800 whitespace-nowrap">
                        {row.orderDone}{" "}
                        <span className="text-gray-400 text-[10px]">of</span>{" "}
                        {row.orderTotal}
                      </p>
                      <div className="bg-gray-200 rounded-full mt-1.5 w-12 h-0.75">
                        <div
                          className="h-full bg-[#3385FF] rounded-full"
                          style={{
                            width: `${Math.round(
                              (row.orderDone / row.orderTotal) * 100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      <p
                        className={`font-lexend font-medium text-[9px] sm:text-[10.03px] md:text-[11px] lg:text-[12px] leading-none ${row.cancelled ? "text-[#FF284C]" : "text-[#272742]"
                          }`}
                      >
                        {row.status}
                      </p>
                      <p
                        className={`font-lexend text-[10px] line-through mt-1 ${row.cancelled ? "text-[#FF284C]" : "text-[#5096FF]"
                          }`}
                      >
                        {row.score}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FAB (Only for mobile) */}
      <div className="flex md:hidden sticky bottom-6 justify-end z-20">
        <button
          onClick={() => navigate('/add-link')}
          className="w-12 h-12 border-[#885AC2] bg-[#7F56DA] rounded-full flex items-center justify-center backdrop-blur-[9.14px]"
          style={{ boxShadow: '0 8px 24px rgba(133, 79, 202, 0.6)' }}
        >
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2858 4.28574V16.2857" stroke="white" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.28577 10.2858H16.2858" stroke="white" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
