"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Preloader from "../ucomponent/Preloader";
import Link from "next/link";
interface project{
    BreadCrumb:{
        Title:string;
        bg_image:{
            url:string
        }
        description:string
    }
}

interface ProjectData {
  slug: string;
  title: string;
  heading: string;
  description: string;
  content: string;
  image: { formats: { small: { url: string }; large: { url: string } };
  alternativeText:string };
}

export default function ProjectComponent({projectData,projects}:{projectData:project; projects:ProjectData[]}) {

  const [visibleProjects, setVisibleProjects] = useState(6); // Show 6 initially



  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6); // Load 6 more projects on click
  };





  return (
    <>
   {projectData&&projects.length>0?( <div>

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
                <Link href="/" className="hover:text-green-500">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/projects" className="text-green-500">Project</Link>
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
              <Link
               href={`/project/${project.slug}`}
                className="mt-4 flex items-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Explore More <FaArrowRight className="ml-2" />
              </Link>
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
    </div>):(<Preloader/>)}
    </>
  );
}
