import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import Download from "@/components/Download";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "USB Tree - The USB device tree viewer and monitor.",

  // other metadata
  description: "This is the homepage for USB Tree",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Download />
      <Feature />
      <Contact />
    </main>
  );
}
