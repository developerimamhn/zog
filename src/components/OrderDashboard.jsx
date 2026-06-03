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

  return (
    <div className="w-full bg-[#F9F9F9] min-h-screen p-4">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-2 max-w-7xl mx-auto w-full mb-4">
        <div className="flex items-center gap-2 shrink-0">
          <input
            type="checkbox"
            className="w-3.5 h-3.5 rounded-[3px] border border-[#D6D6D6] accent-[#7F56DA] cursor-pointer"
          />
          <select className="text-xs rounded-md px-2 py-1 bg-white border border-gray-200">
            <option>100</option>
            <option>75</option>
            <option>50</option>
          </select>
        </div>

        <div className="bg-white p-1 rounded-[10px] inline-flex gap-1 shrink-0 border border-gray-100">
          {["Order 1", "Order 2", "Order 3"].map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`text-[11px] font-lexend font-normal leading-none px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${activeTab === i
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
            {/* Group label */}
            <div className="flex items-center py-3 px-1">
              <p className="font-lexend text-[14px] font-normal md:text-[#9AA2AB] whitespace-nowrap">
                {section.group}
              </p>
              <div className="flex-1 border-t border-[#272742]/5" />
            </div>

            {/* Card wrapper */}
            <div className="w-full bg-white rounded-[15px] overflow-hidden">
              {section.rows.map((row) => (
                <div
                  key={row.id}
                  className={`w-full transition-colors hover:bg-gray-50 border-b border-gray-100 last:border-b-0 ${checked[row.id]
                    ? "bg-indigo-50/50 border-l-4 border-l-[#7F56DA]"
                    : ""
                    }`}
                >
                  {/* ── Desktop & Tablet Row (sm+) ── */}
                  <div className="hidden sm:flex items-center justify-between px-4 py-3.5 gap-4">
                    {/* DIV 1 — Checkbox + Avatar + Name + Time */}
                    <div className="flex items-center gap-3 min-w-50">
                      <input
                        type="checkbox"
                        checked={!!checked[row.id]}
                        onChange={() => toggleCheck(row.id)}
                        className="w-3.5 h-3.5 rounded-[3px] border-gray-300 accent-[#7F56DA] shrink-0 cursor-pointer"
                      />
                      <img
                        src={row.avatar}
                        alt={row.name}
                        className="w-9 h-9 rounded-full object-cover shrink-0"
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

                    {/* DIV 2 — Order count + progress */}
                    <div className="flex flex-col items-start min-w-25">
                      <p className="font-lexend font-normal text-[14px] leading-none text-gray-800">
                        {row.orderDone} <span className="text-gray-400">of</span>{" "}
                        {row.orderTotal}
                      </p>
                      <div className="flex items-center gap-1.5 mt-2 w-full">
                        <div className="bg-gray-200 rounded-full w-20 h-1">
                          <div
                            className="h-full bg-[#3385FF] rounded-full"
                            style={{
                              width: `${Math.round(
                                (row.orderDone / row.orderTotal) * 100
                              )}%`,
                            }}
                          />
                        </div>
                        {row.payment === "detail" && (
                          <span className="w-3 h-3 border border-[#7F56DA] rounded-[3px] flex items-center justify-center shrink-0">
                            <img src={Plus} alt="plus" className="w-1.5 h-1.5" />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* DIV 3 — Payment */}
                    <div className="min-w-25 md:flex items-center hidden">
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

                    {/* DIV 4 — Status + Score + Logo */}
                    <div className="flex items-center gap-4 text-right justify-end min-w-30">
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

                    <div className="shrink-0 text-right min-w-16.25">
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
