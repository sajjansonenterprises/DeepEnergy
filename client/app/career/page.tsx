

import { FaHome, FaBriefcase, FaUsers, FaCheckCircle } from "react-icons/fa";
import Navbar from "../home-component/Navbar";
import Link from "next/link";
import { Metadata } from "next";
import Footer from "../ucomponent/Footer";
export const metadata: Metadata = {
  title: "Career With US"
};
export default function CareerPage() {
  const jobListings = [
    { title: "Biomass Engineer", location: "Ghaziabad, India", type: "Full-Time", description: "Design and implement innovative biomass energy solutions." },
    { title: "Mechanical Engineer", location: "Ghaziabad, India", type: "Full-Time", description: "Work on high-efficiency biomass processing equipment." },
    { title: "Sales Executive", location: "Remote", type: "Part-Time", description: "Drive sales and expand our market reach in the biomass sector." },
    { title: "Marketing Specialist", location: "New Delhi, India", type: "Full-Time", description: "Lead marketing campaigns to promote sustainable energy solutions." }
  ];

  return (
    <div>
      <Navbar />
      
        {/* Breadcrumb Section */}
        <div className="relative w-full h-[650px] bg-cover bg-center flex items-center px-6 text-center md:text-left md:justify-start" style={{ backgroundImage: "url('https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundColor: "rgb(27 26 26 / 68%)", backgroundBlendMode: "overlay" }}>
        <div className="absolute top-5 left-5 text-white text-sm flex items-center">
          <FaHome className="mr-2" />
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Career</span>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className=" bg-opacity-50 p-6 md:p-10 rounded-lg text-white flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl font-bold">Career With Us</h1>
            <p className="mt-4 text-lg max-w-2xl">Explore exciting career opportunities and become part of our innovative team. At Deep Enterprises, we believe in fostering talent and providing the best work environment to help you grow professionally.

</p>
<div className="flex mt-6 space-x-4">
              <Link href="/services" className="flex items-center bg-white text-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200">Get Started </Link>
            
            </div>  
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-black">Build Your Future With Us</h2>
        <p className="text-gray-600 mt-4">Explore exciting career opportunities and become part of our innovative team.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {jobListings.map((job, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-start">
              <h3 className="text-xl font-bold text-green-500">{job.title}</h3>
              <p className="text-gray-600 mt-2">📍 {job.location} | 📋 {job.type}</p>
              <p className="text-gray-600 mt-2">{job.description}</p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Work With Us? */}
      <section className="py-20 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-black">Why Work With Deep Enterprises?</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
            <FaUsers className="text-green-500 text-5xl" />
            <h3 className="text-xl font-bold mt-4">Collaborative Environment</h3>
            <p className="text-gray-600 mt-2">We foster a team-oriented workspace.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
            <FaCheckCircle className="text-green-500 text-5xl" />
            <h3 className="text-xl font-bold mt-4">Career Growth</h3>
            <p className="text-gray-600 mt-2">Opportunities for learning and advancement.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
            <FaBriefcase className="text-green-500 text-5xl" />
            <h3 className="text-xl font-bold mt-4">Meaningful Impact</h3>
            <p className="text-gray-600 mt-2">Contribute to sustainable energy innovations.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-20 bg-green-500 text-white text-center">
        <h2 className="text-3xl font-bold">Start Your Journey With Us</h2>
        <p className="mt-4">Send your resume and join the team working towards a greener future.</p>
        <button className="mt-6 bg-white text-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200">
          Apply Now
        </button>
      </section>
      <Footer/>
    </div>
  );
}
