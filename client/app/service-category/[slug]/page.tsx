import React from 'react'
import ServiceComponent from './ServiceCategoryComponent'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title:"Service"
};
const getServiceCatagoryPageData=async(resolvedParams:{slug:string})=>{

   const homeRes = await fetch(`${process.env.serverurl}/api/all-page?populate[Home][populate][Quote][populate]=*&populate[Home][populate][Contact][populate]=*`,
             {
      next: { revalidate: 60 },
    }
        );
   const resCategoryServicePage  =await fetch(`${process.env.serverurl}/api/service-page?populate[BreadCrumb][populate]=*&populate[title_description][populate]=*`,
           {
      next: { revalidate: 60 },
    }
   )
      const servicesRes = await fetch(`${process.env.serverurl}/api/services?filters[service_category][slug][$eq]=${resolvedParams.slug}&populate=image`,
              {
      next: { revalidate: 60 },
    }
         );

  const serviceCategoryPageData= await resCategoryServicePage.json()
  const servicesData= await servicesRes.json()
  const homedata= await homeRes.json()

  return {serviceCategoryPageData, servicesData,homedata}
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>; // ✅ Mark params as a Promise
}) {
  const resolvedParams: { slug: string } = await params;
const Data = await getServiceCatagoryPageData(resolvedParams)
console.log(Data?.servicesData)
  return (
    <div><ServiceComponent serviceData={Data?.serviceCategoryPageData?.data} services1={Data?.servicesData?.data} contactData={Data?.homedata?.data?.Home?.Contact} Quote={Data?.homedata?.data?.Home?.Quote}/></div>
  )
}
