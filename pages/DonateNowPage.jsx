import React, { useState } from 'react';

const DonateNowPage = () => {
  const goalAmount = 10000;
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const dayOfMonth = today.getDate();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const targetAmount = goalAmount * 0.95;
  const dailyAmount = targetAmount / daysInMonth;
  const raisedAmount = Math.round(dailyAmount * dayOfMonth);
  const progressPercentage = Math.min(
    Math.round((raisedAmount / goalAmount) * 100),
    100
  );

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '923367000304'; // Replace with your WhatsApp number (e.g. +92 300 1234567)
    const message = `Assalamu Alaikum! I want to donate for Gaza:\n\n👤 Name: ${name}\n📞 WhatsApp: ${phone}\n💵 Amount: $${amount}\n\nSent via Donate Now Page`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-2xl border border-gray-200">
        <h1 className="text-4xl font-bold text-center text-black mb-4">
          Support <span className="text-red-600">Gaza</span> – Donate Now
        </h1>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left: Progress and Info */}
          <div className="flex-1">
            <p className="text-lg text-gray-700 font-medium mb-2">
              ${raisedAmount.toLocaleString()} raised of ${goalAmount.toLocaleString()} goal
            </p>

            <div className="w-full bg-gray-200 h-4 rounded-full mb-3">
              <div
                className="bg-green-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-green-700 mb-6">
              {progressPercentage}% funded – every rupee counts!
            </p>

            <p className="text-base text-gray-800 mb-6">
              Your donation helps provide urgent food, medical aid, and shelter to families suffering in Gaza. Join thousands who have already stepped up to make a difference.
            </p>

            <p className="text-xs text-gray-400">Donation protected by Gaza Relief Trust</p>
          </div>

          {/* Right: Donation Form */}
          <div className="flex-1 bg-gray-100 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Make a Donation</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                <input
                  type="tel"
                  placeholder="e.g. 03001234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount ($)</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800 transition font-semibold"
              >
                Donate Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateNowPage;
