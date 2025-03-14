import React from 'react'
import ProjectSlugComponent from './ProjectSlugComponent'
import { Metadata } from 'next';

interface Seo {
  title: string;
  metaDescription?: string;
  metaTags?: string;
}

// ✅ Function to generate metadata based on the slug
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>; // ✅ Mark params as Promise
}): Promise<Metadata> {
  const resolvedParams = await params; // ✅ Await params before using slug

  try {
    const response = await fetch(
      `https://deepenergy.onrender.com/api/projects?filters[slug][$eq]=${resolvedParams.slug}&fields[0]=title&fields[1]=metaDescription&fields[2]=metaTags`,
      { cache: "no-store" } // ✅ Prevent caching issues
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch SEO data: ${response.statusText}`);
    }

    const data = await response.json();

    const seo:Seo = data?.data?.[0]; // ✅ Correct structure check for Strapi

    if (!seo) {
      throw new Error("SEO data is missing in API response");
    }

    return {
      title: seo.title || "Default Title",
      description: seo.metaDescription || "Default Description",
      keywords: seo.metaTags || "",
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Deep Energy Enterprises",
      description: "Deep Energy Enterprises specializes in innovative biomass energy solutions.",
      keywords: "deep energy enterprises, biomass, biomass energy, sustainable energy, pellet mills",
    };
  }
}

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>; // params is now a Promise
}
export default function page({ params }: ProjectDetailPageProps) {
  return (
    <div><ProjectSlugComponent params={params}/></div>
  )
}
