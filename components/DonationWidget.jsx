// app/donate/page.jsx or components/GazaDonationHero.jsx
import Link from "next/link";
// import { Link } from 'react-router-dom';
import React from "react";

const GazaDonationHero = () => {
  const goalAmount = 10000;
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-indexed
  const dayOfMonth = today.getDate(); // 1 to 31

  // Get total days in this month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Simulate 95% of goal being raised over the month
  const targetAmount = goalAmount * 0.95;

  // Daily increment
  const dailyAmount = targetAmount / daysInMonth;

  // Raised amount so far (simulated)
  const raisedAmount = Math.round(dailyAmount * dayOfMonth);

  // Calculate progress percentage
  const progressPercentage = Math.min(
    Math.round((raisedAmount / goalAmount) * 100),
    100
  );

  return (
    <div className="  flex items-center justify-center  ">
      <div className="bg-white shadow-lg rounded-2xl p-16  w-full max-w-full border border-gray-200">
        <h1 className="text-4xl font-bold text-center text-black mb-4">
          Support <span className="text-red-600">Gaza</span> – Donate Now
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Text Section */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-xl font-semibold text-gray-800">
              ${raisedAmount.toLocaleString()} raised
            </p>
            <p className="text-sm text-gray-500 mb-2">
              of ${goalAmount.toLocaleString()} goal
            </p>
            <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden mb-4">
              <div
                className="bg-green-600 h-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-green-700 font-semibold">
              {progressPercentage}% funded – every rupee counts
            </p>
            <p className="text-base text-gray-700 mt-4">
              Your donations provide food, shelter, and medicine to displaced
              families in Gaza. Join thousands who have already stepped up.
            </p>

            <Link href="/DonateNowPage" className="mt-6 w-full md:w-auto">
              <button className="bg-green-700 text-white font-bold py-3 px-6 rounded hover:bg-green-800 transition">
                Donate Now
              </button>
            </Link>
            <p className="text-xs text-gray-400 mt-2">
              Donation protected by Gaza Relief Trust
            </p>
          </div>

          {/* Right Circular Progress */}
          <div className="relative w-80 h-80">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="text-gray-300"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-green-600"
                stroke="currentColor"
                strokeWidth="3.8"
                strokeDasharray={`${progressPercentage}, 100`}
                fill="none"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text
                x="18.5"
                y="22.35"
                className="text-xs fill-black font-bold"
                textAnchor="middle"
              >
                {progressPercentage}%
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GazaDonationHero;
