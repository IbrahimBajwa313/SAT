import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const phoneNumber = "+923367000304";
  const message =
    "AsslamoAlikum! I am contacting you through SAT Site. I want to collaborate in Gaza Relief Activities. Please send the details and the account number.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white px-6 py-4 w-full shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <Image src="/shab-logo.png" alt="SAT Logo" width={48} height={48} />
          <span className="font-bold text-xl md:text-2xl text-[#004aad] tracking-wide">
            Save Gaza Campaign
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-end items-center gap-3 text-sm md:text-base font-medium">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Our Work", href: "/our-work" },
            { label: "Take Action", href: "/take-action" },
            { label: "Media", href: "/media" },
            { label: "International", href: "/international" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-[#004aad] transition duration-200 px-2 py-1 rounded hover:bg-gray-100"
            >
              {link.label}
            </Link>
          ))}

          {/* CTA Buttons */}
          <Link href={whatsappLink} target="_blank">
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 shadow-sm transition duration-200">
              ❤️ Donate Now
            </button>
          </Link>
          <Link href="/give-zakat">
            <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-black shadow-sm transition duration-200">
                Give Zakat
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
}
