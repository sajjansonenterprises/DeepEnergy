import { Metadata } from "next";
import AboutComponent from "./AboutComponent";

interface AboutData {
  data: {
    About: {
      breadcrumb?: {
        bg_image?: { url?: string };
        pageTitle?: string;
        description?: string;
        button?: { label?: string; url?: string };
        videoButton?: { label?: string; url?: string };
        whoWeAreTitle?: string;
        whoWeAreDescription?: string;
        whoWeAreImage?: {
          formats?: { large?: { url?: string } };
          alternativeText?: string;
        };
      };
      missionVision?: { title: string; description: string }[];
      whyChooseUs?: { title: string; description: string }[];
      videoUrl?: string;
      videoTitle?: string;
      ctaTitle?: string;
      ctaDescription?: string;
      ctaButtonText?: string;
      whyChooseUsTitle?: string;
    };
  };
}
export const metadata: Metadata = {
  title: "About",
};
const getAboutPageData = async () => {
  const res = await fetch(
    `${process.env.serverurl}/api/about?populate[About][populate][breadcrumb][populate]=*&populate[About][populate][missionVision][populate]=*&populate[About][populate][whyChooseUs][populate]=*`,
    {
      next: { revalidate: 60 },
    }
  );
  return await res.json();
};
export default async function AboutPage() {
  const Data: AboutData = await getAboutPageData();

  return (
    <div>
      <AboutComponent aboutData={Data?.data?.About} />
    </div>
  );
}
