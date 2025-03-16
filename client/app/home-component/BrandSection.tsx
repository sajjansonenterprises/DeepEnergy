"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useAllPageData } from "@/context/pageContext/PageComponentContext";
import { usePageData } from "@/context/pageContext/PageContext";
export default function BrandSection() {
 const {homeData}=useAllPageData()
 const brandData=homeData?.Home?.Brand
 const brands=brandData?.brand_collabs||[]
 

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(brands.length / 6);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div>
    {brandData && brands ? (
      <div className="bg-gray-100 py-10 px-6 md:px-20 text-center">
        <div className="overflow-hidden w-full max-w-6xl mx-auto">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {[...Array(totalSlides)].map((_, index) => (
              <div key={index} className="flex justify-center space-x-10 w-full flex-shrink-0">
                {brands &&
                  brands.slice(index * 6, index * 6 + 6)?.map((logo, i) => {
                    const imageUrl =
                      logo?.image?.formats?.small?.url ||
              
                      "/placeholder-image.jpg"; // Fallback image
  
                    return (
                      <Image
                        key={i}
                        src={`${imageUrl}`}
                        alt={logo?.image?.alternativeText || "Brand logo"}
                        width={1000}
                        height={1000}
                        className="w-24 h-24 object-contain"
                      />
                    );
                  })}
              </div>
            ))}
          </div>
        </div>
      </div>
    ) : (
      <div>Loading..</div>
    )}
  </div>
  
  );
}
