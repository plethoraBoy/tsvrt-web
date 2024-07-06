import Image from "next/image";
import AboutUsSection from "./section/AboutUs";
import WhyUsSection from "./section/WhyUs";
import EventsSection from "./section/Events";
import GallerySection from "./section/Gallery";
import ContactSection from "./section/ContactUs";
import BookATableSection from "./section/BookaTable";
import Footer from "./section/Footer";
import MenuSection from "./section/Menu";
import HeroSection from "./section/Hero2";
import FeedbackMarquee from "./components/ui/Marquee-card";


export default function Home() {
  return (
    <main>
      {/* <HeroSection /> */}
      <HeroSection />
      <AboutUsSection />
      <WhyUsSection />
      <EventsSection />
      <MenuSection />
      <GallerySection />
      <FeedbackMarquee />
      <BookATableSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
