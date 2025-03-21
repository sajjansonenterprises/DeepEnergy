"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavbar } from "@/context/pagesetting/NavbarContext";
import SearchBar from "../search/components/Search/SearchBar";

interface DropdownItem {
  id: number;
  name: string;
  path: string;
}

interface NavbarItem {
  id: number;
  name: string;
  dropdown: DropdownItem[];
  path: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const navbar = useNavbar();

  const [menuItems, setMenuItems] = useState<NavbarItem[]>([]);
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logo, setLogo] = useState<string | null>(
    "https://deepenergy.onrender.com/uploads/Screenshot_2025_03_14_at_1_13_51_PM_932a699e2f.png"
  );
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  


  useEffect(() => {
    const fetchLogo = async () => {
      try {
        setLogo(`${navbar?.logo?.url}`);
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };

    if (navbar?.logo) fetchLogo();
  }, [navbar?.logo]);

  useEffect(() => {
    if (navbar?.Navbar) setMenuItems(navbar?.Navbar);
  }, [navbar?.Navbar]);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menuName: string) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav
      className={`w-full bg-white transition-all duration-300 z-50 ${
        isSticky ? "fixed top-0 shadow-lg" : "relative border-b border-gray-100"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            onClick={closeAllMenus}
          >
            <div className="relative h-12 w-20">
              <Image
                src={
                  logo ||
                  "https://deepenergy.onrender.com/uploads/Screenshot_2025_03_14_at_1_13_51_PM_932a699e2f.png"
                }
                alt={"deep energy"}
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="flex items-center space-x-2">
            {menuItems.map((item) => (
          <div key={item.id} className="relative">
            {item.dropdown.length > 0 ? (
              <>
                {/* Button to Toggle Dropdown */}
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`px-3 py-2 rounded-md transition-colors   rounded-lg  text-center inline-flex items-center ${
                  pathname === item.path
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600"
                }`}
                >
                  {item.name}
                  <svg
                    className={`w-2.5 h-2.5 ms-3 transform transition-transform ${
                      openDropdown === item.name ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu - Shows When Open */}
                {openDropdown === item.name && (
                  <div className="absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                    <ul className="py-2 text-sm text-gray-700">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            href={subItem.path}
                            className={`block px-4 py-2 hover:bg-gray-100 ${
                  pathname === item.path
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600"
                }`}
                            onClick={closeAllMenus}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.path}
                className={`px-3 py-2 rounded-md transition-colors ${
                  pathname === item.path
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600"
                }`}
                onClick={closeAllMenus}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>

            {/* Search and CTA */}
            <div className="flex items-center space-x-4 ml-6">
              <SearchBar />
              <Link
                href="/quote"
                className="w-30 text-center bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                onClick={closeAllMenus}
              >
                Quote
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-600 hover:text-green-600 p-2 rounded-md"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <div key={item.id} className="border-b border-gray-100 pb-2">
                {item.dropdown.length > 0 ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-green-600"
                    >
                      {item.name}
                      <svg
                        className={`transform transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={subItem.path}
                            className="block px-3 py-2 text-gray-600 hover:text-green-600"
                            onClick={closeAllMenus}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="block px-3 py-2 text-gray-700 hover:text-green-600"
                    onClick={closeAllMenus}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-4">
              <SearchBar />
              <Link
                href="/quote"
                className="block w-full text-center bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                onClick={closeAllMenus}
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
