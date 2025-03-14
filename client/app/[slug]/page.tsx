import React from 'react'
import PageComponent from './PageComponent'
import { Metadata } from 'next';
interface Seo {
  title: string;
  metaDescription?: string;
  metaTags?: string;
}

// Function to generate metadata based on the slug
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params; // Await the params before accessing properties

  try {
    const response = await fetch(
      `https://deepenergy.onrender.com/api/pages?filters[slug][$eq]=${resolvedParams.slug}&fields[0]=title&fields[1]=metaDescription&fields[2]=metaTags`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch SEO data: ${response.statusText}`);
    }

    const data = await response.json();

    const seo: Seo | undefined = data?.data[0];

    if (!seo) {
      throw new Error("SEO data is missing in API response");
      
    }

    return {
      title: seo.title,
      description: seo.metaDescription || "",
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

export default function page() {
  return (
    <div>{<PageComponent/>}</div>
  )
}
