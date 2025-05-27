'use client'
import React, { createContext,  useContext, ReactNode } from 'react';


type PageContextType = {
 
  serverurl:string;
 
};

const PageContext = createContext<PageContextType | undefined>(undefined);

interface PageProviderProps {
  children: ReactNode;
}

const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  
const serverurl="https://deepenergy.onrender.com"

  return (
    <PageContext.Provider value={{ serverurl }}>
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
