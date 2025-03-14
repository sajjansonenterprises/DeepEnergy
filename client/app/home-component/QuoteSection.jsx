"use client";

import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import QuoteForm from "../formComponent/QuoteForm";
import { useAllPageData } from "@/context/pageContext/PageComponentContext";

export default function QuoteSection() {
const router=useRouter()
const {homeData}=useAllPageData()
  return (
    <div className="relative text-white py-20 px-6 md:px-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/5115946/pexels-photo-5115946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
      <div className="absolute inset-0 bg-green-500 opacity-90"></div>
      
      <div className="relative flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Content & Advantages */}
        <div className="md:w-1/2">
          <span className="text-sm font-bold uppercase">{homeData?.Home?.Quote?.title}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">{homeData?.Home?.Quote?.Heading}</h2>
          <p className="text-gray-200 mt-4">
            {homeData?.Home?.Quote?.description}
          </p>

          {/* Advantages */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center bg-gray-700 text-white p-3 rounded-md">
              <FaCheck className="text-green-400 mr-2" /> {homeData?.Home?.Quote?.Advantage1}
            </div>
            <div className="flex items-center bg-gray-700 text-white p-3 rounded-md">
              <FaCheck className="text-green-400 mr-2" /> {homeData?.Home?.Quote?.Advantage2}
            </div>
            <div className="flex items-center bg-gray-700 text-white p-3 rounded-md">
              <FaCheck className="text-green-400 mr-2" /> {homeData?.Home?.Quote?.Advantage3}
            </div>
            <div className="flex items-center bg-gray-700 text-white p-3 rounded-md">
              <FaCheck className="text-green-400 mr-2" />{homeData?.Home?.Quote?.Advantage4}
            </div>
            <div className="flex items-center bg-gray-700 text-white p-3 rounded-md">
              <FaCheck className="text-green-400 mr-2" /> {homeData?.Home?.Quote?.Advantage5}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button onClick={()=>router.push(`${homeData?.Home?.Quote?.LearnMore?.url}`)}className="bg-white text-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">{homeData?.Home?.Quote?.LearnMore?.label}</button>
            <button onClick={()=>router.push(`${homeData?.Home?.Quote?.OurCoreValues?.url}`)} className="bg-gray-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-600">{`${homeData?.Home?.Quote?.OurCoreValues?.label}`}</button>
          </div>
        </div>

        {/* Right Section - Form */}
        
     <QuoteForm/>
      </div>
    </div>
  );
}
