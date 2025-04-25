"use client";

import { Mail, Phone, Handshake } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="bg-green-600 text-white text-sm px-8 py-2 w-full">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        {/* Left Side - Email & Phone */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>shabeabitalib@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>Contact Us: +923367000304</span>
          </div>
        </div>

        {/* Right Side - WhatsApp CTA */}
        <a
          href="https://wa.me/+923367000304?text=I want to collaborate in Gaza Relief Activities"
          target="_blank"
          className="bg-white text-green-600 font-semibold px-4 py-1 rounded flex items-center space-x-2 hover:bg-gray-100 transition"
        >
          <Handshake className="w-4 h-4" />
          <span>Collaboration</span>
        </a>
      </div>
    </div>
  );
}
