'use client'
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type PageData = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  PageCode: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
interface AboutData {
  breadcrumb?: {
    bg_image?: { url?: string };
    pageTitle?: string;
    description?: string;
    button?: { label?: string; url?: string };
    videoButton?: { label?: string; url?: string };
    whoWeAreTitle?: string;
    whoWeAreDescription?: string;
    whoWeAreImage?: { formats?: { large?: { url?: string } }; alternativeText?: string };
  };
  missionVision?: { title: string; description: string }[];
  whyChooseUs?: { title: string; description: string }[];
  videoUrl?: string;
  videoTitle?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  whyChooseUsTitle?:string
}
type PageContextType = {
  pageData: PageData[] ;
  aboutData:AboutData | null;
  serverurl:string;
  loading: boolean;
  error: string | null;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

interface PageProviderProps {
  children: ReactNode;
}

const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [pageData, setPageData] = useState<PageData[] | []>([]);
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
const serverurl="https://deepenergy.onrender.com"
  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`${serverurl}/api/pages`);
        const data = await response.json();
        setPageData(data.data); // Assuming the first object in data is what we need
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);
  useEffect(() => {
    fetch(`${serverurl}/api/about?populate[About][populate][breadcrumb][populate]=*&populate[About][populate][missionVision][populate]=*&populate[About][populate][whyChooseUs][populate]=*`) // Adjust endpoint based on Strapi structure
      .then((res) => res.json())
      .then((data) => {
        setAboutData(data?.data?.About);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching about page:", err);
        setError("Failed to load content.");
        setLoading(false);
      });
  }, [serverurl]);
  return (
    <PageContext.Provider value={{ serverurl,aboutData,pageData, loading, error }}>
      {children}
    </PageContext.Provider>
  );
};

// Custom hook to use the PageContext
const usePageData = (): PageContextType => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePageData must be used within a PageProvider');
  }
  return context;
};

export { PageProvider, usePageData };
