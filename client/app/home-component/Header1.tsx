"use client";

import { FaBolt, FaArrowRight, FaLeaf, FaSolarPanel, FaChevronLeft, FaChevronRight, FaIndustry } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAllPageData } from "@/context/pageContext/PageComponentContext";
import { usePageData } from "@/context/pageContext/PageContext";

interface slide {
  heading:string;
  title:string;
  ourMission:string;
  slidderImage:{
    alternativeText:string;
    url:string;
    formats:{large:{url:string}}}
}
export default function Header1() {
  const router =useRouter()
const {homeData}=useAllPageData()
const {serverurl}=usePageData()
const [currentSlide, setCurrentSlide] = useState(0);
const [slides, setSlides] = useState<slide[]>([]); // Replace 'any' with your specific type if available
useEffect(() => {
  setSlides(homeData?.Home?.Header || []);
}, [homeData]);



useEffect(() => {
  // Do nothing if slides is empty or undefined
  if (!slides || slides.length === 0) return;

  const interval = setInterval(() => {
    setCurrentSlide((prev) => {
      const nextSlide = (prev + 1) % slides.length;
      return nextSlide;
    });
  }, 5000);

  // Clear interval on unmount or slides change
  return () => clearInterval(interval);
}, [slides]); // Depend on the entire slides array

  return (
    <div className="relative w-full h-[650px] text-white overflow-hidden flex items-center justify-center px-4 md:px-10">
      {slides&&slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center text-center md:text-left transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${serverurl}${slide.slidderImage.url})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: "5rem 2rem" }}
        >
          {/* Left Section */}
          <div className="w-full md:w-3/6 flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <p className="text-4xl md:text-6xl font-bold">{slide.heading}</p>
            <p className="mt-4 md:mt-10 text-sm font-bold uppercase">{slide.title}</p>
            <div className="flex items-center justify-center md:justify-start space-x-4 mt-6 md:mt-10">
              <FaBolt className="text-2xl md:text-4xl" />
              <FaLeaf className="text-2xl md:text-4xl" />
              <FaSolarPanel className="text-3xl" />
              <button onClick={()=>router.push("/service")} className="bg-[#32c36c] px-4 py-3 md:px-4 md:py-5 text-sm md:text-1xl rounded-md text-white uppercase hover:bg-green-700">Our Services</button>
            </div>
          </div>
          
          {/* Right Section - Vertical Card */}
          <div className="w-[90%] md:w-[280px] h-[300px] bg-white p-6 md:p-10 rounded-lg border-t-4 border-[#32c36c] text-black flex flex-col items-center justify-center text-center mt-6 md:mt-0">
            <FaIndustry className="text-[#32c36c] text-5xl md:text-6xl mb-4" />
            <h3 className="text-lg font-bold">Our Mission</h3>
            <p className="text-sm px-2 md:px-4 mt-2">{slide.ourMission}</p>
            <div className="flex justify-center mt-4">
              <button onClick={()=>router.push("/about")} className="text-white px-2 py-2 bg-green-500 text-lg md:text-2xl hover:underline rounded-full"> <FaArrowRight/></button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide Buttons */}
      <button 
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl" 
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
      >
        <FaChevronLeft />
      </button>
      <button 
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl" 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
