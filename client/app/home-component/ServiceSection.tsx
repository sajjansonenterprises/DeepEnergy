"use client";

import {
  
  FaCheck,
 
  
 
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAllPageData } from "@/context/pageContext/PageComponentContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCheck,faIndustry, faBullseye, faLightbulb, faPlay, faChargingStation, faSeedling, faRecycle, faWrench, faFaceSmile, } from "@fortawesome/free-solid-svg-icons";

// Icon Mapping
const iconMapping: Record<string, IconDefinition> = {
  check: faCheck,
  bullseye: faBullseye,
  lightbulb: faLightbulb,
  play: faPlay,
  industry:faIndustry,
  ChargingStation:faChargingStation,
  seedling:faSeedling,
  recycle:faRecycle,
  wrench:faWrench,
  faceSmile:faFaceSmile

};

export default function ServiceSection() {
  const router = useRouter();
  const {homeData}=useAllPageData()
  const serviceData=homeData?.Home?.Service
  const services=serviceData?.services


  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const totalSlides = services&&Math.ceil(services?.length / slidesPerView);

  useEffect(() => {
    const interval =totalSlides&& setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);
  return (
    <div>
    {serviceData?(<div className="text-center py-20 px-6 md:px-20 bg-gray-100">
      {/* Title and Heading */}
      <span className="text-green-500 text-sm uppercase font-bold">
        {serviceData.title}
      </span>
      <div className="flex justify-center">
        <h2 className="text-4xl w-full md:w-3/5 md:text-5xl font-bold text-black mt-4">
{serviceData.heading}        </h2>
      </div>

      {/* Slider Section */}
      <div className="mt-16 w-full flex flex-col items-center">
        <div className="overflow-hidden w-full max-w-5xl">
          <div
            className="flex w-full transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {[...Array(totalSlides)].map((_, index) => (
              <div
                key={index}
                className="flex justify-center gap-6 w-full flex-shrink-0"
              >
                {services&&services
                  .slice(
                    index * slidesPerView,
                    index * slidesPerView + slidesPerView
                  )
                  .map((service, i) => (
                    <div
                      key={i}
                      className="w-full  md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg text-black shadow-lg border-t-4 border-green-500 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
                    >
                     <div className="text-4xl">   <FontAwesomeIcon icon={iconMapping[service.iconFontAwesome]} className="text-green-500 " /></div>
                      <h3 className="text-xl font-bold mt-4">{service.heading}</h3>
                      <div className="border-b-2 border-gray-300 w-full my-4"></div>
                      <p className="text-gray-600">{service.Title}</p>
                      <ul className="text-left mt-4">
                       
                          <li
                           
                            className="flex items-center space-x-2 text-gray-700"
                          >
                            <FaCheck className="text-green-500" />
                            <span>{service.Advantages.a1}</span>
                          </li>
                          <li
                           
                            className="flex items-center space-x-2 text-gray-700"
                          >
                            <FaCheck className="text-green-500" />
                            <span>{service.Advantages.a2}</span>
                          </li>
                          <li
                           
                            className="flex items-center space-x-2 text-gray-700"
                          >
                            <FaCheck className="text-green-500" />
                            <span>{service.Advantages.a3}</span>
                          </li>
                      
                      </ul>
                      
                      <button
                        onClick={() => router.push(`/service-category/${service.service_category.slug}`)}  // Dynamically navigate to the service page using the slug
                        className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                      >
                  
                        Read More
                      </button>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
        {/* Slide Indicators */}
        <div className="flex space-x-2 mt-6">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-green-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>):(<div>loading...</div>)}</div>
  );
}
