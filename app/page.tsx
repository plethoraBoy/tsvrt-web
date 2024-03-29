import Image from "next/image";
import HeroSection from "./section/Hero";
import AboutUsSection from "./section/AboutUs";
import WhyUsSection from "./section/WhyUs";
import EventsSection from "./section/Events";
import GallerySection from "./section/Gallery";
import ContactSection from "./section/ContactUs";
import BookATableSection from "./section/BookaTable";
import Footer from "./section/Footer";
import MenuSection from "./section/Menu";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <WhyUsSection />
      <EventsSection />
      <MenuSection />
      <GallerySection />
      <BookATableSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
