"use client";

import { useFooter } from "@/context/pagesetting/FooterContext";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const footerData = useFooter();

 

  // Ensure footerData exists and has required properties
  if (!footerData || !footerData.sections) return <div>Loading footer...</div>;

  return (
    <footer className="bg-[#1a2a36] text-white py-10 px-6 md:px-20">
      {/* First Section */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Side - Links */}
        <div className="flex flex-wrap md:flex-nowrap w-full md:w-2/4 justify-between">
          {footerData.sections.length > 0 &&
            footerData.sections.map(
              (section: { title: string; links: { label: string; url: string }[] }, index: number) => (
                <div key={index}>
                  <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                  <ul className="space-y-2 text-gray-300">
                    {section.links?.map((link: { label: string; url: string }, i: number) => (
                      <li key={i}>
                        <a href={link.url || "#"} className="hover:text-green-500">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
        </div>

        {/* Right Side - Contact & Map */}
        {footerData.contact && (
          <div className="w-full md:w-1/3 mt-10 md:mt-0">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 py-1">📍 {footerData.contact?.address || "N/A"}</p>
            <p className="text-gray-300 py-1">✉️ {footerData.contact?.email || "N/A"}</p>
            <p className="text-gray-300 py-1">📞 {footerData.contact?.phone || "N/A"}</p>

            {footerData.contact?.mapEmbedUrl && (
              <div className="mt-4">
                <iframe
                  className="w-full h-40 rounded-lg"
                  src={footerData.contact.mapEmbedUrl}
                  loading="lazy"
                ></iframe>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Second Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        <p className="text-gray-400">{footerData.copyright || "© 2024 All Rights Reserved."}</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href={footerData.socials?.twitter || "#"} className="text-gray-400 hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
          <a href={footerData.socials?.facebook || "#"} className="text-gray-400 hover:text-blue-600">
            <FaFacebook size={20} />
          </a>
          <a href={footerData.socials?.linkedin || "#"} className="text-gray-400 hover:text-blue-500">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
