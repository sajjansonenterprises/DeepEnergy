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
   const responseProjectData = await fetch(`${process.env.serverurl}/api/projects?populate=*`,
        {
      next: { revalidate: 60 },
    }
   );
const projectPageData=await res.json()
const projectData=await responseProjectData.json()
  return {projectData,projectPageData}
}
export default async function ProjectPage() {
  const Data= await getProjectPageData()
  return (
    <div><ProjectComponent projectData={Data?.projectPageData?.data} projects={Data?.projectData?.data}/></div>
  )
}
