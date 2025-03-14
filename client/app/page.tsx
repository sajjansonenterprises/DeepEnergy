"use client"

import TopBar from "./home-component/TopBar";
import Navbar from "./home-component/Navbar";
import Header1 from "./home-component/Header1";
import AboutSection from "./home-component/AboutSection";
import ContactSection from "./home-component/ContactSection";
import ServiceSection from "./home-component/ServiceSection";
import AchievementsAndTestimonials from "./home-component/AchivementsAndTestimonials";
import LatestProjects from "./home-component/LatestProjects";
import BrandSection from "./home-component/BrandSection";
import QuoteSection from "./home-component/QuoteSection";
import ArticleSection from "./home-component/ArticleSection";
import Footer from "./ucomponent/Footer";
import Preloader from "./ucomponent/Preloader";
import { useAllPageData } from "@/context/pageContext/PageComponentContext";



export default function Home() {
const {homeData}=useAllPageData()
  
  
  return (
   <> {homeData?(<div>
      {/* ✅ Proper use of Head from next/head */}
   


      <main>
        <TopBar />
        <Navbar />
        <Header1 />
        <AboutSection />
        <ContactSection />
        <ServiceSection />
        <AchievementsAndTestimonials />
        <LatestProjects />
        <BrandSection />
        <QuoteSection />
        <ArticleSection />
        <Footer/>
      </main>
    </div>):(<Preloader/>)}</>
  );
}
