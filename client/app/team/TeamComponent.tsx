"use client";

import { useState, useEffect } from "react";
import { FaHome, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Navbar from "../home-component/Navbar";
import Image from "next/image";
import { usePageData } from "@/context/pageContext/PageContext";
import { useRouter } from "next/navigation";
import Footer from "../ucomponent/Footer";
import Preloader from "../ucomponent/Preloader";

interface Team{
    title_description:{
        title:string;
        description:string;
    }
    breadcrumb:{
        Title:string
Button1:{
    url:string;
    label:string;
}
    }
    AboutArea:{
        title:string;
        description:string;
    }
    teams:[

    ]
    CTA:{
        Title:string;
        Button1:{
            url:string;
            label:string; 
        }
        description:string;
    }
}
export default function TeamComponent() {
  const { serverurl } = usePageData();
  const [teamData, setTeamData] = useState< Team | null>(null);
  const [error, setError] = useState("");
  const router=useRouter()
  // ✅ Fetch Team Page Data from Strapi
  useEffect(() => {
    fetch(`${serverurl}/api/our-team?populate[breadcrumb][populate]=*&populate[teams][populate][team][populate]=*&populate[title_description][populate]=*&populate[AboutArea][populate]=*&populate[CTA][populate]=*`)
      .then((res) => res.json())
      .then((data) => setTeamData(data?.data))
      .catch((err) => {
        console.error("Error fetching team data:", err);
        setError("Failed to load team members.");
      });
  }, [serverurl]);

  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
  <div>{  teamData?(<div>
      <Navbar />
      
      {/* Breadcrumb Section */}
      <div className="relative w-full h-[650px] bg-cover bg-center flex items-center justify-center px-6 text-center md:text-left md:justify-start" 
        style={{ backgroundImage: "url('https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundColor: "rgb(27 26 26 / 68%)", backgroundBlendMode: "overlay" }}>
        <div className="absolute top-5 left-5 text-white text-sm flex items-center">
          <FaHome className="mr-2" />
          <button onClick={()=>router.push("/")} className="hover:underline">Home</button>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Our Team</span>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="bg-opacity-50 p-6 md:p-10 rounded-lg text-white flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl font-bold">{teamData?.breadcrumb?.Title}</h1>
            <p className="mt-4 text-lg max-w-2xl">{teamData?.title_description?.description}</p>
            <div className="flex mt-6 space-x-4">
              <button onClick={()=>router.push(`${teamData?.breadcrumb?.Button1?.url}`)} className="bg-white text-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200">{teamData?.breadcrumb?.Button1?.label}</button>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-black">{teamData?.title_description?.title}</h2>
        <p className="text-gray-600 mt-4">{teamData?.title_description?.description}.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamData?.teams?.map((member: {team:{Name:string; Position:string; Linkedin:{url:string}; twitter:{url:string}; Facebook:{url:string}; profilePic:{formats:{small:{url:string;}}}}}, index: number) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
              <Image 
                src={`${member.team.profilePic?.formats?.small?.url || "/default-avatar.png"}`} 
                className="rounded-full w-32 h-32 shadow-md" 
                width={1000} 
                height={1000} 
                alt={member.team.Name} 
              />
              <h3 className="text-xl font-bold mt-4">{member.team.Name}</h3>
              <p className="text-gray-600 mt-1">{member.team.Position}</p>
              <div className="flex space-x-4 mt-4">
                <a href={member.team.Linkedin?.url || "#"} className="text-blue-600 text-xl"><FaLinkedin /></a>
                <a href={member.team.twitter?.url || "#"} className="text-blue-400 text-xl"><FaTwitter /></a>
                <a href={member.team.Facebook?.url || "#"} className="text-blue-700 text-xl"><FaFacebook /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Our Team? */}
      <section className="py-20 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-black">{teamData?.AboutArea?.title}</h2>
        <p className="text-gray-600 mt-4">{teamData?.AboutArea?.description
        }</p>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 px-6 md:px-20 bg-green-500 text-white text-center">
        <h2 className="text-3xl font-bold">{teamData?.CTA?.Title}</h2>
        <p className="mt-4 mb-6">{teamData?.CTA?.description}</p>
        
  
            <button onClick={()=>router.push(`${teamData?.CTA?.Button1?.url}`)} className="mt-6 bg-white text-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200">
            {teamData?.CTA?.Button1?.label}
          </button>
        
       
      </section>
    </div>):(<div><Preloader/></div>)} <Footer/></div>
  );
}
