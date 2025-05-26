import React from "react";
import ServiceSlug from "./ServiceSlug";
import { Metadata } from "next";

interface Seo {
  Title: string;
  metaDescription?: string;
  metaTags?: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>; // ✅ Mark params as a Promise
}): Promise<Metadata> {
  const resolvedParams = await params; // ✅ Await params before accessing slug

  try {
    const response = await fetch(
      `https://deepenergy.onrender.com/api/services?filters[slug][$eq]=${resolvedParams.slug}&fields[0]=Title&fields[1]=metaDescription&fields[2]=metaTags`,
      { cache: "no-store" } // Prevent caching issues
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
      title: seo.Title || "Default Title",
      description: seo.metaDescription || "Default Description",
      keywords: seo.metaTags || "",
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

const getServiceSlugData = async (resolvedParams: { slug: string }) => {
  const homeRes = await fetch(
    `${process.env.serverurl}/api/all-page?populate[Home][populate][Quote][populate]=*&populate[Home][populate][Brand][populate][brand_collabs][populate]=*`,
    {
      next: { revalidate: 60 },
    }
  );
  const serviceResponse = await fetch(
    `${process.env.serverurl}/api/services?filters[slug][$eq]=${resolvedParams.slug}&populate=image`,
    {
      next: { revalidate: 60 },
    }
  );
  const categoriesRes = await fetch(`${process.env.serverurl}/api/service-categories`, {
    next: { revalidate: 60 },
  });
  const categoriesData = await categoriesRes.json();

  const homedata = await homeRes.json();
  const serviceData = await serviceResponse.json();
  return await { homedata, serviceData,categoriesData };
};
export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>; // ✅ Mark params as a Promise
}) {
  const resolvedParams: { slug: string } = await params;
  const Data = await getServiceSlugData(resolvedParams);
  const slugbgres = await fetch(
    `${process.env.serverurl}/api/service-page?populate[slugBackground][populate]=*`,
    {
      next: { revalidate: 60 },
    }
  );
  const SlugBgJson = await slugbgres.json();
  const SlugBg = SlugBgJson?.data?.slugBackground?.url;
  return (
    <div>
      <ServiceSlug slugBackground={SlugBg} services1={Data?.serviceData?.data} categories={Data?.categoriesData?.data} brandData={Data?.homedata?.data?.Home?.Brand} Quote={Data?.homedata?.data?.Home?.Quote} />
    </div>
  );
}
