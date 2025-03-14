"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePageData } from "../pageContext/PageContext";

// Define types for the footer sections
interface FooterLink {
  label: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  mapEmbedUrl: string;
}

interface SocialLinks {
  twitter: string;
  facebook: string;
  linkedin: string;
}

// Define FooterData type
interface FooterData {
  sections: FooterSection[];
  contact: ContactInfo;
  socials: SocialLinks;
  copyright: string;
}

// Create the context
const FooterContext = createContext<FooterData | null>(null);

export const FooterProvider = ({ children }: { children: React.ReactNode }) => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const {serverurl}=usePageData()
  useEffect(() => {
    fetch(`${serverurl}/api/page-setting?populate[Footer][populate][sections][populate]=*&populate[Footer][populate][contact][populate]=*&populate[Footer][populate][socials][populate]=*`)
      .then((res) => res.json())
      .then((data) => {
        setFooterData(data?.data?.Footer);
      })
      .catch((error) => console.error("Error fetching footer data:", error));
  }, []);

  return <FooterContext.Provider value={footerData}>{children}</FooterContext.Provider>;
};

// Custom Hook to use the Footer Context
export const useFooter = (): FooterData | null => {
  return useContext(FooterContext);
};
