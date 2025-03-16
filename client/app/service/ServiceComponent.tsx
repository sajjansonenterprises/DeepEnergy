"use client";
import { useState, useEffect } from "react";
import { FaHome, FaArrowLeft, FaArrowRight, FaLeaf, FaSolarPanel, FaIndustry } from "react-icons/fa";
import Navbar from "../home-component/Navbar";
import { useServices } from "@/context/ServiceContext";
import ContactSection from "../home-component/ContactSection";
import QuoteSection from "../home-component/QuoteSection";
import Image from "next/image";
import ExperienceTestimonials from "../Service-Components/ExpirenceTestimonial";
import { usePageData } from "@/context/pageContext/PageContext";
import Footer from "../ucomponent/Footer";
import Preloader from "../ucomponent/Preloader";
import { useAllPageData } from "@/context/pageContext/PageComponentContext";
import { useRouter } from "next/navigation";

interface Service {
  slug: string;
  Title: string;
  description: string;
  image?: Array<{ formats: { small: { url: string } } }>;
}

interface ServiceContext {
  services1: Service[];
  loading: boolean;
}
interface servicepage{
    title_description:{
        title:string;
        description:string;
    }
    BreadCrumb:{
        Title:string;
        bg_image:{
            url:string;
        }
        description:string;
        Button1:{
            label:string;
            url:string;
            
        }
        Button2:{
            label:string;
            url:string;

        }
    };
}

export default function ServiceComponent() {
  const { services1 } = useServices() as ServiceContext;
  const {serverurl}=usePageData()
  const [serviceData, setServiceData] = useState<servicepage | null>(null);
  
  const [error, setError] = useState("");
  const {homeData}=useAllPageData()

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 6;
  const totalPages = Math.ceil(services1.length / servicesPerPage);
const router=useRouter()
  // Get Services for Current Page
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services1.slice(indexOfFirstService, indexOfLastService);

  // Fetch Dynamic Data from Strapi
  useEffect(() => {
    fetch(`${serverurl}${"/api/service-page?populate[BreadCrumb][populate]=*&populate[title_description][populate]=*"}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data?.data);

       
      })
      .catch((err) => {
        console.error("Error fetching service page:", err);
        setError("Failed to load content.");
      
      });
  }, [serverurl]);
  
 
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
  <> 
   {currentServices.length>0&&serviceData&&homeData?.Home.Contact&&homeData.Home.Quote?(<div>
      <Navbar />

      {/* Header Section */}
      <div
        className="relative w-full h-[650px] bg-cover bg-center flex items-center px-6 md:px-20"
        style={{
          backgroundImage: `url(${serviceData?.BreadCrumb?.bg_image?.url})`,
          backgroundColor: "rgb(27 26 26 / 50%)",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Breadcrumb */}
        <div className="absolute top-5 left-5 text-white text-sm flex items-center">
          <FaHome className="mr-2" />
          <button onClick={()=>router.push("/")} className="hover:underline">Home</button>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{serviceData?.BreadCrumb?.Title || "Our Services"}</span>
        </div>

        {/* Header Content */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-white">
          {/* Left Section (Icons + Text) */}
          <div className="md:w-1/2 space-y-6">
            {/* Icons */}
            <div className="flex space-x-4">
              <FaLeaf className="text-white text-4xl" />
              <FaSolarPanel className="text-white text-4xl" />
              <FaIndustry className="text-white text-4xl" />
            </div>

            {/* Heading & Description */}
            <h1 className="text-5xl font-bold">{serviceData?.BreadCrumb?.Title || "Our Services"}</h1>
            <p className="text-lg text-gray-300">{serviceData?.BreadCrumb?.description || "Explore our biomass energy solutions."}</p>

            {/* Buttons */}
            <div className="flex space-x-4">
           
                <button  onClick={()=>router.push(serviceData?.BreadCrumb?.Button1?.url || "/quote")} className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition duration-300">
                  {serviceData?.BreadCrumb?.Button1?.label || "Get Started"}
                </button>
           
           
                <button onClick={()=>router.push(serviceData?.BreadCrumb?.Button2?.url || "#")} className="border border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition duration-300">
                  {serviceData?.BreadCrumb?.Button2?.label || "Explore Our Plans"}
             
              </button>
            </div>
          </div>

          {/* Right Section (For Future Use) */}
          <div className="hidden md:block md:w-1/2"></div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-black">{serviceData?.title_description?.title}</h2>
        <p className="text-gray-600 mt-4">{serviceData?.title_description?.description}</p>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentServices.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
            >
              {/* Service Image */}
              <Image
                src={`${service.image?.find(i => i.formats?.small?.url)?.formats.small.url}`}
                alt={service.Title}
                width={1000}
                height={1000}
                className="w-full h-100 object-cover"
              />

              {/* Service Details */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{service.Title}</h3>

                {/* Separating Border */}
                <div className="w-1/2 border-b-2 border-green-500 mx-auto my-3"></div>

                <p className="text-gray-600">{service.description}</p>

                {/* Read More Button */}
               
                  <button onClick={()=>router.push(`/service/${service.slug}`)} className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-green-600 transition duration-300">
                    Read More
                  </button>
             
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-6 py-2 rounded-md font-semibold text-white bg-gray-700 hover:bg-gray-600 flex items-center ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaArrowLeft className="mr-2" /> Previous
          </button>
          <span className="text-lg font-semibold">{currentPage} / {totalPages}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-6 py-2 rounded-md font-semibold text-white bg-green-500 hover:bg-green-600 flex items-center ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next <FaArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      <ContactSection />
      <QuoteSection />
      <ExperienceTestimonials />
      <Footer/>
    </div>):(<Preloader/>)}
    </>
  );
}
