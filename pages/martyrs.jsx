// app/martyrs/page.tsx
import Alaa from "@/components/Alaa";
import Wrapper from "../components/Wrapper";
import Image from "next/image";

export default function MartyrsPage() {
  const profiles = [
    {
      name: "Muhammad Roman Sajid",
      img: "/Roman.png",
      description:
        "Muhammad Roman Sajid was a brave soul who stood for the cause with unwavering courage. On May 20th, 2024, at 3:00 AM, during a peaceful protest at D-Chowk, Islamabad, he, along with another protestor, was murdered in cold blood when a car ruthlessly and intentionally ran over the protesters. His life was taken while he was peacefully standing for the rights of Gaza. His sacrifice has become a beacon of hope, a symbol of unwavering dedication, and a powerful call for justice.",
      quote: "From the river to the sea, Palestine will be free.",
    },
  ];
  return (
    <main className="py-4 bg-white">
      <Alaa />
      
    </main>
  );
}
