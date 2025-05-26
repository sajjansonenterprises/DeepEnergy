
"use client"
import { FaHome,FaCheck } from "react-icons/fa";

import Navbar  from "../home-component/Navbar";
import Link from "next/link";
import QuoteForm from "../formComponent/QuoteForm";
import { useRouter } from "next/navigation";
import Preloader from "../ucomponent/Preloader";


interface quote{
  title:string;
  Heading:string;
  description:string;
  Advantage1:string;
  Advantage2:string;
  Advantage3:string;
  Advantage4:string;
  Advantage5:string;
  LearnMore:{
    label:string;
    url:string
  }
  OurCoreValues:{
    label:string;
    url:string
  }
  background: {
    alternativeText:string;
     formats: { large: { url: string } } };


}
export default function QuoteComponent({Quote}:{Quote:quote}) {
const router=useRouter()
  return (
    <>{Quote&&Quote!=undefined?(<div>
      <Navbar/>
    <div className="relative w-full h-[300px] bg-cover bg-center flex items-center px-6 text-center md:text-left md:justify-start" style={{ backgroundImage: "url('https://images.pexels.com/photos/5115946/pexels-photo-5115946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundColor: "#1b1a1a80", backgroundBlendMode: "overlay" }}>

      {/* Breadcrumb */}
      <div className="absolute top-5 left-5 text-white text-sm flex items-center">
        <FaHome className="mr-2" />
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">Request Quote</span>
      </div>

      {/* Left Section - Centered Heading */}
      <div className="w-1/2 flex justify-center items-center text-white">
        <h1 className="text-4xl font-bold">Request Quote</h1>
      </div>
    
    </div>
      <div className="relative  py-20 px-6 md:px-10 bg-cover bg-center">
   <div className="relative flex flex-col md:flex-row justify-between items-center">
         {/* Left Section - Content & Advantages */}
         <div className="md:w-1/2">
           <span className="text-sm font-bold uppercase">{Quote?.title}</span>
           <h2 className="text-3xl md:text-4xl font-bold mt-4">{Quote?.Heading}</h2>
           <p className="text-gray-400 mt-4">
             {Quote?.description}
           </p>
 
           {/* Advantages */}
           <div className="grid grid-cols-2 gap-4 mt-6">
             <div className="flex items-center bg-gray-700 text-white p-3 rounded-md">
               <FaCheck className="text-green-400 mr-2" /> {Quote?.Advantage1}
             </div>
             <div className="flex items-center bg-gray-700 text-white p-3 rounded-md">
               <FaCheck className="text-green-400 mr-2" /> {Quote?.Advantage2}
             </div>
             <div className="flex items-center bg-gray-700 text-white p-3 rounded-md">
               <FaCheck className="text-green-400 mr-2" /> {Quote?.Advantage3}
             </div>
             <div className="flex items-center bg-gray-700 text-white p-3 rounded-md">
               <FaCheck className="text-green-400 mr-2" />{Quote?.Advantage4}
             </div>
             <div className="flex items-center bg-gray-700 text-white p-3 rounded-md">
               <FaCheck className="text-green-400 mr-2" /> {Quote?.Advantage5}
             </div>
           </div>
 
           {/* Buttons */}
           <div className="flex space-x-4 mt-6">
             <button onClick={()=>router.push(`${Quote?.LearnMore?.url}`)}className="bg-white text-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">{Quote?.LearnMore?.label}</button>
             <button onClick={()=>router.push(`${Quote?.OurCoreValues?.url}`)} className="bg-gray-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-600">{`${Quote?.OurCoreValues?.label}`}</button>
           </div>
         </div>
 
         {/* Right Section - Form */}
         
      <QuoteForm/>
       </div></div>
    </div>):(<Preloader/>)}</>
  );
}
