import { Card, CardContent } from "@/components/ui/card";
import { FaHandsHelping, FaTshirt, FaHome, FaHeartbeat, FaChild, FaMoneyBillWave } from "react-icons/fa";

const flowSteps = [
  { icon: "🤲", text: "Your Contributions" },
  { icon: "💳", text: "SAT Accounts" },
  { icon: "💵", text: "Dollars Purchased" },
  { icon: "✈️", text: "Sent via Binance or other ways to our volunteers in Gaza" },
  { icon: "🧑‍🔧", text: "They perform the relief projects as per the need and plan" },
];

export default function Transparency() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">100% Donation Transparency</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Every donation you make reaches Gaza directly via Binance, ensuring immediate support
          for food, medical aid, shelter, and more. Your contributions bring hope to those in need.
        </p>

        {/* Flowchart Representation */}
        <div className="mt-12">
          {/* Mobile View */}
          <div className="md:hidden flex flex-col items-center gap-6">
            {flowSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white shadow rounded-full flex items-center justify-center text-3xl">
                  {step.icon}
                </div>
                <p className="text-sm font-medium text-gray-700 mt-2 max-w-[200px]">{step.text}</p>
                {index !== flowSteps.length - 1 && <div className="text-2xl text-gray-400 mt-1">↓</div>}
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex items-center justify-center gap-8 mt-4">
            {flowSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center text-4xl">
                  {step.icon}
                </div>
                <p className="text-sm font-medium text-gray-700 mt-2 max-w-[160px]">{step.text}</p>
              </div>
            )).reduce((acc, el, idx) => {
              acc.push(el);
              if (idx !== flowSteps.length - 1) {
                acc.push(<div key={`arrow-${idx}`} className="text-2xl text-gray-400">➝</div>);
              }
              return acc;
            }, [])}
          </div>

          <p className="text-sm text-gray-500 mt-6 text-center max-w-xl mx-auto">
            * Your donations are directly transferred and utilized transparently.
          </p>
        </div>

        {/* Transparent Usage Cards
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 bg-white shadow-lg border border-gray-200 rounded-2xl">
            <FaHandsHelping className="text-5xl text-green-500 mx-auto mb-4" />
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-700">Food & Water Distribution</h3>
              <p className="text-gray-500 mt-2">Providing essentials like food & clean water to families in Gaza.</p>
            </CardContent>
          </Card>

          <Card className="p-6 bg-white shadow-lg border border-gray-200 rounded-2xl">
            <FaHeartbeat className="text-5xl text-red-500 mx-auto mb-4" />
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-700">Medical Assistance</h3>
              <p className="text-gray-500 mt-2">Supporting medical aid & emergency treatments.</p>
            </CardContent>
          </Card>

          <Card className="p-6 bg-white shadow-lg border border-gray-200 rounded-2xl">
            <FaHome className="text-5xl text-blue-500 mx-auto mb-4" />
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-700">Shelter & Housing</h3>
              <p className="text-gray-500 mt-2">Providing shelter to displaced families.</p>
            </CardContent>
          </Card>

          <Card className="p-6 bg-white shadow-lg border border-gray-200 rounded-2xl">
            <FaTshirt className="text-5xl text-indigo-500 mx-auto mb-4" />
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-700">Clothing & Essentials</h3>
              <p className="text-gray-500 mt-2">Distributing clothes and necessities.</p>
            </CardContent>
          </Card>

          <Card className="p-6 bg-white shadow-lg border border-gray-200 rounded-2xl">
            <FaChild className="text-5xl text-yellow-500 mx-auto mb-4" />
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-700">Toys for Children</h3>
              <p className="text-gray-500 mt-2">Bringing joy to kids with toys and gifts.</p>
            </CardContent>
          </Card>

          <Card className="p-6 bg-white shadow-lg border border-gray-200 rounded-2xl">
            <FaMoneyBillWave className="text-5xl text-emerald-500 mx-auto mb-4" />
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-700">Cash Distribution</h3>
              <p className="text-gray-500 mt-2">Directly distributing funds to families most in need.</p>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
}
