import Link from "next/link";
import { useState } from "react";
import ReliefActivitySummary from "./ReliefActivitySummary"; // Adjust path accordingly

export default function ProjectsOverview() {
  const [activeTab, setActiveTab] = useState("palestine");

  const pakistanProjects = [
    {
      label: "Medical Camps / Dispensaries",
      image: "/projects/water-projects.jpg",
      progress: 65,
      goal: 10000,
      status: "active",
    },
    {
      label: "Solar-Powered Water Pumps",
      image: "/projects/water-projects.jpg",
      progress: 80,
      goal: 8000,
      status: "urgent",
    },
    {
      label: "Education (School Project)",
      image: "/projects/water-projects.jpg",
      progress: 90,
      goal: 12000,
      status: "goalReached",
    },
    {
      label: "Women Empowerment",
      image: "/projects/water-projects.jpg",
      progress: 45,
      goal: 7000,
      status: "active",
    },
    {
      label: "Ration Drives",
      image: "/projects/ration-drives.jpg",
      progress: 30,
      goal: 5000,
      status: "closed",
    },
  ];

  const palestineProjects = [
    {
      label: "Water Projects",
      image: "/water-projects.jpg",
      progress: 55,
      goal: 1000,
      status: "active",
    },
    {
      label: "Food Distribution",
      image: "/food-distribution.jpg",
      progress: 75,
      goal: 5000,
      status: "active",
    },
    {
      label: "Medical Assistance",
      image: "/medical-assistance.jpg",
      progress: 60,
      goal: 10000,
      status: "urgent",
    },
    {
      label: "Clothing & Essentials",
      image: "/clothing-essentials.jpg",
      progress: 80,
      goal: 3000,
      status: "goalReached",
    },
    {
      label: "Shelter & Housing",
      image: "/shelter-housing.jpg",
      progress: 50,
      goal: 150,
      status: "active",
    },
    {
      label: "Family Support Program",
      image: "/family-support-program.jpg",
      progress: 90,
      goal: 7000,
      status: "closed",
    },
    {
      label: "Cash Distribution",
      image: "/Cash.jpg",
      progress: 40,
      goal: 8000,
      status: "active",
    },
    {
      label: "Ration Drives",
      image: "/ration-drives.jpg",
      progress: 65,
      goal: 4000,
      status: "urgent",
    },
    {
      label: "Ramadan Special Project",
      image: "/ramadan-special-project.jpg",
      progress: 100,
      goal: 5000,
      status: "closed",
    },
  ];

  const learnMoreLink = activeTab === "palestine" ? "/GazaProjects" : "/PakProjects";
  const learnMoreLabel =
    activeTab === "palestine"
      ? "Details of Palestine Projects"
      : "Details of Pakistan Projects";

  return (
    <section className="py-12 px-2 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Our Ongoing Efforts
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Inspired by the{" "}
          <span className="font-semibold text-green-700">Shab e Abi Talib</span>,
          <br />
          we serve communities in need across{" "}
          <span className="font-bold">Pakistan</span> and{" "}
          <span className="font-bold">Palestine</span>.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("palestine")}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeTab === "palestine"
                ? "bg-red-700 text-white shadow-lg"
                : "bg-white text-red-700 border border-red-700 shadow-sm"
            }`}
          >
            Palestine
          </button>
          <button
            onClick={() => setActiveTab("pakistan")}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeTab === "pakistan"
                ? "bg-green-700 text-white shadow-lg"
                : "bg-white text-green-700 border border-green-700 shadow-sm"
            }`}
          >
            Pakistan
          </button>
        </div>

        {/* Projects */}
        <div className="overflow-hidden">
          {activeTab === "pakistan" && (
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6">
                Pakistan Projects
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pakistanProjects.map((project, idx) => (
                  <ReliefActivitySummary
                    key={idx}
                    activity={project.label}
                    image={project.image}
                    progress={project.progress}
                    goal={project.goal}
                    initialStatus={project.status}
                    imageHeight="h-60"  
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === "palestine" && (
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-6">
                Palestine Projects
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {palestineProjects.map((project, idx) => (
                  <ReliefActivitySummary
                    key={idx}
                    activity={project.label}
                    image={project.image}
                    progress={project.progress}
                    goal={project.goal}
                    initialStatus={project.status}
                    imageHeight="h-60" 
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link href={learnMoreLink}>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-800 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-subtle">
              {learnMoreLabel} →
            </button>
          </Link>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes subtlePulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-pulse-subtle {
          animation: subtlePulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
