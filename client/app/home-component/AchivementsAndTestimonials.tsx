"use client";


import { useAllPageData } from "@/context/pageContext/PageComponentContext";
import { useState, useEffect } from "react";

export default function AchievementsAndTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenWidth, setScreenWidth] = useState(1024); // Default to a large screen width
const {homeData}=useAllPageData()
const testimonialData=homeData?.Home?.Testimonial
const testimonials=testimonialData?.testimonials

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials?.length?(testimonials.length / 2):(0)));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials?.length]);

  return (
    <div>
      {/* Testimonial Section */}
      {testimonialData&&testimonials?(<div className="bg-[#253745] text-white py-20 px-4 md:px-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">{testimonialData?.heading}</h2>
        <div className="overflow-hidden flex justify-center">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {[...Array(Math.ceil(testimonials.length / 2))].map((_, index) => (
              <div key={index} className="flex space-x-6 w-full flex-shrink-0 justify-center">
                {testimonials&&testimonials.slice(index * 2, index * 2 + (screenWidth < 768 ? 1 : 2)).map((testimonial, i) => (
                  <div key={i} className="w-96 bg-white p-6 rounded-lg text-black shadow-lg flex flex-col items-center text-center">
                    <p className="text-gray-700 mt-2">{testimonial.feedback}</p>
                    <h3 className="text-lg font-bold mt-4">- {testimonial.name}</h3>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Slide Indicators */}
        <div className="flex space-x-2 mt-6 justify-center">
          {[...Array(Math.ceil(testimonials.length / 2))].map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-green-500' : 'bg-gray-300'}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>):(<div>Loading...</div>)}
    </div>
  );
}
