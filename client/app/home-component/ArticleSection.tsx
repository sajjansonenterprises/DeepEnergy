"use client";

import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAllPageData } from "@/context/pageContext/PageComponentContext";
import { usePageData } from "@/context/pageContext/PageContext";


export default function ArticleSection() {
 const {homeData}=useAllPageData()
 const articleData=homeData?.Home?.Article
 const blogs=articleData?.blogs ||[]
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [slidesPerView, setSlidesPerView] = useState<number>(3);

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

  const totalSlides = Math.ceil(blogs?.length / slidesPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="text-center py-20 px-6 md:px-20 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">{articleData?.heading}</h2>

      {articleData&&blogs&&blogs ? (<div className="mt-8 flex flex-col items-center">
          <div className="overflow-hidden w-full max-w-5xl">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {[...Array(totalSlides)].map((_, index) => (
                <div key={index} className="flex justify-center gap-6 w-full flex-shrink-0">
                  {blogs
                    .slice(index * slidesPerView, index * slidesPerView + slidesPerView)
                    .map((blog,index) => (
                      <div
                        key={index}
                        className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg text-black shadow-lg flex flex-col hover:shadow-xl transition-all duration-300 relative"
                      >
                        {/* Category Tag */}
                        {blog.categoryName?.categoryName && (
                          <span className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-md text-xs">
                            {blog.categoryName.categoryName}
                          </span>
                        )}

                        {/* Date & Author */}
                        <div className="flex mt-2 justify-between text-gray-500 text-sm mb-2">
                          <span>{new Date(blog.createdAt).toDateString()}</span>
                          <span>by {blog.author || "Admin"}</span>
                        </div>

                        {/* Blog Title */}
                        <h3 className="text-lg font-bold mb-2">{blog.title}</h3>

                        {/* Blog Image */}
                    
                            <Image
                            key={index}
                              src={`${blog.image.formats.large.url}`}
                              alt={blog.image.alternativeText}
                              width={500}
                              height={375}
                              className="w-full h-40 object-cover rounded-md"
                            />
                     
                        {/* Blog Description */}
                        <p className="text-gray-600 mb-4">{blog.description.slice(0, 100)}...</p>

                        {/* Read More Button */}
                        <button
                          onClick={() => router.push(`/blog/${blog.slug}`)}
                          className="mt-auto flex items-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                        >
                          Read More <FaArrowRight className="ml-2" />
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
                className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-green-500" : "bg-gray-300"}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      )  : (
        <p className="text-xl mt-10">Loading blogs...</p>

      )}
    </div>
  );
}
