"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePageData } from "../pageContext/PageContext";

// Define the structure of a project
interface Project {
  slug: string;
  title: string;
  heading: string;
  description: string;
  content: string;
  image: { formats: { small: { url: string }; large: { url: string } };
  alternativeText:string };
}


// Define the structure of the context
interface ProjectContextProps {
  projects: Project[];
  loading: boolean;
}

// Create Context
const ProjectContext = createContext<ProjectContextProps | undefined>(undefined);

// Provider Component
export function ProjectContextProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const {serverurl}=usePageData()
  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(`${serverurl}/api/projects?populate=*`);
        if (!response.ok) throw new Error("Failed to fetch projects");

        const data = await response.json();
        setProjects(data?.data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, loading }}>
      {children}
    </ProjectContext.Provider>
  );
}

// Hook for consuming context
export function useProjects() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectContextProvider");
  }
  return context;
}
