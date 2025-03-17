"use client"
import React from "react";
import Link from "next/link";
import { useNavbar } from "../context/NavbarContext";
import { useState } from "react";
import Image from "next/image";

const Navbar = ({ logoUrl }: { logoUrl: string }) => {
  const navbar = useNavbar();
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Dynamic Logo */}
        <Link href="/">
          <Image
            src={logoUrl}
            alt="Logo"
            width={100}
            height={50}
          />
        </Link>
        
        {/* Navbar Items */}
        <ul className="flex space-x-6">
          {navbar.map((item) => (
            <li key={item.id} className="relative">
              {item.path ? (
                <Link href={item.path} className="hover:text-gray-400">
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={() =>
                    setDropdownOpen(dropdownOpen === item.id ? null : item.id)
                  }
                  className="hover:text-gray-400"
                >
                  {item.name}
                </button>
              )}
              
              {item.dropdown.length > 0 && dropdownOpen === item.id && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded w-40">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.id} className="p-2 hover:bg-gray-200">
                      <Link href={subItem.path}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
