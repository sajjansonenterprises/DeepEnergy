import { Metadata } from "next";
import AboutComponent from "./AboutComponent";

export const metadata: Metadata = {
  title:"About"
};

export default function AboutPage() {
  return (
    <div>
  
      <AboutComponent />
    </div>
  );
}
