import React from 'react'
import TeamComponent from './TeamComponent'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title:"Our Teams"
};
export default function TeamPage() {
  return (
    <div><TeamComponent/></div>
  )
}
