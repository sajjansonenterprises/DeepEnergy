"use client";

import { useState, useEffect } from "react";
import { FaBolt } from "react-icons/fa";
import Image from "next/image";
import { usePageData } from "@/context/pageContext/PageContext";
interface Testimonial{
  testimonials:{
   feedback:string
   profilePic:{url:string}
  }[];
  Heading:string;
  title:string;
  ExpYear:string;
  image:{formats:{medium:{url:string}}}
}
export default function ExperienceTestimonials() {
  const { serverurl } = usePageData();
  const [testimonialsData, setTestimonialsData] = useState< Testimonial | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [error, setError] = useState("");

  // ✅ Fetch Experience & Testimonials Data
  useEffect(() => {
    fetch(`${serverurl}/api/service-page?populate[ExperienceAndTestimonial][populate][testimonials][populate]=*&populate[ExperienceAndTestimonial][populate][image][populate]=*`)
      .then((res) => res.json())
      .then((data) => setTestimonialsData(data?.data?.ExperienceAndTestimonial))
      .catch((err) => {
        console.error("Error fetching experience & testimonials:", err);
        setError("Failed to load testimonials.");
      });
  }, [serverurl]);

  // ✅ Auto-Slide Effect for Testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonialsData?.testimonials?.length) {
        setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.testimonials.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialsData]);

  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-16">
      {/* Left Side - Experience Image Section */}
      <div className="relative w-full md:w-1/2 flex flex-col items-center">
        {/* Image Container */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-gray-300 shadow-lg flex items-center justify-center">
          {testimonialsData?.image?.formats?.medium?.url ? (
            <Image
              src={`${testimonialsData.image.formats.medium.url}`}
              fill
              alt="Biomass Energy"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center">No Image</div>
          )}

          {/* Energy Logo in Middle */}
          <div className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-10 rounded-full">
            <FaBolt className="text-white text-4xl" />
          </div>
        </div>

        {/* Experience Years */}
        <div className="bg-green-500 text-white px-4 py-2 rounded-md text-lg font-bold shadow-lg mt-4">
          {testimonialsData?.ExpYear || "10"}
        </div>

        {/* Caption */}
        <p className="text-lg text-center font-semibold mt-4">
          {testimonialsData?.title || "Years Of Experience In The Biomass Industry"}
        </p>
      </div>

      {/* Right Side - Testimonials Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-500">
          {testimonialsData?.Heading || "What Our Clients Say"}
        </h2>

        {/* Testimonials Text */}
        {testimonialsData?.testimonials?.length ? (
          <>
            <p className="text-gray-600 mt-6 text-lg italic">
              {testimonialsData.testimonials[currentTestimonial]?.feedback}
            </p>

            {/* Bottom: Active Testimonial Highlight */}
            <div className="flex justify-center md:justify-start mt-6 space-x-6">
              {testimonialsData.testimonials.map((testimonial: {profilePic:{url:string}}, index: number) => (
                <div key={index} className="relative">
                  <div
                    className={`w-16 h-16 flex items-center justify-center rounded-full border-2 transition-all duration-300 shadow-md cursor-pointer ${
                      index === currentTestimonial ? "border-green-500 scale-110" : "border-gray-300 opacity-50"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  >
                    <span className="text-sm font-semibold">{testimonial?.profilePic?.url?(<Image   src={`${testimonial?.profilePic?.url}`}
              fill
              alt="Biomass Energy"
              className="w-full h-full object-cover rounded-full"/>):(null)}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-600 mt-6">No testimonials available.</p>
        )}
      </div>
    </div>
  );
}
