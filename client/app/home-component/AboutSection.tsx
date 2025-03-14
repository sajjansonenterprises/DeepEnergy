"use client";

import { useRouter } from "next/navigation";
import { FaPlug, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useAllPageData } from "@/context/pageContext/PageComponentContext";
import { usePageData } from "@/context/pageContext/PageContext";




export default function AboutSection() {
  const router = useRouter();
  const { homeData } = useAllPageData();
  const {serverurl}=usePageData()
  // Initialize state as about or null, not about | object
  const aboutData = homeData?.Home?.About 



  return (
    <div>
      {aboutData ? (
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16">
          {/* Left Section - Image with Card */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <Image
              src={`${serverurl}${aboutData.image.formats.large.url}`}
              alt={aboutData.image.alternativeText}
              width={1000}
              height={1000}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-10 left-4 md:left-[-5%] w-3/4 md:w-1/4 bg-green-500 p-6 rounded-lg shadow-lg flex items-center">
              <FaPlug className="text-white text-6xl mr-4" />
              <div>
                <p className="text-3xl text-white font-bold">{aboutData.happyClient}+</p>
                <p className="text-white">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Section - About Content */}
          <div className="w-full md:w-1/2 md:pl-10 mt-10 md:mt-0 text-center md:text-left">
            <span className="bg-[#e0f6e9] text-green-500 px-4 py-2 text-sm uppercase font-bold">
              {aboutData.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-4">
              {aboutData.heading}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold">Who We Are</h3>
                <p className="text-gray-600 mt-2">
                 {aboutData.whoWeAre}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Our Mission</h3>
                <p className="text-gray-600 mt-2">
                {aboutData.ourMission}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Our Vision</h3>
                <p className="text-gray-600 mt-2">
                  {aboutData.ourVission}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Why Choose Us</h3>
                <p className="text-gray-600 mt-2">
                  {aboutData.whyChooseUs}
                </p>
              </div>
            </div>

            <button
              onClick={() => router.push(aboutData.readMoreUrl)}
              className="mt-6 flex items-center justify-center md:justify-start bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600"
            >
              Read More <FaArrowRight className="ml-3" />
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
