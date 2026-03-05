import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuSection from "./components/Menu";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

export default function Home() {
  return (<>
  <Navbar/>
  <Hero/>
  <About/>
  <MenuSection/>
  <Gallery/>
  <Reservation/>
  <Footer/>
  </>
  );
}
