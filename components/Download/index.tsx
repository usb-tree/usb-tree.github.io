"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/Common/SectionHeader";
import { useEffect } from "react";

export default function FunFact() {
  const [selectedOS, setSelectedOS] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Win")) {
      setSelectedOS("windows");
    } else if (userAgent.includes("Linux")) {
      setSelectedOS("linux");
    }
  }, []);

  const downloadUrls: Record<string, string> = {
    windows:
      "https://github.com/AOzmond/usb-tree/releases/latest/download/usb-tree-windows-amd64.zip",
    linux:
      "https://github.com/AOzmond/usb-tree/releases/latest/download/usb-tree-linux-amd64.tar.gz",
  };

  return (
    <>
      {/* <!-- ===== Download Start ===== --> */}
      <section className="px-4 py-15 md:px-8 lg:py-17 2xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "Download USB Tree for Desktop",
            subtitle: "",
            description: ``,
          }}
        />
        <div className="max-w-c-1390 dark:bg-blacksection dark:stroke-strokedark relative z-1 mx-auto rounded-lg bg-linear-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 xl:py-27.5 dark:bg-linear-to-t dark:from-transparent dark:to-transparent">
          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt=""
            className="absolute top-0 left-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt=""
            className="absolute top-0 left-0 -z-1 hidden dark:block"
          />
          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex flex-col text-start">
                <h3 className="xl:text-sectiontitle3 mb-2.5 text-3xl font-bold text-black dark:text-white">
                  Direct Download
                </h3>
                <select
                  className="lg:text-para2 mb-4 w-64 rounded-lg border border-gray-300 bg-white px-4 py-2 text-lg focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  value={selectedOS}
                  onChange={(e) => setSelectedOS(e.target.value)}
                >
                  <option value="">Select your OS</option>
                  <option value="windows">Windows x64 (.zip)</option>
                  <option value="linux">Linux x64 (.tar.gz)</option>
                </select>
                <a
                  className={`lg:text-para2 w-64 rounded-lg bg-blue-600 px-6 py-3 text-center text-lg font-semibold text-white transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:bg-blue-500 ${
                    selectedOS
                      ? "hover:bg-blue-700 dark:hover:bg-blue-600"
                      : "cursor-not-allowed opacity-50"
                  }`}
                  href={selectedOS ? downloadUrls[selectedOS] : "#"}
                  target="_blank"
                  rel="noopener"
                  onClick={(e) => {
                    if (!selectedOS) {
                      e.preventDefault(); // Prevent navigation if no OS is selected
                    }
                  }}
                >
                  Download
                </a>

                <a
                  rel="noopener"
                  target="_blank"
                  href="https://github.com/AOzmond/usb-tree"
                  className="lg:text-para2 mt-4 inline-block text-lg text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="xl:text-sectiontitle3 mb-2.5 text-3xl font-bold text-black dark:text-white">
                Packages for your OS
              </h3>
              <div className="flex flex-col gap-4 text-left">
                <p>AUR Package</p>
                <div className="rounded-lg bg-black/90 p-4 text-white">
                  <code className="block font-mono">usb-tree-app-bin</code>
                  <code className="block font-mono">usb-tree-app</code>
                </div>
                <p>Windows Package Manager</p>
                <div className="rounded-lg bg-black/90 p-4 text-white">
                  <code className="block font-mono">
                    winget install usb-tree-app
                  </code>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
}
