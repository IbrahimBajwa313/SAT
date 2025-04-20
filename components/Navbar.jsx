import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const phoneNumber = "+923367000304";
  const message =
    "AsslamoAlikum! I am contacting you through SAT Site. I want to collaborate in Gaza Relief Activities. Please send the details and the account number.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white px-6 py-4 flex flex-col md:flex-row justify-between items-center text-black w-full shadow">
      <div className="flex items-center space-x-3">
        <Image src="/shab-logo.png" alt="SAT Logo" width={48} height={48} />
        <span className="font-bold text-lg md:text-xl text-[#004aad]">Save Gaza Campaign</span>
      </div>

      <nav className="flex flex-wrap justify-center md:justify-end gap-4 mt-4 md:mt-0 text-sm md:text-base">
        <Link href="/appeals" className="hover:text-[#004aad] transition">Appeals</Link>
        <Link href="/islamic-giving" className="hover:text-[#004aad] transition">Islamic Giving</Link>
        <Link href="/our-work" className="hover:text-[#004aad] transition">Our Work</Link>
        <Link href="/take-action" className="hover:text-[#004aad] transition">Take Action</Link>
        <Link href="/media" className="hover:text-[#004aad] transition">Media</Link>
        <Link href="/international" className="hover:text-[#004aad] transition">International</Link>

        <Link href={whatsappLink} target="_blank">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Donate Now</button>
        </Link>
        <Link href="/give-zakat">
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">Give Zakat</button>
        </Link>
      </nav>
    </div>
  );
}
