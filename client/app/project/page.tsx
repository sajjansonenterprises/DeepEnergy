import React from 'react'
import ProjectComponent from './ProjectComponent'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title:"Projects"
};
export default function ProjectPage() {
  return (
    <div><ProjectComponent/></div>
  )
}
