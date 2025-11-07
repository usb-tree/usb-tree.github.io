import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import Download from "@/components/Download";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "USB Tree - The USB device tree viewer and monitor.",

  // other metadata
  description:
    "USB Tree - A free, open-source desktop app for Windows and Linux. View connected USB devices in a tree structure and monitor real-time connection changes.",
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
