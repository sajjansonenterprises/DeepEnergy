import React from 'react'
import ContactComponent from './ContactComponent'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title:"Contact Us"
};
export default function page() {
  return (
    <div><ContactComponent/></div>
  )
}
