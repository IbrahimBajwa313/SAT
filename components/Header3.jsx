import { useState } from "react";
import Link from "next/link";
import ListItem from "@/components/ListItem";
import Image from "next/image";

export default function Header() {
  const phoneNumber = "+923367000304";
  const message =
    "AsslamoAlikum! I am contacting you through SAT Site. I want to collaborate in Gaza Relief Activities. Please send the details and the account number.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isIconClicked2, setIsIconClicked2] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsIconClicked(!isIconClicked);
    setIsDropdownOpen2(false);
    setIsIconClicked2(false);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    setIsIconClicked2(!isIconClicked2);
    setIsDropdownOpen(false);
    setIsIconClicked(false);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const items2 = ["About", "SAT Main Site", "Gaza Activities"];
  const list2 = items2.map((item, index, url) => {
    return <ListItem key={index} itemName={item} url={url} />;
  });

  return (
    <header
      className={`z-50 bg-[#111] text-white flex flex-col px-6 py-6 shadow-2xl transition-all duration-900 ease-in-out ${
        isDropdownOpen || isDropdownOpen2 ? "max-h-[1000px]" : "max-h-[90px]"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href={"/"}>
            <div className="flex items-center space-x-4">
              <Image
                src="/shab-logo.png"
                alt="Save Gaza Campaign Logo"
                className="h-12 w-12"
                height={48}
                width={48}
              />
              <span className="text-1xl md:text-2xl font-bold hover:text-gray-500">
                Shab e Abitalib
              </span>
            </div>
          </Link>
        </div>

        <nav className="flex items-center space-x-8">
          {/* Navigation Links */}
          <span className="hidden md:flex items-center space-x-8">
            <Link href="/about">
              <span className="hover:text-green-500 cursor-pointer transition-colors duration-300">
                About
              </span>{" "}
            </Link>

            <Link href="/" target="_blank" rel="noopener noreferrer">
              <span className="hover:text-green-500 cursor-pointer transition-colors duration-300">
                SAT Activities
              </span>{" "}
            </Link>

            <Link
              href="/donation-transparency"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:text-green-500 cursor-pointer transition-colors duration-300">
                Donations Flowchart
              </span>
            </Link>
          </span>

          {/* Donate Button */}
          <Link href={whatsappLink} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <button className="hidden md:flex bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                Donate Now
              </button>
            </a>
          </Link>

          <span
            className={`mr-2 cursor-pointer flex md:hidden ${
              isIconClicked2
                ? "text-green-500 -rotate-90"
                : "text-white rotate-0"
            } hover:text-green-500 transition-all duration-300`}
            onClick={toggleDropdown2}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="5" width="18" height="2" fill="currentColor" />
              <rect x="7" y="11" width="14" height="2" fill="currentColor" />
              <rect x="11" y="17" width="10" height="2" fill="currentColor" />
            </svg>
          </span>
        </nav>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isDropdownOpen
            ? "max-h-40 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="mt-4 bg-[#222] p-4 rounded-xl">
          <p className="text-xl mb-2">Services</p>
          {/* {list1} */}
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isDropdownOpen2
            ? "max-h-70 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="mt-4 bg-[#222] p-4 rounded-xl">
          <p className="text-xl mb-2">Check</p>
          {list2}
          <div
            onClick={handleToggle}
            className="flex items-center cursor-pointer"
          ></div>
        </div>
      </div>
    </header>
  );
}
