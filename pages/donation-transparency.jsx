import Heading from "@/components/Heading";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaHandsHelping,
  FaTshirt,
  FaHome,
  FaHeartbeat,
  FaChild,
  FaMoneyBillWave,
} from "react-icons/fa";

const flowSteps = [
  { icon: "🤲", text: "Your Contributions" },
  { icon: "💳", text: "SAT Accounts" },
  { icon: "💵", text: "Dollars Purchased" },
  { icon: "✈️", text: "Sent via Binance or other ways to our volunteers in Gaza" },
  { icon: "🧑‍🔧", text: "They perform the relief projects as per the need and plan" },
];

export default function DonationTransparencyPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gray-100">
    <div className="container mx-auto text-center px-4 py-8"> 
        <Heading
                text="Join Us in the Mission"
                className="text-black text-center mb-4 md:mb-16"
              />        
  
      {/* Flowchart Representation */}
      <div className="mt-12">
        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {flowSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white shadow rounded-full flex items-center justify-center text-3xl">
                {step.icon}
              </div>
              <p className="text-sm font-medium text-gray-700 mt-2 max-w-[200px]">
                {step.text}
              </p>
              {index !== flowSteps.length - 1 && (
                <div className="text-2xl text-gray-400 mt-1">↓</div>
              )}
            </div>
          ))}
        </div>
  
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-center gap-8 mt-4">
          {flowSteps
            .map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center text-4xl">
                  {step.icon}
                </div>
                <p className="text-sm font-medium text-gray-700 mt-2 max-w-[160px]">
                  {step.text}
                </p>
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
