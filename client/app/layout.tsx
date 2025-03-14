import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ServiceContextProvider } from "../context/ServiceContext";
import { ProjectContextProvider } from "@/context/projectContext/ProjectContext";
import { BlogContextProvider } from "@/context/blogContext/BlogContext";
import { PageProvider } from "@/context/pageContext/PageContext";
import { NavbarProvider } from "@/context/pagesetting/NavbarContext";
import { AllPageProvider } from "@/context/pageContext/PageComponentContext";
import { FooterProvider } from "@/context/pagesetting/FooterContext";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          <FooterProvider>
            <ServiceContextProvider>
              <ProjectContextProvider>
                <BlogContextProvider>
                  <NavbarProvider>
                    <AllPageProvider>{children}</AllPageProvider>
                  </NavbarProvider>
                </BlogContextProvider>
              </ProjectContextProvider>
            </ServiceContextProvider>
          </FooterProvider>
        </PageProvider>
      </body>
    </html>
  );
}
