import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phoneNumber = "+923367000304";
  const message =
    "AsslamoAlikum! I am contacting you through SAT Site. I want to collaborate in Gaza Relief Activities. Please send the details and the account number.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Pak Projects", href: "/our-work" },
    { label: "Gaza Projects", href: "/take-action" },
    { label: "Our Martyrs", href: "/media" },
    { label: "Take Action", href: "/international" },
  ];

  return (
    <div className="bg-white px-8 py-4 w-full shadow-md border-b border-gray-100">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <Image src="/shab-logo.png" alt="SAT Logo" width={48} height={48} />
          <span className="font-bold text-xl md:text-2xl text-[#004aad] tracking-wide">
            Shab e Abitalib
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm md:text-base font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-[#004aad] transition duration-200 px-2 py-1 rounded hover:bg-gray-100"
            >
              {link.label}
            </Link>
          ))}
          <Link href={whatsappLink} target="_blank">
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 shadow-sm transition duration-200">
              Donate Now
            </button>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 px-2 font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-[#004aad] transition duration-200 px-3 py-2 rounded hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href={whatsappLink} target="_blank" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 shadow-sm transition duration-200 w-full">
              Donate Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
