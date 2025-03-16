"use client"
import { FaHome, FaCheck, FaBullseye, FaRegLightbulb, FaPlay } from "react-icons/fa";
import Navbar from "../home-component/Navbar";

import Image from "next/image";
import { usePageData } from "@/context/pageContext/PageContext";
import { Metadata } from "next";
import Footer from "../ucomponent/Footer";
import Preloader from "../ucomponent/Preloader";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "About"
 
};
export default function AboutComponent() {

 const {aboutData}=usePageData()
const router=useRouter()



  
  return (
   <>{aboutData&&aboutData?.breadcrumb?.bg_image?.url?( <div>

      
      <Navbar />

      {/* Breadcrumb Section */}
      <div
        className="relative w-full h-[650px] bg-cover bg-center flex items-center px-6 text-center md:text-left md:justify-start"
        style={{
          backgroundImage: `url(${aboutData?.breadcrumb?.bg_image?.url })`,
          backgroundColor: "rgb(27 26 26 / 20%)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute top-5 left-5 text-white text-sm flex items-center">
          <FaHome className="mr-2" />
          <button onClick={()=>router.push("/")} className="hover:underline">Home</button>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{aboutData?.breadcrumb?.pageTitle || "About Us"}</span>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className=" bg-opacity-50 p-6 md:p-10 rounded-lg text-white flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl font-bold">{aboutData?.breadcrumb?.pageTitle || "About Us"}</h1>
            <p className="mt-4 text-lg max-w-2xl">{aboutData?.breadcrumb?.description || "Default description."}</p>
            <div className="flex mt-6 space-x-4">
              <button onClick={()=>router.push(`${aboutData?.breadcrumb?.button?.url}`)} className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600">
                {aboutData?.breadcrumb?.button?.label || "Our Services"}
              </button>
              <button onClick={()=>router.push(`${aboutData?.breadcrumb?.videoButton?.url}`)} className="flex items-center bg-white text-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200">
                <FaPlay className="mr-2" /> {aboutData?.breadcrumb?.videoButton?.label || "Watch Video"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-black">{aboutData?.breadcrumb?.whoWeAreTitle || "Who We Are"}</h2>
          <p className="text-gray-600 mt-4">{aboutData?.breadcrumb?.whoWeAreDescription || "Default about us content."}</p>
        </div>
        <div className="md:w-1/2">
        
       {aboutData?.breadcrumb?.whoWeAreImage&& aboutData?.breadcrumb?.whoWeAreImage?(   <Image
            src={`${aboutData?.breadcrumb?.whoWeAreImage?.formats?.large?.url}` || "https://via.placeholder.com/1200"}
            className="rounded-lg shadow-lg w-full"
            width={1000}
            height={100}
            alt={`${aboutData?.breadcrumb?.whoWeAreImage?.alternativeText}`}
          />):(null)}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-black">Our Mission & Vision</h2>
        <div className="mt-10 flex flex-col md:flex-row gap-10">
          {aboutData?.missionVision?.map((item: { title: string; description: string }, index: number) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg flex-1 flex flex-col items-center">
              {index === 0 ? <FaBullseye className="text-green-500 text-5xl" /> : <FaRegLightbulb className="text-green-500 text-5xl" />}
              <h3 className="text-xl font-bold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-black">{aboutData?.whyChooseUsTitle || "Why Choose Us?"}</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {aboutData?.whyChooseUs?.map((item: { title: string; description: string }, index: number) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
              <FaCheck className="text-green-500 text-5xl" />
              <h3 className="text-xl font-bold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      {aboutData?.videoUrl && (
        <section className="bg-gray-100 py-20 px-6 md:px-20 text-center">
          <h2 className="text-4xl font-bold text-black">{aboutData?.videoTitle || "Watch Our Process"}</h2>
          <div className="mt-10 flex justify-center">
            <iframe
              className="w-full md:w-3/4 h-64 md:h-96 rounded-lg shadow-lg"
              src={aboutData.videoUrl}
              title="Deep Enterprises Video"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-20 bg-green-500 text-white text-center">
        <h2 className="text-3xl font-bold">{aboutData?.ctaTitle || "Let's Build the Future Together"}</h2>
        <p className="mt-4 mb-6">{aboutData?.ctaDescription || "Contact us today for customized solutions."}</p>
        <button
        onClick={()=>router.push(`contact`)}
          className="mt-6 bg-white text-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200"
        >
          {aboutData?.ctaButtonText || "Contact Us"}
        </button>
      </section>
      <Footer/>
    </div>):(<Preloader/>)}</>
  );
}
