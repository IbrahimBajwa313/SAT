import { FaHandHoldingHeart, FaUniversity, FaDollarSign, FaPlaneDeparture, FaTools } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

const flowSteps = [
  { icon: <FaHandHoldingHeart className="text-green-600" />, text: "Your Contributions" },
  { icon: <FaUniversity className="text-blue-600" />, text: "SAT Accounts" },
  { icon: <FaDollarSign className="text-yellow-500" />, text: "Dollars Purchased" },
  { icon: <FaPlaneDeparture className="text-purple-600" />, text: "Sent to Gaza volunteers" },
  { icon: <FaTools className="text-red-500" />, text: "Volunteers carry out relief projects in Gaza" },
];

export default function Transparency() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">100% Donation Transparency</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Every donation you make reaches Gaza directly via Binance, ensuring immediate support for food, medical aid,
          shelter, and more. Your contributions bring hope to those in need.
        </p>

        {/* Flowchart Representation */}
        <div className="mt-12">
          {/* Mobile View */}
          <div className="md:hidden flex flex-col items-center gap-6">
            {flowSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white shadow rounded-full flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                <p className="text-sm font-medium text-gray-700 mt-2 max-w-[200px]">{step.text}</p>
                {index !== flowSteps.length - 1 && <div className="text-2xl text-gray-400 mt-1">↓</div>}
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex items-center justify-center gap-10 mt-4">
            {flowSteps
              .map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center text-3xl">
                    {step.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-700 mt-2 max-w-[160px] text-center">{step.text}</p>
                </div>
              ))
              .reduce((acc, el, idx) => {
                acc.push(el);
                if (idx !== flowSteps.length - 1) {
                  acc.push(
                    <div key={`arrow-${idx}`} className="text-2xl text-gray-400">
                      ➝
                    </div>
                  );
                }
                return acc;
              }, [])}
          </div>

          <p className="text-sm text-gray-500 mt-6 text-center max-w-xl mx-auto">
            * Your donations are directly transferred and utilized transparently.
          </p>
        </div>
      </div>
    </section>
  );
}
