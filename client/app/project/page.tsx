import React from 'react'
import ProjectComponent from './ProjectComponent'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title:"Projects"
};
const getProjectPageData=async()=>{
  const res=await   fetch(`${process.env.serverurl}/api/project-page?populate[BreadCrumb][populate]=*`,
       {
      next: { revalidate: 60 },
    }
  )
  return await res.json()
}
export default async function ProjectPage() {
  const Data= await getProjectPageData()
  return (
    <div><ProjectComponent projectData={Data?.data}/></div>
  )
}
