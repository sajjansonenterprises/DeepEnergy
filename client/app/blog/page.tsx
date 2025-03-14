import React from 'react'
import BlogComponent from './BlogComponent';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title:"Blog"
};
export default function BlogPage() {
  return (
    <div><BlogComponent/></div>
  )
}
