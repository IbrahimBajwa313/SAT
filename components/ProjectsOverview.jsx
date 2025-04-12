import Link from "next/link";
import { useState } from "react";
import {
  FaHospitalAlt, FaSun, FaSchool, FaFemale, FaShoppingCart,
  FaUtensils, FaAmbulance, FaTshirt, FaHome, FaUsers, FaMoneyBillWave,
  FaKaaba, FaGift
} from "react-icons/fa";

export default function ProjectsOverview() {
  const [activeTab, setActiveTab] = useState("palestine");

  const pakistanProjects = [
    { label: "Medical Camps / Dispensaries", icon: <FaHospitalAlt size={24} className="text-green-700" /> },
    { label: "Solar-Powered Water Pumps", icon: <FaSun size={24} className="text-yellow-500" /> },
    { label: "Education (School Project)", icon: <FaSchool size={24} className="text-blue-600" /> },
    { label: "Women Empowerment", icon: <FaFemale size={24} className="text-pink-500" /> },
    { label: "Ration Drives", icon: <FaShoppingCart size={24} className="text-gray-700" /> },
  ];

  const palestineProjects = [
    { label: "Food & Water Distribution", icon: <FaUtensils size={24} className="text-orange-600" /> },
    { label: "Medical Assistance", icon: <FaAmbulance size={24} className="text-red-600" /> },
    { label: "Clothing & Essentials", icon: <FaTshirt size={24} className="text-blue-500" /> },
    { label: "Shelter & Housing", icon: <FaHome size={24} className="text-gray-600" /> },
    { label: "Family Support Program", icon: <FaUsers size={24} className="text-purple-600" /> },
    { label: "Cash Distribution", icon: <FaMoneyBillWave size={24} className="text-green-600" /> },
    { label: "Ration Drives", icon: <FaShoppingCart size={24} className="text-gray-700" /> },
    { label: "Qurbani Project", icon: <FaKaaba size={24} className="text-black" /> },
    { label: "Ramadan Special Project", icon: <FaGift size={24} className="text-yellow-600" /> },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Our Ongoing Efforts
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Inspired by the <span className="font-semibold text-green-700">Shab e Abi Talib</span>,<br />
          we serve communities in need across <span className="font-bold"> Pakistan</span> and <span className="font-bold"> Palestine</span>.
        </p>

        {/* Tabs (Palestine First) */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("palestine")}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${activeTab === "palestine"
              ? "bg-red-700 text-white shadow-lg"
              : "bg-white text-red-700 border border-red-700 shadow-sm"
              }`}
            aria-label="View Palestine Projects"
          >
             Palestine
          </button>
          <button
            onClick={() => setActiveTab("pakistan")}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${activeTab === "pakistan"
              ? "bg-green-700 text-white shadow-lg"
              : "bg-white text-green-700 border border-green-700 shadow-sm"
              }`}
            aria-label="View Pakistan Projects"
          >
             Pakistan
          </button>
        </div>

        {/* Project Grids */}
        <div className="overflow-hidden">
          {activeTab === "pakistan" && (
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6">
                Pakistan Projects
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pakistanProjects.map((project, idx) => (
                  <div
                    key={idx}
                    className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 flex items-center gap-4 text-gray-800 font-medium shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    aria-label={`Pakistan Project: ${project.label}`}
                  >
                    <div className="p-3 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                      {project.icon}
                    </div>
                    <span className="text-lg">{project.label} </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "palestine" && (
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-6">
                 Palestine Projects
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {palestineProjects.map((project, idx) => (
                  <div
                    key={idx}
                    className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 flex items-center gap-4 text-gray-800 font-medium shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    aria-label={`Palestine Project: ${project.label}`}
                  >
                    <div className="p-3 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                      {project.icon}
                    </div>
                    <span className="text-lg">{project.label} </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link href="/our-projects">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-800 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-subtle">
              Learn More →
            </button>
          </Link>
        </div>
      </div>

      {/* Subtle Pulse Animation */}
      <style jsx>{`
        @keyframes subtlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-subtle {
          animation: subtlePulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
