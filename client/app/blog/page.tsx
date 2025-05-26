import React from 'react'
import BlogComponent from './BlogComponent';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title:"Blog"
};

const getBlogPageData=async()=>{
  const res =await fetch(`${process.env.serverurl}/api/blog-page?populate=*`,
       {
      next: { revalidate: 60 },
    }
  ) // ✅ Corrected URL
return await res.json()
}
export default async function BlogPage() {
  const Data= await getBlogPageData()
  return (
    <div><BlogComponent pageData={Data?.data}/></div>
  )
}
