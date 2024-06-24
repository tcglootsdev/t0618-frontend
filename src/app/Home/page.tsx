import Hero from "@/components/Hero/Hero";
import Instagram from "@/components/Instagram/Instagram";
import AboutUS from "@/components/AboutUS/AboutUS";
import Service from "@/components/Service/Service";
import Gallery from "@/components/Gallery/Gallery";
import Testimoni from "@/components/Testinomi/Testimoni";
import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <AboutUS />
      <Service />
      <Gallery />
      <Testimoni />
      <Instagram />
      <ContactUs />
      <Footer />
    </div>
  );
}
