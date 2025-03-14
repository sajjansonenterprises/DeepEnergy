"use client";

import { useRef,createContext, useContext, useEffect, useState, ReactNode } from "react";

import qs from 'qs';
import { usePageData } from "./PageContext";

// Build the query parameters
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


// ✅ Define the expected structure of your API response
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
  id: number;

    Home: {Header:[];
      About:about;
      Contact:contact;
      Service:service;
      Testimonial:testimonial;
      Project:project;
      Article:article;
      Brand:brand;
      Quote:quote
     
    }; // Customize this based on your API response
    
}

// ✅ Define the context structure
interface PageContextType {
  homeData: homeData | null;
  loading: boolean;
  error: string | null;
}

// ✅ Create the context with a default value

const PageContext = createContext<PageContextType | undefined>(undefined);

export const AllPageProvider = ({ children }: { children: ReactNode }) => {
  const [homeData, setHomeData] = useState<homeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const hasFetched = useRef(false);
  const {serverurl}=usePageData()
  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchPageData = async () => {
      try {
        const response = await fetch(`${serverurl}/api/all-page?${query}`);
        if (!response.ok) throw new Error("Failed to fetch page data");

        const data = await response.json();
        setHomeData(data?.data || null);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  return (
    <PageContext.Provider value={{ homeData, loading, error }}>
      {children}
    </PageContext.Provider>
  );
};

export const useAllPageData = (): PageContextType => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("useAllPageData must be used within a AllPageProvider");
  }
  return context;
};
