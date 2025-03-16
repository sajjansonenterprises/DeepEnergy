"use client";

import { useState, useEffect } from "react";
import { FaGlobe, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../home-component/Navbar";
import ContactForm from "../formComponent/ContactForm";
import { usePageData } from "@/context/pageContext/PageContext";
import { useRouter } from "next/navigation";
import Footer from "../ucomponent/Footer";
import Preloader from "../ucomponent/Preloader";
interface Contact{
card:{
  background:{url:string}
    heading:string;
    paragraph1:string;
    paragraph2:string;
    link:{
        url:string;
        label:string;
    }
    EmailAdress:string;
    phoneNumber:string;
    city_country:string;
}
workingDaysAndHours:string
LocationUrl:string;


}
export default function ContactComponent() {
  const { serverurl } = usePageData(); // ✅ Get the base URL
  const [contactData, setContactData] = useState<Contact | null>(null);
  const [error, setError] = useState("");
const router=useRouter()
  // ✅ Fetch Contact Page Data from Strapi
  useEffect(() => {
    fetch(`${serverurl}/api/contact?populate[card][populate]=*`) // ✅ Fetching contact data
      .then((res) => res.json())
      .then((data) => setContactData(data?.data))
      .catch((err) => {
        console.error("Error fetching contact data:", err);
        setError("Failed to load contact details.");
      });

  }, [serverurl]);

  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  const fields = [
    { name: "Name", type: "text", placeholder: "Full Name", required: true },
    { name: "Email", type: "email", placeholder: "Email Address", required: true },
    { name: "PhoneNumber", type: "text", placeholder: "Phone Number", required: false },
    { name: "Message", type: "textarea", placeholder: "Your Message", required: true },
   
  ];
  const handleFormSubmit = async (formData: { [key: string]: string }) => {
    try {
      const response = await fetch(`${serverurl}/api/people-who-contact-uses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data:   {
          Name: formData.Name,   // ✅ Make sure these match Strapi field names
          Email: formData.Email,
          PhoneNumber: formData.PhoneNumber,
          Message: formData.Message,
          try: formData.try,
        }, }), // Strapi requires `{ data: yourData }`
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit form. Please try again.");
        console.error("Error:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
   <> {contactData?(<div className="relative w-full min-h-screen">
      <Navbar />

      {/* Map Section */}
      <div className="relative w-full h-[500px]">
        <iframe
          className="w-full h-full"
          src={contactData?.LocationUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003.291209048835!2d77.30433236621538!3d28.640381852235535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb37ccca2483%3A0x9eb4084ca17b1529!2sPatparganj%20Industrial%20Area%2C%20Patparganj%2C%20Delhi!5e0!3m2!1sen!2sin!4v1741754585944!5m2!1sen!2sin"}
          allowFullScreen

          width="600" height="450"          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Card Section */}
      <div className="relative flex justify-center mt-[-100px] px-4">
        <div className="w-full md:w-3/4 bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
          {/* Left Section - Contact Info */}
          <div
            className="w-full md:w-1/2 p-6 md:p-8 bg-cover bg-center flex flex-col justify-between"
            style={{
              backgroundImage:
                `url('${contactData?.card?.background?.url}')`,
              backgroundBlendMode: "overlay",
              backgroundColor: "#32c36cd9",
            }}
          >
            <h3 className="text-2xl font-bold text-white">{contactData?.card?.heading || "Connect with Us"}</h3>
            <p className="text-white mt-4">{contactData?.card?.paragraph1}</p>
            <p className="text-white mt-2">{contactData?.card?.paragraph2}</p>
            <button onClick={()=>router.push(`${contactData?.card?.link?.url}`)} className="mt-4 flex items-center bg-white text-green-500 px-6 py-2 rounded-md font-semibold hover:bg-gray-200">
              <FaGlobe className="mr-2" /> {contactData?.card?.link?.label}
            </button>
            <div className="mt-6 text-white">
              <p>
                <FaPhone className="inline mr-2" /> +91 {contactData?.card?.phoneNumber || "9999665619"}
              </p>
              <p>
                <FaEnvelope className="inline mr-2" /> {contactData?.card?.EmailAdress || "contact@deepenterprises.com"}
              </p>
              <p>
                <FaMapMarkerAlt className="inline mr-2" /> {contactData?.card?.city_country || "New Delhi, India"}
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          <ContactForm  fields={fields} onSubmit={handleFormSubmit}/>
        </div>
      </div>

      {/* Four Contact Cards Section */}
      <div className="mt-12 px-6 mb-12 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Email */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center border-t-4 border-green-500">
            <FaEnvelope className="text-green-500 text-3xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">Email Address</h3>
            <p className="text-gray-600 mt-1">{contactData?.card?.EmailAdress || "contact@deepenterprises.com"}</p>
          </div>

          {/* Card 2 - Phone */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center border-t-4 border-blue-500">
            <FaPhone className="text-blue-500 text-3xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">Phone Number</h3>
            <p className="text-gray-600 mt-1">+91 {contactData?.card?.phoneNumber || "9999665619"}</p>
          </div>

          {/* Card 3 - Address */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center border-t-4 border-red-500">
            <FaMapMarkerAlt className="text-red-500 text-3xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">Office Location</h3>
            <p className="text-gray-600 mt-1">{contactData?.card?.city_country || "New Delhi, India"}</p>
          </div>

          {/* Card 4 - Working Hours */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center border-t-4 border-purple-500">
            <FaGlobe className="text-purple-500 text-3xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">Working Hours</h3>
            <p className="text-gray-600 mt-1">{contactData?.workingDaysAndHours || "Mon-Sat, 10am-6pm"}</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>):(<Preloader/>)}</>
  );
}
