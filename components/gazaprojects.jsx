import Link from "next/link";

export default function ProjectsOverview() {
  const pakistanProjects = [
    "🏥 Medical Camps / Dispensaries",
    "☀️ Solar Powered Water Pumps",
    "🏫 Education (School Project)",
    "👩‍🔧 Women Empowerment",
    "🛒 Ration Drives",
  ];

  const palestineProjects = [
    "🥘 Food & Water Distribution",
    "🚑 Medical Assistance",
    "🧥 Clothing & Essentials",
    "🏠 Shelter & Housing",
    "👨‍👩‍👧‍👦 Family Support Program",
    "💵 Cash Distribution",
    "🛍️ Ration Drives",
    "🕋 Qurbani Project",
    "🌙 Ramadan Special Project",
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">🌍 Our Ongoing Efforts</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
  Carrying the spirit of <span className="font-semibold">Shab e Abi Talib Foundation</span>,<br />
  we rise to serve those in hardship — from <span className="font-bold">🇵🇰 Pakistan</span> to <span className="font-bold">🇵🇸 Palestine</span>.
</p>


        {/* 🇵🇰 Pakistan Projects */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6">🇵🇰 Pakistan Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {pakistanProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-5 text-gray-800 font-medium hover:shadow-xl transition duration-300"
              >
                {project}
              </div>
            ))}
          </div>
        </div>

        {/* 🇵🇸 Palestine Projects */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-6">🇵🇸 Palestine Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {palestineProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-5 text-gray-800 font-medium hover:shadow-xl transition duration-300"
              >
                {project}
              </div>
            ))}
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-12">
          <Link href="/our-projects">
            <button className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg rounded-full shadow transition duration-300">
              Learn More →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
