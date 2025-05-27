import React from 'react'
import BlogComponent from './BlogComponent';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title:"Blog"
};

const getBlogPageData=async()=>{
    const responseBlogs = await fetch(`${process.env.serverurl}/api/blogs?populate=*`);
  const resPageData =await fetch(`${process.env.serverurl}/api/blog-page?populate=*`,
       {
      next: { revalidate: 60 },
    }
  ) // ✅ Corrected URL
  const blogsData=await responseBlogs.json()
  const pageData=await resPageData.json()
return  {blogsData,pageData}
}
export default async function BlogPage() {
  const Data= await getBlogPageData()
  return (
    <div><BlogComponent blogs={Data?.blogsData?.data} pageData={Data?.pageData?.data}/></div>
  )
}
