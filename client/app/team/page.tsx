import React from 'react'
import TeamComponent from './TeamComponent'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title:"Our Teams"
};

const getTeamPageData =async()=>{
  const resTeamPageData=    fetch(`${process.env.serverurl}/api/our-team?populate[breadcrumb][populate]=*&populate[teams][populate][team][populate]=*&populate[title_description][populate]=*&populate[AboutArea][populate]=*&populate[CTA][populate]=*`)
    const data= (await resTeamPageData).json()
    return await data
}
export default async function TeamPage() {
  const Data= await getTeamPageData()
  return (
    <div><TeamComponent teamData={Data?.data}/></div>
  )
}
