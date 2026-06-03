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
        selected: true,
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
        selected: true,
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
        selected: true,
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

function ProgressBar({ done, total }) {
  const pct = Math.round((done / total) * 100);
  return (
    <div className="w-8.25 bg-gray-200 rounded-full mt-1.5">
      <div
        className="h-0.75 bg-[#3385FF] border border-[#3385FF] rounded-full"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function OrderDashboard() {
  const [activeTab, setActiveTab] = useState(0);
  const [checked, setChecked] = useState({});

  const toggleCheck = (id) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className=" w-full bg-[#F9F9F9] min-h-screen">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-3.5 h-3.5 rounded-[3px] border border-[#D6D6D6] accent-[#7F56DA] cursor-pointer"
          />

          <select className="text-xs rounded-md px-2 py-1 bg-white ">
            <option>100</option>
            <option>75</option>
            <option>50</option>
          </select>
        </div>

        <div className="bg-white p-1 rounded-[10px] inline-flex gap-2">
          {["Order 1", "Order 2", "Order 3"].map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`text-[12px] font-lexend font-normal leading-none px-3.75 py-1.5 rounded-lg transition-colors ${activeTab === i
                  ? "bg-[#7F56DA] text-white"
                  : "bg-white text-[#9AA2AB]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      {users.map((section, si) => (
        <div key={si} className="">
          {/* Group label */}
          <div className="flex items-center gap-3 py-5 px-1">
            <p className="font-lexend text-[14px] font-normal md:text-[#9AA2AB] whitespace-nowrap">
              {section.group}
            </p>
            <div className="flex-1 border-t border-[#272742]/5"></div>
          </div>

          {/* Card */}
          <div className="w-full bg-white rounded-[15px] overflow-hidden">
            {section.rows.map((row) => (
              <div
                key={row.id}
                className={`w-full flex items-center justify-between gap-3 px-4 py-3.5 transition-colors hover:bg-gray-50 ${checked[row.id]
                    ? "bg-indigo-50 border-l-4 border-l-[#7F56DA]"
                    : ""
                  }`}
              >
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={!!checked[row.id]}
                  onChange={() => toggleCheck(row.id)}
                  className="w-3.5 h-3.5 rounded-[3px] border-gray-300 accent-[#7F56DA] shrink-0 cursor-pointer"
                />

                {/* Avatar */}
                <img
                  src={row.avatar}
                  alt={row.name}
                  className="w-8.75 h-8.75 rounded-[94px] object-cover shrink-0"
                />

                {/* Name + time */}
                <div className=" shrink-0">
                  <p className="text-[14px] font-lexend font-medium text-[#272742] leading-none">
                    {row.name}
                  </p>
                  <p className="text-[12px] font-lexend font-normal text-[#9AA2AB] opacity-70 leading-none mt-2">
                    {row.time}
                  </p>
                </div>

                {/* Order count + progress */}
                <div className="shrink-0">
                  <p className="font-lexend font-normal text-[14px]  leading-none tracking-normal text-gray-800 ">
                    {row.orderDone} <span className="text-gray-400">of</span>{" "}
                    {row.orderTotal}
                  </p>
                  <div className="flex items-center gap-1.25 mt-2">
                    <ProgressBar done={row.orderDone} total={row.orderTotal} />
                    {row.payment === "detail" && (
                      <span className="hidden md:flex w-2.75 h-2.75 border border-[#7F56DA] rounded-[3px] items-center justify-center shrink-0 mt-1.25">
                        <img src={Plus} alt="plus" className="w-1.25 h-1.25" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Payment */}
                <div className="hidden md:block  shrink-0">
                  {row.payment === "paid" ? (
                    <span className="border border-[#0BAF4C] text-[#0BAF4C] font-lexend font-normal text-[14px] leading-none tracking-normal rounded-md pt-0.75 pr-3 pb-0.75 pl-3">
                      Paid
                    </span>
                  ) : (
                    <div>
                      <p className="font-lexend font-normal text-[14px] leading-none tracking-normal text-[#272742]">
                        {row.paymentDetail.qty}
                      </p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="font-lexend font-normal text-[10px] leading-none tracking-normal text-[#5096FF] mt-2">
                          {row.paymentDetail.label}
                        </span>
                        <span className="w-2.75 h-2.75 border border-[#7F56DA] rounded-[3px] flex items-center justify-center shrink-0 mt-2">
                          <img
                            src={Plus}
                            alt="plus"
                            className="w-1.25 h-1.25"
                          />
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Status + score */}
                <div className="shrink-0 text-right">
                  <p
                    className={`font-lexend font-medium text-[14px] leading-none tracking-normal text-[#272742] ${row.cancelled ? "text-[#FF284C]" : "text-gray-900"
                      }`}
                  >
                    {row.status}
                  </p>
                  <p className="font-lexend text-[12px] text-red-400 line-through mt-0.5">
                    {row.score}
                  </p>
                </div>

                {/* Logo box */}
                <div className="shrink-0">
                  {row.logo ? (
                    <img
                      src={row.logo}
                      alt={row.name}
                      className="w-9.5 h-9.5 rounded-[5px] object-contain"
                    />
                  ) : (
                    <span className="text-lg">◆</span>
                  )}
                </div>

                <button className="flex md:hidden fixed bottom-6 right-6 w-12 h-12 bg-[#7F56DA] rounded-full items-center justify-center shadow-lg z-20">
                  <span className="text-white text-2xl leading-none">+</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
