import { useState } from "react";
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
import { useNavigate } from 'react-router-dom';

const users = [
  {
    group: "Today",
    rows: [
      {
        id: 1,
        name: "Jane Cooper",
        time: "17:30 AM",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
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
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
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
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
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
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
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
        avatar: "https://randomuser.me/api/portraits/men/41.jpg",
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
        avatar: "https://randomuser.me/api/portraits/men/41.jpg",
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
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
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
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
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
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        orderDone: 12,
        orderTotal: 50,
        payment: "paid",
        status: "Working",
        score: "W450",
        cancelled: false,
        logo: logo_9,
      },
    ],
  },
];

export default function OrderDashboard() {
  const [activeTab, setActiveTab] = useState(0);
  const [checked, setChecked] = useState({});
  const navigate = useNavigate();

  const toggleCheck = (id) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState("100")

  return (  
    <div className="w-full bg-[#F9F9F9] p-4">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-2 mx-auto w-full mb-4">
        <div className="flex items-center gap-2 shrink-0">
          <input
            type="checkbox"
            className="checkboxcontes"
          />

          <div className="relative inline-block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-xs rounded-md px-3.75 py-1.75 bg-white border-none outline-none cursor-pointer flex items-center gap-2"
            >
              {selected}
              <svg
                className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                width="9" height="6" viewBox="0 0 9 6" fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.353554 0.353577L4.35355 4.35358L8.35355 0.353577" stroke="black"/>
              </svg>
            </button>

            <div className={`absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md overflow-hidden z-50 transition-all duration-200 origin-top ${
              isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
            }`}>
              {["100", "750", "500"].map((opt) => (
                <div
                  key={opt}
                  onClick={() => { setSelected(opt); setIsOpen(false) }}
                  className={`text-xs px-3 py-1.5 cursor-pointer transition-colors duration-150 ${
                    selected === opt ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                  }`}
                >
                  {opt}
                </div>
              ))}
            </div>

            {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
          </div>
        </div>

        <div className="bg-white p-1.25 rounded-[10px] inline-flex gap-1 shrink-0 border border-gray-100 ">
          {["Order 1", "Order 2", "Order 3"].map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`utnoneto ${activeTab === i
                ? "bg-[#7F56DA] text-white"
                : "bg-white text-[#9AA2AB]"
                }`}
            >
              {tab}
            </button>
          ))}
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
              <div className="flex-1 border-t border-[#272742]/5" />
            </div>
            <div className="w-full bg-white rounded-[15px] overflow-hidden">
              {section.rows.map((row) => (
                <div
                  key={row.id}
                  className={`w-full transition-colors hover:bg-gray-50 border-b border-gray-100 last:border-b-0 `}
                >
                  <div className="hidden sm:flex items-center justify-between px-4 py-3.5 gap-4 w-full">
                    <div className='w-full flex items-start justify-start'>
                      <div className="flex items-center gap-3 w-full">
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
                        <div className="truncate">
                          <p className="text-[14px] font-lexend font-medium text-[#272742] leading-none truncate">
                            {row.name}
                          </p>
                          <p className="text-[12px] font-lexend font-normal text-[#9AA2AB] opacity-70 leading-none mt-2">
                            {row.time}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex items-start justify-start">
                      <div className='flex flex-col items-start w-full'>
                        <p className="font-lexend font-normal text-[14px] leading-none text-gray-800">
                        {row.orderDone} <span className="text-gray-400">of</span>{" "}
                        {row.orderTotal}
                      </p>
                      <div className="flex items-center gap-1.5 mt-3.25">
                        <div className="bg-gray-200 rounded-full w-8.25 h-[1.5px]">
                          <div className="bg-[#3385FF] rounded-full w-4.25 h-[1.5px]"/>
                        </div>
                        {row.payment === "detail" && (
                          <span className="w-2.75 h-2.75 border border-[#7F56DA] rounded-[3px] flex items-center justify-center shrink-0">
                            <img src={Plus} alt="plus" className="w-1.5 h-1.5" />
                          </span>
                        )}
                      </div>
                      </div>
                    </div>
                    <div className='w-full flex items-start justify-start'>
                    <div className="md:flex items-center hidden w-full">
                      {row.payment === "paid" ? (
                        <span className="border border-[#0BAF4C] text-[#0BAF4C] font-lexend font-normal text-[12px] leading-none rounded-md px-2.5 py-1">
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
                    </div>

                    {/* DIV 4 — Status + Score + Logo */}
                    <div className='w-full flex items-start justify-start'>
                    <div className="flex items-center gap-4 text-right justify-end w-full">
                      <div>
                        <p
                          className={`font-lexend font-medium text-[14px] leading-none ${row.cancelled ? "text-[#FF284C]" : "text-[#272742]"
                            }`}
                        >
                          {row.status}
                        </p>
                        <p
                          className={`font-lexend text-[12px] line-through mt-1.5 ${row.cancelled ? "text-[#FF284C]" : "text-[#5096FF]"
                            }`}
                        >
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
                  </div>

                  {/* ── Mobile row (< sm) ── */}
                  <div className="flex sm:hidden items-center gap-2 px-3 py-3">
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
                      <p className="font-lexend font-normal text-[12px] leading-none text-gray-800 whitespace-nowrap">
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
                        className={`font-lexend font-medium text-[12px] leading-none ${row.cancelled ? "text-[#FF284C]" : "text-[#272742]"
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
      <button
        onClick={() => navigate('/add-link')}
        className="flex md:hidden fixed bottom-6 right-6 w-12 h-12 bg-[#7F56DA] rounded-full items-center justify-center shadow-lg z-20"
      >
        <span className="text-white text-2xl leading-none">+</span>
      </button>
    </div>
  );
}
