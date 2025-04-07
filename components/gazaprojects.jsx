import { Card, CardContent } from "@/components/ui/card";
import { FaHandsHelping, FaTshirt, FaHome, FaHeartbeat, FaChild, FaMoneyBillWave } from "react-icons/fa";

const flowSteps = [
  { icon: "🤲", text: "Your Contributions" },
  { icon: "💳", text: "SAT Accounts" },
  { icon: "💵", text: "Dollars Purchased" },
  { icon: "✈️", text: "Sent via Binance or other ways to our volunteers in Gaza" },
  { icon: "🧑‍🔧", text: "They perform the relief projects as per the need and plan" },
];

export default function Gazaprojects() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Join Us in Our Mission</h2>
<p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
  Discover our ongoing initiatives aimed at providing essential support and relief to the Gazans. Your involvement is crucial in helping us bring hope and resilience to the Gazans.
</p>


        {/* Transparent Usage Cards */}
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
        </div>
      </div>
    </section>
  );
}
