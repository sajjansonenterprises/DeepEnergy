import React from 'react'
import ContactComponent from './ContactComponent'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title:"Contact Us"
};
const getContactPageData=async()=>{
  const res= await fetch(`${process.env.serverurl}/api/contact?populate[card][populate]=*`,   {
      next: { revalidate: 60 },
    }) // ✅ Fetching contact data
  return await res.json()
}
export default async function page() {
  const Data= await getContactPageData()
  return (
    <div><ContactComponent contactData={Data?.data}/></div>
  )
}
