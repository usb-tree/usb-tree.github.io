import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import Download from "@/components/Download";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Home for Solid Pro",
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
