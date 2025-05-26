import React from 'react'
import QuoteComponent from './QuoteComponent'


const getQuotePageData = async () => {
  
        const response = await fetch(`${process.env.serverurl}/api/all-page?populate[Home][populate][Quote][populate]=*`,
             {
      next: { revalidate: 60 },
    }
        );
        if (!response.ok) throw new Error("Failed to fetch page data");

        const data = await response.json();
       return data
    
    };
export default async function page() {
  const Data=await getQuotePageData()

  return (
    <QuoteComponent Quote={Data?.data?.Home?.Quote}/>
  )
}
