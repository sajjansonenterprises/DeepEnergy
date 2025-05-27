import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { PageProvider } from "@/context/pageContext/PageContext";
import Footer from "./ucomponent/Footer";
import Navbar from "./home-component/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface Seo {
  title: string;
  description?: string;
  keywords?: string;
}

// ✅ Use `generateMetadata` as a function, not a top-level await
export async function generateMetadata(): Promise<Metadata> {
  try {
    const response = await fetch(
      "https://deepenergy.onrender.com/api/page-setting?populate[Seo][populate]=*",
      { 
        next: { 
          revalidate: 3600 // 👈 Cache for 1 hour (ISR)
        } 
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch SEO data: ${response.statusText}`);
    }

    const data = await response.json();

    const seo: Seo | undefined = data?.data?.Seo;

    if (!seo) {
      throw new Error("SEO data is missing in API response");
    }

    return {
      title: {
        default: seo.title,
        template: "%s - Deep Energy Enterprises",
      },
      description: seo.description || "",
      keywords: seo.keywords || "",
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Deep Energy Enterprises",
      description:
        "Deep Energy Enterprises specializes in innovative biomass energy solutions.",
      keywords:
        "deep energy enterprises, biomass, biomass energy, sustainable energy, pellet mills",
    };
  }
}


const getPageSettingData= async()=>{
  const res = await fetch(`${process.env.serverurl}/api/page-setting?populate[Footer][populate][sections][populate]=*&populate[Footer][populate][contact][populate]=*&populate[Footer][populate][socials][populate]=*&populate[Navbar][populate]=*&populate[logo][populate]=*`)
return await res.json()
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const Data=await getPageSettingData()
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageProvider>
           
                  <Navbar navbar={Data?.data}/>
                    {children}
                       <Footer footerData={Data?.data?.Footer}/>
       
        </PageProvider>
      </body>
    </html>
  );
}
