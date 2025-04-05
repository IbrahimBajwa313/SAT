import { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper";
import IntroCard from "../components/IntroCard";
import HelpCounter from "../components/HelpCounter";
import { useInView } from "react-hook-inview";
import Services2 from "../components/Services2";
import AboutUs from "../components/AboutUs";
import FAQs from "../components/FAQs";
import Collabrators from "../components/Collabrators";
import About from "../components/About";
import HeroBanner from "../components/HeroBanner";
import DonationTransparency from "../components/transparency";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [ref, inView] = useInView();

  return (
    <main className="overflow-hidden w-[100%] z-20">
      <HeroBanner />
        <AboutUs />  
      <Wrapper className="bg-blue-50 pt-20 poppins-medium flex flex-col gap-20">
        {/* <About />   */}
        <DonationTransparency />
        
        <Services2 />
        {/* <Collabrators /> */}
        {/* <FAQs /> */}
      </Wrapper>
      <HelpCounter />
    </main>
  );
}
