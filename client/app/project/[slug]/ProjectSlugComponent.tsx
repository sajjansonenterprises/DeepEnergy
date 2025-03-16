"use client";
import { useEffect, useState } from "react";

import { useProjects } from "@/context/projectContext/ProjectContext";
import Navbar from "@/app/home-component/Navbar";
import Image from "next/image";
import { HiHome, HiChevronRight } from "react-icons/hi";
import Footer from "@/app/ucomponent/Footer";
import { usePageData } from "@/context/pageContext/PageContext";
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
interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>; // params is now a Promise
}

export default function ProjectSlugComponent({ params }: ProjectDetailPageProps) {
  const { projects } = useProjects() ; 
  const [project, setProject] = useState<Project | null>(null); 
  const {serverurl}=usePageData()
const router=useRouter()
const [slugBackground,setSlugBackground]=useState('https://images.pexels.com/photos/162646/cooling-tower-power-plant-energy-industry-162646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
useEffect(() => {
  const fetchSlugBg = async () => {
    try {
      const response = await fetch(`${serverurl}/api/project-page?populate[slugBackground][populate]=*`);
      const data = await response.json();
      setSlugBackground(`${data?.data?.logo.url}`);
    } catch (error) {
      console.error("Error fetching logo:", error);
    }
  };

  if (serverurl) fetchSlugBg();
}, [serverurl]);
  useEffect(() => {
    const fetchProject = async () => {
      const resolvedParams = await params;  // Resolving the Promise
      const { slug } = resolvedParams;

      // Find the project using the slug
      const foundProject = projects.find((project) => project.slug === slug);
      setProject(foundProject || null); // Set project data or null if not found
    };

    fetchProject();
  }, [params, projects]);

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
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Project Image */}
          
            <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <Image
                src={`${project?.image?.formats?.large?.url}`}
                alt={project?.image.alternativeText}
                width={1200}
                height={800}
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
      
          {/* Project Content */}
          <div className="space-y-8 text-gray-700">
            <h2 className="text-2xl md:text-3xl font-semibold">Project Details</h2>
           <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                           {project.content || "No content available."}
                         </ReactMarkdown>
          </div>
        </div>
      </div>

    <Footer/>
    </div>
  );
}
