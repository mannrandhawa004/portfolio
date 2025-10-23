import Image from "next/image";
import DottedBackgound from "./components/DottedBackgound";
import HeroSection from "./components/HeroSection";
import AboutPage from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
export default function Home() {
  return (
    <>
    <DottedBackgound/>
    <HeroSection/>
    <AboutPage/>
    <Skills/>
    <Projects/>  
    <Contact/>
    
    </>
  );
}
