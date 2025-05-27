"use client";

import { FaArrowRight} from "react-icons/fa";
import Link from "next/link";
interface contact {
  
  heading: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
  getStarted: {title:string;
    url:string;
  };
  ourPlans: {

    title: string;
    url:string;
  },
  card1: {

    fontAwesomeTag: string,
    heading: string;
    description: string,
    url:string;
  },
  card2: {

    fontAwesomeTag: string,
    heading: string;
    description: string,
    url:string;
  },
  card3: {

    fontAwesomeTag: string,
    heading: string;
    description: string,
    url:string;
  },
  card4: {
   
    fontAwesomeTag: string,
    heading: string;
    description: string,
    url:string;
  },
  backgroundimage: {
    alternativeText:string;
     formats: { large: { url: string } } };

}
export default function ContactSection({contactData}:{contactData:contact}) {
 

  return (
    <div>

{
   contactData? (<div className="relative text-white py-20 px-4 md:px-16 bg-cover bg-center" style={{ backgroundImage: `url(${contactData?.backgroundimage?.formats?.large.url})` }}>
      <div className="absolute inset-0 bg-[#253745e6] opacity-90"></div>

      <div className="relative flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left Side - Title and Heading */}
        <div className="md:w-2/5">
          <span className="text-green-500 text-sm uppercase font-bold">{contactData?.title}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            {contactData?.heading}
          </h2>
        </div>

        {/* Right Side - Description & Buttons */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <p className="text-gray-300 mb-4">
           {contactData?.paragraph1}
          </p>
          <p className="text-gray-300 mb-6">
            {contactData?.paragraph2}
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Link href={`/${contactData?.getStarted?.url}`} className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 w-full md:w-auto">{contactData?.getStarted?.title}</Link>
            <Link href={`/${contactData?.ourPlans?.url}`} className="bg-gray-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-600 w-full md:w-auto">{contactData?.ourPlans?.title}</Link>
          </div>
        </div>
      </div>

      {/* Slider Section - Responsive */}
      <div className="relative flex justify-center mt-16 overflow-hidden">
        <div className="flex overflow-x-auto space-x-6 px-4 md:px-0 snap-x snap-mandatory">
     
            <div className="w-80 bg-white p-6 flex justify-center rounded-lg text-black shadow-lg border-t-4 border-green-500 flex flex-col items-center text-center snap-center flex-shrink-0">
           <div className="text-4xl">
            <i className={contactData?.card1?.fontAwesomeTag}></i>
            </div> 
              <h3 className="text-xl font-bold mt-4">{contactData?.card1?.heading}</h3>
              <p className="text-gray-600 mt-2">{contactData?.card1?.description}</p>
              <Link 
                href={`/${contactData?.card1?.url}`}  // Navigate based on the card's buttonLink
                className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                <FaArrowRight />
              </Link>
            </div>
            <div className="w-80 bg-white p-6 flex justify-center rounded-lg text-black shadow-lg border-t-4 border-green-500 flex flex-col items-center text-center snap-center flex-shrink-0">
            <div className="text-4xl">
            <i className={contactData?.card2?.fontAwesomeTag}></i>
            </div> 
              <h3 className="text-xl font-bold mt-4">{contactData?.card2?.heading}</h3>
              <p className="text-gray-600 mt-2">{contactData?.card2?.description}</p>
              <Link 
                href={`/${contactData?.card2?.url}`}  // Navigate based on the card's buttonLink
                className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                <FaArrowRight />
              </Link>
            </div>
            <div className="w-80 bg-white p-6 flex justify-center rounded-lg text-black shadow-lg border-t-4 border-green-500 flex flex-col items-center text-center snap-center flex-shrink-0">
            <div className="text-4xl">
            <i className={contactData?.card3?.fontAwesomeTag}></i>
            </div> 
              <h3 className="text-xl font-bold mt-4">{contactData?.card3?.heading}</h3>
              <p className="text-gray-600 mt-2">{contactData?.card3?.description}</p>
              <Link 
                href={`/${contactData?.card3?.url}`}  // Navigate based on the card's buttonLink
                className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                <FaArrowRight />
              </Link>
            </div>
            <div className="w-80 bg-white p-6 flex justify-center rounded-lg text-black shadow-lg border-t-4 border-green-500 flex flex-col items-center text-center snap-center flex-shrink-0">
            <div className="text-4xl">
            <i className={contactData?.card4?.fontAwesomeTag}></i>
            </div> 
              <h3 className="text-xl font-bold mt-4">{contactData?.card4?.heading}</h3>
              <p className="text-gray-600 mt-2">{contactData?.card4?.description}</p>
              <Link 
                href={`/${contactData?.card4?.url}`}  // Navigate based on the card's buttonLink
                className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                <FaArrowRight />
              </Link>
            </div>
        </div>
      </div>
    </div>):(<div>Loading...</div>) }   </div>
  );
}
