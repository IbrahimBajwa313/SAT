// app/martyrs/page.tsx
import Wrapper from "../components/Wrapper";
import Image from "next/image";

export default function MartyrsPage() {
  return (
    <main className="py-4">
      <Wrapper>

      
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="font-extrabold text-2xl lg:text-4xl text-gray-800">
            In Memory of Our Martyr
          </h2>
          <p className="text-gray-700 mt-4 text-base lg:text-lg max-w-3xl mx-auto">
            A tribute to the courage and sacrifice of{" "}
            <strong className="text-red-500">Muhammad Roman Sajid</strong>, whose
            ultimate sacrifice fueled our mission for justice and peace for Palestinians.
          </p>
        </div>

        {/* Profile Block */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-3xl overflow-hidden transition-transform hover:scale-105 duration-300">
          {/* Image */}
          <div className="w-full md:w-1/3">
            <Image
              src="/Roman.png"
              alt="Muhammad Roman Sajid"
              layout="responsive"
              width={400}
              height={400}
              className="object-cover h-auto w-full"
            />
          </div>

          {/* Description */}
          <div className="p-6 md:p-8 flex flex-col justify-center md:w-2/3 text-center md:text-left">
            <h3 className="font-bold text-xl lg:text-2xl mb-4 text-green-600">
              Muhammad Roman Sajid
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm lg:text-base">
              Muhammad Roman Sajid was a brave soul who stood for the cause with
              unwavering courage. On May 20th, 2024, at 3:00 AM, during a peaceful
              protest at D-Chowk, Islamabad, he, along with another protestor, was
              murdered in cold blood when a car ruthlessly and intentionally ran
              over the protesters. His life was taken while he was peacefully
              standing for the rights of Gaza. His sacrifice has become a beacon
              of hope, a symbol of unwavering dedication, and a powerful call for
              justice.
            </p>
            <p className="text-gray-600 italic text-sm lg:text-base">
              &ldquo;From the river to the sea, Palestine will be free.&rdquo;
            </p>
          </div>
        </div>
      </div>
      </Wrapper>
    </main>
  );
}
