"use client";
import { useEffect, useState } from "react";

import Navbar from "@/app/home-component/Navbar";
import { HiHome, HiChevronRight } from "react-icons/hi";
import Preloader from "@/app/ucomponent/Preloader";
import { useRouter } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
// Define types for project data
interface Project {
  slug: string;
  title: string;
  heading: string;
  description: string;
  content: string;
  image: { formats: { small: { url: string }; large: { url: string } };
  alternativeText:string; };
}

// Define the type for the ProjectDetailPage component props


export default function ProjectSlugComponent({ projects,slugBackground ,params}: {projects:Project[]; slugBackground:string; params:{slug:string}}) {
const router=useRouter()
  const [project, setProject] = useState<Project | null>(null); 

  useEffect(() => {
    const fetchProject = async () => {
      const resolvedParams = await params;  // Resolving the Promise
      const { slug } = resolvedParams;

      // Find the project using the slug
      const foundProject = projects.find((project) => project.slug === slug);
      setProject(foundProject || null); // Set project data or null if not found
    };

    fetchProject();
  }, [ projects,params]);

  // If no project is found, show a not found message
  if (!project) {
    return (
      <div className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold text-gray-600"><Preloader/></h2>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url(${slugBackground})`,
            backgroundBlendMode:"overlay",
            backgroundColor:"#00000036"
          }}
        ></div>

        <div className="relative z-10 py-24 px-6 md:px-20 text-center text-white">
          <nav className="text-sm mb-6 flex justify-center items-center space-x-2">
            <button onClick={()=>router.push("/")} className="flex items-center hover:text-green-500">
              <HiHome size={20} className="mr-1" /> Home
            </button>
            <HiChevronRight size={20} className="text-gray-400" />
            <button onClick={()=>router.push("/projects")} className="hover:text-green-500">Projects</button>
            <HiChevronRight size={20} className="text-gray-400" />
            <span className="text-green-500">{project.title}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold">{project.title}</h1>
          <p className="text-lg mt-6 opacity-80">{project.description}</p>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto gap-8 m">
          {/* Project Image */}
          
          
          {/* Project Content */}
          <div className="space-y-8 text-gray-700">
            <h2 className="text-2xl md:text-3xl font-semibold">Project Details</h2>
             <div className="prose prose-lg max-w-none text-gray-700">
           <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                           {project.content || "No content available."}
                         </ReactMarkdown> </div>
          </div>
        </div>
      </div>

    </div>
  );
}
