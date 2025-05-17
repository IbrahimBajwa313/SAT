import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white pt-14">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6 lg:px-12 pb-12 border-b border-gray-800">
        {/* Contact Info */}
        <div>
          <h3 className="text-[#2b9150] font-bold text-lg mb-4">Contact Us</h3>
          <div className="flex items-start mb-4">
            <i className="fa-solid fa-phone text-xl text-[#2b9150] mr-3"></i>
            <span className="text-gray-400">+923367000304</span>
          </div>
          <div className="flex items-start mb-4">
            <i className="fa-solid fa-envelope text-xl text-[#2b9150] mr-3"></i>
            <span className="text-gray-400">shabeabitalib@gmail.com</span>
          </div>
          <div className="flex items-start mb-4">
            <i className="fa-brands fa-whatsapp text-xl text-[#2b9150] mr-3"></i>
            <Link
              href="https://wa.me/923367000304"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              Chat with us on WhatsApp
            </Link>
          </div>
          <div className="flex items-center">
              <i className="fa-brands fa-whatsapp text-xl text-[#2b9150] mr-3"></i>
            <Link
              href="https://whatsapp.com/channel/0029Vai1YNrCcW4qqp6jLU1D"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              Join our WhatsApp Channel
            </Link>
          </div>
        </div>

        {/* Logo and Socials */}
        <div>
          <h1 className="text-2xl font-bold mb-4 flex items-center">
            <Image src="/shab-logo.png" width={32} height={32} alt="Logo" className="mr-3" />
            <span className="text-[#2b9150]">Shab Abitalib</span>
          </h1>
          <p className="text-gray-400 mb-4">Stand for Gaza & Unite for Ummah</p>
          <div className="flex space-x-5 mt-4">
            <Link href="https://www.facebook.com/Shabeabitalib/" target="_blank" className="text-2xl text-gray-400 hover:text-blue-600 transition">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link href="https://www.instagram.com/shabe_abi_talib_foundation/?hl=en" target="_blank" className="text-2xl text-gray-400 hover:text-pink-600 transition">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="https://whatsapp.com/channel/0029Vai1YNrCcW4qqp6jLU1D" target="_blank" className="text-2xl text-gray-400 hover:text-pink-600 transition">
               <i className="fa-brands fa-whatsapp  "></i>
            </Link>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-[#2b9150] font-bold text-lg mb-4">Useful Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/donate" className="hover:text-white">Donate Now</Link></li>
            <li><Link href="/GazaProjects" className="hover:text-white">Gaza Projects</Link></li>
            <li><Link href="/PakProjects" className="hover:text-white">Pakistan Projects</Link></li>
            <li><Link href="/martyrs" className="hover:text-white">Our Martyrs</Link></li>
          </ul>
        </div>

          {/* Subscribe */} 
        <div> 
          <h3 className="text-[#2b9150] font-bold text-lg mb-4">Subscribe</h3> 
          <p className="text-gray-400 mb-4">Don’t miss our latest updates. Subscribe below:</p> 
          <form className="flex flex-col sm:flex-row"> 
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full p-2 rounded-t sm:rounded-l sm:rounded-t-none bg-gray-700 text-white focus:outline-none" 
            /> 
            <button className="bg-[#2b9150] p-2 rounded-b sm:rounded-r sm:rounded-b-none hover:bg-[#650108] transition"> 
              <i className="fa fa-paper-plane"></i> 
            </button> 
          </form> 
        </div> 
      </div>  

      {/* Bottom Bar */}
      <div className="text-center text-gray-400 py-6 text-sm px-6">
        <p className="mb-3">
          &copy; 2025 <span className="text-[#2b9150] font-semibold">Shab Abitalib</span>. All rights reserved.
        </p>
        <div className="space-x-4">
          <Link href="#" className="hover:text-white">Home</Link>
          <Link href="#" className="hover:text-white">about</Link>
          <Link href="#" className="hover:text-white">donate</Link>
          <Link href="#" className="hover:text-white">PakProjects</Link>
          <Link href="#" className="hover:text-white">GazaProjects</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
