import React from 'react'
import ServiceComponent from './ServiceCategoryComponent'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title:"Service"
};
export default function ServicePage() {
  return (
    <div><ServiceComponent/></div>
  )
}
