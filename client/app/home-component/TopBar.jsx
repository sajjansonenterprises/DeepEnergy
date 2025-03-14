"use client";
import { FaLinkedin, FaTwitter, FaFacebook, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { useState } from "react";

export default function TopBar() {
    const [language, setLanguage] = useState("EN");

    return (
        <div className="hidden md:flex bg-[#2b3e4b] text-white text-sm py-2 px-4 flex-col md:flex-row justify-between items-center md:block ">
            {/* Left Section */}
            <div className="flex flex-wrap justify-center md:justify-start items-center space-x-6 text-center md:text-left">
                <span className="flex items-center"><FaPhone className="text-green-500 "/> <div className="ps-2">+91 9999665619</div> </span>
                <span className="flex items-center"><FaEnvelope className="text-green-500 "/> <div className="ps-2">India.deepenterprises@gmail.com</div></span>
                <span className="flex items-center">< FaClock className="text-green-500 "/> <div className="ps-2">Mon-Sat 8AM - 7PM</div> </span>
            </div>

            {/* Right Section */}
            <div className="flex flex-wrap justify-center md:justify-end items-center space-x-4 mt-2 md:mt-0">
                <a href="#" className="bg-green-500 p-2 text-black rounded-full hover:text-blue-400"><FaLinkedin /></a>
                <a href="#" className="bg-green-500 p-2 text-black rounded-full hover:text-blue-400"><FaTwitter /></a>
                <a href="#" className="bg-green-500 p-2 text-black rounded-full hover:text-blue-400"><FaFacebook /></a>
                <a href="#" className="hover:underline">Careers</a>
                <a href="#" className="hover:underline">FAQs</a>
                <div className="relative">
                    <select
                        className="bg-[#2b3e4b] border border-white rounded px-2 py-1 pl-2 appearance-none"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="EN">	&#x1f1fa;&#x1f1f8; ENGLISH</option>
                        {/* <option value="HI">🇮🇳 HINDI</option> */}
                    </select>
                </div>
            </div>
        </div>
    );
}
