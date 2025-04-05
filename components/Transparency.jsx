import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FaHandsHelping, FaTshirt, FaHome, FaHeartbeat, FaChild,FaMoneyBillWave } from "react-icons/fa";

export default function DonationTransparency() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">100% Donation Transparency</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Every donation you make reaches Gaza directly via Binance, ensuring immediate support
          for food, medical aid, shelter, and more. Your contributions bring hope to those in need.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          {/* Card: Cash Distribution */}
          <Card className="p-6 bg-white shadow-lg border border-gray-200 rounded-2xl">
            <FaMoneyBillWave className="text-5xl text-emerald-500 mx-auto mb-4" />
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-700">Cash Distribution</h3>
              <p className="text-gray-500 mt-2">Directly distributing funds to families most in need.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Image
            src="/DonationFlowchart.png"
            width={800}
            height={400}
            alt="Donation Process"
            className="mx-auto rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-4">* Your donations are directly transferred and utilized transparently.</p>
        </div>
      </div>
    </section>
  );
}
