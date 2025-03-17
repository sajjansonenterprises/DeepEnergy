"use client";

import { FaSearch, FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useNavbar } from "@/context/pagesetting/NavbarContext";

interface DropdownItem {
  id: number;
  name: string;
  path: string;
}
interface NavbarItem {
  id: number;
  name: string;
  dropdown: DropdownItem[];
  path: string ;
}


export default function Navbar() {
  const navbar = useNavbar();
  const [menuItems, setMenuItems] = useState<NavbarItem[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    setMenuItems(navbar);
    
  }, [navbar]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <nav
      className={`w-full bg-white shadow-md px-6 py-4 flex items-center justify-between border-b border-gray-300 transition-all duration-300 z-50
        ${isSticky ? "fixed top-0 left-0 animate-slideDown shadow-lg" : "relative"}`}
    >
      <div className="flex items-center space-x-6">
        <div className="text-5xl font-bold flex items-center">
          <span className="text-black">D</span>
          <span className="text-green-500">E</span>
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              {item.dropdown.length > 0 ? (
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center hover:text-green-500 focus:outline-none"
                >
                  {item.name} <FaChevronDown className="ml-1 text-gray-500 text-sm" />
                </button>
              ) : (
                <Link href={item.path} className="hover:text-green-500">
                  {item.name}
                </Link>
              )}
              {dropdownOpen === item.name && item.dropdown && (
                <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-40 text-gray-700 z-50">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.name} className="px-4 py-2 hover:bg-gray-100">
                      <Link href={subItem.path}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center space-x-5">
        <FaSearch className="hidden md:block text-gray-600 cursor-pointer hover:text-green-500" />
        <Link href="/quote" className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Request Quote
        </Link>
        <button className="md:hidden text-2xl text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-50">
          {menuItems.map((item) => (
            <div key={item.name} className="w-full text-center">
              {item.dropdown.length > 0 ? (
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center justify-center w-full hover:text-green-500 focus:outline-none"
                >
                  {item.name} <FaChevronDown className="ml-1 text-gray-500 text-sm" />
                </button>
              ) : (
                <Link href={item.path} className="hover:text-green-500">
                  {item.name}
                </Link>
              )}
              {dropdownOpen === item.name && item.dropdown && (
                <ul className="w-full bg-white shadow-md rounded-md text-gray-700">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.name} className="px-4 py-2 hover:bg-gray-100">
                      <Link href={subItem.path}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <Link href="/quote" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Request Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
