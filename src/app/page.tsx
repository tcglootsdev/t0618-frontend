import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero/Hero";
import Instagram from "@/components/Instagram/Instagram";
import AboutUS from "@/components/AboutUS/AboutUS";
import Service from "@/components/Service/Service";
import Gallery from "@/components/Gallery/Gallery";
import Testimoni from "@/components/Testinomi/Testimoni";
import ContactUs from "@/components/ContactUs/ContactUs";
import SignIn from '@/components/SignIn/SignIn';
import Register from '@/components/SignIn/Register'
import Forgot from "@/components/SignIn/Forgot";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <div className="bg-white">
      {/* <ScrollUp />
      <Hero />
      <AboutUS />
      <Service />
      <Gallery />
      <Testimoni />
      <Instagram />
      <ContactUs /> */}
      <Forgot />
    </div>
  );
}
