"use client";

import { useState, useEffect } from "react";
import { useProjects } from "@/context/projectContext/ProjectContext";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../home-component/Navbar";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePageData } from "@/context/pageContext/PageContext";
import Footer from "../ucomponent/Footer";
import Preloader from "../ucomponent/Preloader";
interface project{
    BreadCrumb:{
        Title:string;
        bg_image:{
            url:string
        }
        description:string
    }
}
export default function ProjectComponent() {
  const router = useRouter();
  const { projects } = useProjects();
  const {serverurl}=usePageData()
  const [visibleProjects, setVisibleProjects] = useState(6); // Show 6 initially
  const [projectData, setProjectData] = useState<project | null>(null);


  const [error, setError] = useState("");

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6); // Load 6 more projects on click
  };

  // Fetch Dynamic Data from Strapi
  useEffect(() => {
    fetch(`${serverurl}/api/project-page?populate[BreadCrumb][populate]=*`)
      .then((res) => res.json())
      .then((data) => {
        setProjectData(data?.data);
 
      })
      .catch((err) => {
        console.error("Error fetching project page:", err);
        setError("Failed to load content.");
   
      });
  }, [serverurl]);


  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <>
   {projectData&&projects.length>0?( <div>
      <Navbar />
      <div className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: `url(${projectData?.BreadCrumb?.bg_image?.url})`,
            backgroundColor: "rgb(27 26 26 / 50%)",
            backgroundBlendMode: "overlay",
          }}
        ></div>

        {/* Main Content Section */}
        <div className="relative z-10 py-20 px-6 md:px-20 text-center text-white">
          {/* Breadcrumb Navigation */}
          <nav className="text-sm mb-6">
            <ul className="flex justify-center space-x-2">
              <li>
                <button onClick={()=>router.push("/")} className="hover:text-green-500">Home</button>
              </li>
              <li>/</li>
              <li>
                <button onClick={()=>router.push("/projects")} className="text-green-500">Project</button>
              </li>
            </ul>
          </nav>

          {/* Heading */}
          <h1 className="text-5xl font-bold">{projectData?.BreadCrumb?.Title || "Our Projects"}</h1>

          {/* Description */}
          <div className="mt-6">
          {projectData?.BreadCrumb?.description&&projectData?.BreadCrumb?.description.split(",").map((item:string, index:number) => (
              <p key={index} className="text-lg  opacity-100">{item.trim()}</p>
    
      ))
  
}</div>
          
        </div>
      </div>

      {/* Project Cards Section */}
      <div className="mt-16 mb-16 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg text-black shadow-lg border-t-4 border-green-500 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              {project?.image?.formats?.small?.url ? (
                <Image
                  src={`${project.image.formats.small.url}`}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="w-full h-40 object-cover rounded-md"
                />
              ) : null}

              {/* Project Info */}
              <span className="text-green-500 font-semibold mt-4">{project.title}</span>
              <h3 className="text-xl font-bold mt-2">{project.heading}</h3>
              
              <p className="text-gray-600 mt-2">{project.description}</p>
              <button
                onClick={() => router.push(`/project/${project.slug}`)}
                className="mt-4 flex items-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Explore More <FaArrowRight className="ml-2" />
              </button>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <button
            onClick={loadMoreProjects}
            className="mt-8 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-all"
          >
            Load More
          </button>
        )}
      </div>
      <Footer/>
    </div>):(<Preloader/>)}
    </>
  );
}
