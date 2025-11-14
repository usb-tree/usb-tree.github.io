import { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Download from "@/components/Download";
import Contact from "@/components/Contact";

const siteUrl = "https://usb-tree.github.io/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "USB Tree - A cross-platform USB device tree viewer and monitor",

  // other metadata
  description:
    "USB Tree - A free, open-source desktop app for Windows and Linux. View connected USB devices in a tree structure and monitor real-time connection changes.",

  openGraph: {
    title: "USB Tree - A cross-platform USB device tree viewer and monitor",
    description:
      "USB Tree - A free, open-source desktop app for Windows and Linux. View connected USB devices in a tree structure and monitor real-time connection changes.",
    images: [
      {
        url: "/images/socialshare.png",
        width: 1200,
        height: 630,
        alt: "USB Tree - Your multiplatform USB buddy",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "USB Tree - A cross-platform USB device tree viewer and monitor",
    description:
      "USB Tree - A free, open-source desktop app for Windows and Linux. View connected USB devices in a tree structure and monitor real-time connection changes.",
    images: ["/images/socialshare.png"],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Download />
      <Features />
      <Contact />
    </main>
  );
}
