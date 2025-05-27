import React from 'react'
import ServiceComponent from './ServiceComponent'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title:"Service"
};



const getServicePageData = async () => {
  const resServicePage=await fetch(`${process.env.serverurl}${"/api/service-page?populate[BreadCrumb][populate]=*&populate[title_description][populate]=*"}`,       {
      next: { revalidate: 60 },
    })
        const response = await fetch(`${process.env.serverurl}/api/all-page?populate[Home][populate][Quote][populate]=*&populate[Home][populate][Contact][populate]=*`,
             {
      next: { revalidate: 60 },
    }
        );
         const servicesRes = await fetch(`${process.env.serverurl}/api/services?populate=*`,
              {
      next: { revalidate: 60 },
    }
         );
         
         const testimonialDataRes = await fetch(`${process.env.serverurl}/api/service-page?populate[ExperienceAndTestimonial][populate][testimonials][populate]=*&populate[ExperienceAndTestimonial][populate][image][populate]=*`,
              {
      next: { revalidate: 60 },
    }
         );


        const servicesData = await servicesRes.json();
        const testimonialData = await testimonialDataRes.json();

        const homedata = await response.json();
        const servicepagedata = await resServicePage.json();
       return {homedata,servicepagedata,servicesData,testimonialData}
    
    };
export default async function ServicePage() {
  const Data=await getServicePageData()
  return (
    <div><ServiceComponent testimonialsData={Data?.testimonialData?.data?.ExperienceAndTestimonial} contactData={Data?.homedata?.data?.Home?.Contact} Quote={Data?.homedata?.data?.Home?.Quote} serviceData={Data?.servicepagedata?.data} services1={Data?.servicesData?.data}/></div>
  )
}
