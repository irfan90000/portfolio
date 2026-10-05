import About from "../Components/About";
import Blog from "../Components/Blogs";
import Clients from "../Components/Clients";
import Contact from "../Components/ContactForm";
import CtaBanner from "../Components/CtaVanner";
import Footer from "../Components/Footer";
import Hero from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import Portfolios from "../Components/Portfolio";
import Process from "../Components/Process";
import Services from "../Components/Services";

export default function Portfolio() {
  return (
    <>
      <Hero />
      <About />
      <Process />
      <Portfolios />
      <CtaBanner />
      <Blog />
      <Services />
      <Clients />
      <Contact />
    </>
  );
}
