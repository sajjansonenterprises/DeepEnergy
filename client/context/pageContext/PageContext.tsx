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

type PageContextType = {
  pageData: PageData[] ;
 
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

  return (
    <PageContext.Provider value={{ serverurl,pageData, loading, error }}>
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
