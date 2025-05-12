"use client";

import { Mail, Phone, Handshake } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="bg-green-600 text-white text-sm px-4 py-2 w-full">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        {/* Email & Phone - Always Visible */}
        <div className="flex items-center space-x-4 text-xs sm:text-sm">
          <div className="flex items-center space-x-1">
            <Mail className="w-4 h-4" />
            <span>shabeabitalib@gmail.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <Phone className="w-4 h-4" />
            <span>+923367000304</span>
          </div>
        </div>

        {/* Collaboration Button - Hidden on Mobile */}
        <a
          href="https://wa.me/+923367000304?text=I want to collaborate in Gaza Relief Activities"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex bg-white text-green-600 font-semibold px-4 py-1 rounded items-center space-x-2 hover:bg-gray-100 transition"
        >
          <Handshake className="w-4 h-4" />
          <span>Collaboration</span>
        </a>
      </div>
    </div>
  );
}
