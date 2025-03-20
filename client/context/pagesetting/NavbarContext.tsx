"use client";

import { createContext, useContext, useEffect, useState } from "react";


interface DropdownItem {
  id: number;
  name: string;
  path: string;
}

interface NavbarItem {
  id: number;
  name: string;
  dropdown: DropdownItem[];
  path: string ;
}

interface PageSettingData {
data:{  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  Navbar: NavbarItem[];
  logo:{url:string}}
}

interface PageSettingResponse {
  data: PageSettingData;
  meta: Record<string, unknown>;
}

const NavbarContext = createContext<NavbarItem[]>([]);

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [navbar, setNavbar] = useState<NavbarItem[]>([]);

  useEffect(() => {
    fetch(`https://deepenergy.onrender.com/api/page-setting?populate[Navbar][populate]=*&populate[logo][populate]=*`)
      .then((res) => res.json())
      .then((data: PageSettingResponse) => setNavbar(data?.data))
      .catch((err) => console.error("Error fetching navbar:", err));
  }, []);

  return <NavbarContext.Provider value={navbar}>{children}</NavbarContext.Provider>;
};

export const useNavbar = () => useContext(NavbarContext);
