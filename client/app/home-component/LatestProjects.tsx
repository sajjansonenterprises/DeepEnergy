"use client";

import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAllPageData } from "@/context/pageContext/PageComponentContext";
import { usePageData } from "@/context/pageContext/PageContext";
export default function LatestProjects() {
  const { homeData } = useAllPageData();
  const projectData=homeData?.Home?.Project
  const projects=projectData?.projects
  
  const limitedProjects = projects?.slice(0, 6) || []; // ✅ Limit to 6 projects
const router=useRouter()
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

  const totalSlides = Math.ceil(limitedProjects.length / slidesPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div>{
    projectData&&projectData.projects?(<div className="text-center py-20 px-6 md:px-20 bg-gray-100">
      {/* Title and Heading */}
      <span className="text-green-500 text-sm uppercase font-bold">
        {projectData.title}
      </span>
      <div className="flex justify-center">
        <h2 className="text-4xl w-full md:w-3/5 md:text-5xl font-bold text-black mt-4">
          {projectData.heading}
        </h2>
      </div>

      {/* Slider Section */}
      <div className="mt-16 flex flex-col items-center">
        <div className="overflow-hidden w-full max-w-5xl">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {[...Array(totalSlides)].map((_, index) => (
              <div
                key={index}
                className="flex justify-center gap-6 w-full flex-shrink-0"
              >
                {limitedProjects
                  .slice(index * slidesPerView, index * slidesPerView + slidesPerView)
                  .map((project, i) => (
                    <div
                      key={i}
                      className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg text-black shadow-lg border-t-4 border-green-500 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
                    >
                      {/* Project Image */}
                    
  <Image
    src={`${project.image.formats.large.url}`}
    alt={project?.image?.alternativeText  || "Project Image"}
    height={1000}
    width={1000}
    className="w-full h-40 object-cover rounded-md"
  />

                      {/* Project Info */}
                      <span className="text-green-500 font-semibold mt-4">
                        {project.title}
                      </span>
                      <h3 className="text-xl font-bold mt-2">{project.heading}</h3>
                      <p className="text-gray-600 mt-2">{project.description}</p>
                      <button onClick={()=>router.push(`project/${project.slug}`)} className="mt-4 flex items-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                        Explore More <FaArrowRight className="ml-2" />
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
    </div>):(<div>Loading...</div>)}</div>
  );
}
