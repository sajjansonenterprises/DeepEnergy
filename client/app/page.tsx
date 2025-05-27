
import Header1 from "./home-component/Header1";
import AboutSection from "./home-component/AboutSection";
import ContactSection from "./home-component/ContactSection";
import ServiceSection from "./home-component/ServiceSection";
import AchievementsAndTestimonials from "./home-component/AchivementsAndTestimonials";
import LatestProjects from "./home-component/LatestProjects";
import BrandSection from "./home-component/BrandSection";
import QuoteSection from "./home-component/QuoteSection";
import ArticleSection from "./home-component/ArticleSection";
import Preloader from "./ucomponent/Preloader";
import qs from 'qs';
const query = qs.stringify({
  populate: {
    Home: {
      populate: {
        Header: {
          populate: '*'
        },
        About: {
          populate: '*'
        },
        Contact: {
          populate: '*'
        },
        Service: {
          populate: {
            services: {
              fields: ['Title', 'heading','iconFontAwesome',"slug"],
             populate:{
              Advantages:{
                populate:"*"
              },
              service_category:{
                populate:"*"
              }
             }
            }
          }
        },
        Testimonial: {
          populate: '*'
        },
        Project: {
          populate: {
            projects: {
              fields: ['slug', 'heading','title','description'],
             populate:{
              image:{
                populate:"*"
              }
             }
            }
          }
        },
        Brand: {
          populate: {
            brand_collabs:{
             populate:"*"
            }
          }
        },
        Article: {
          populate: {
            blogs: {
              fields: ['slug','title','description','createdAt','author'],
             populate:{
              image:{
                populate:"*"
              },
              categoryName:{
                populate:"*"
              },
             }
            }
          }
        },
        Quote:{
          populate:{
            LearnMore:{
              populate:"*"
            },
            OurCoreValues:{
              populate:"*"
            },
            background:{
              populate:"*"
            }
          }
        }
      }
    }
  }
}, {
  encodeValuesOnly: true // prettify URL
});
interface brand {
  heading: string;

  brand_collabs :[{ 
    brandNname: string;

  
  image: { 
    alternativeText:string;
    formats: { small: { url: string }; large: { url: string } } };}]
}
interface project {
  heading: string;
  title: string;
projects:[{  slug: string;
  title: string;
  heading: string;
  description: string;
  
  image: { 
    alternativeText:string;
    formats: { small: { url: string }; large: { url: string } } };}]
}
interface article{
  heading: string;

blogs:[{slug: string;
  title: string;
  heading: string;
  description: string;
  createdAt: string;
  author:string;
  categoryName:{
    categoryName:string
  }
  image: { 
    alternativeText:string;
    formats: { small: { url: string }; large: { url: string } } };}] 
}

interface about {
  happyClient: string;
  heading: string;
  title: string;
  ourMission: string;
  whoWeAre: string;
  ourVission: string;
  whyChooseUs: string;
  readMoreUrl: string;
  
  image: {
    alternativeText:string;
     formats: { large: { url: string } } };
}
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
interface service {
  
  heading: string;
  title: string;
  buttonTitle:string;
  services:[{heading:string;
    Title:string;
    iconFontAwesome:string
    Advantages:{a1:string;
      a2:string;
      a3:string;
    };
slug:string;
service_category:{
  categoryName: string;
  documentId: string;
  slug: string;
}
  }]

}
interface testimonial{
heading:string;
testimonials:[{name:string;
  feedback:string;
}]
}
interface quote{
  title:string;
  Heading:string;
  description:string;
  Advantage1:string;
  Advantage2:string;
  Advantage3:string;
  Advantage4:string;
  Advantage5:string;
  LearnMore:{
    label:string;
    url:string
  }
  OurCoreValues:{
    label:string;
    url:string
  }
  background: {
    alternativeText:string;
     formats: { large: { url: string } } };


}
interface homeData {
data:{  id: number;

    Home: {Header:[];
      About:about;
      Contact:contact;
      Service:service;
      Testimonial:testimonial;
      Project:project;
      Article:article;
      Brand:brand;
      Quote:quote
     
    };} // Customize this based on your API response
    
}
const getHomePageData = async () => {
  
        const response = await fetch(`${process.env.serverurl}/api/all-page?${query}`,
             {
      next: { revalidate: 60 },
    }
        );
        if (!response.ok) throw new Error("Failed to fetch page data");

        const data = await response.json();
       return data
    
    };
export default async function Home() {
  const Data:homeData= await getHomePageData()

  return (
   <> {Data?(<div>
      {/* ✅ Proper use of Head from next/head */}
   


      <main>

        <Header1 headerData={Data?.data?.Home?.Header}/>
        <AboutSection aboutData={Data?.data?.Home?.About }/>
        <ContactSection contactData={Data?.data?.Home.Contact}/>
        <ServiceSection serviceData={Data?.data?.Home?.Service}/>
        <AchievementsAndTestimonials testimonialData={Data?.data?.Home?.Testimonial}/>
        <LatestProjects projectData={Data?.data?.Home?.Project}/>
        <BrandSection brandData={Data?.data?.Home?.Brand}/>
        <QuoteSection Quote={Data?.data?.Home?.Quote}/>
        <ArticleSection articleData={Data?.data?.Home?.Article}/>
     
      </main>
    </div>):(<Preloader/>)}</>
  );
}
