"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";

export default function Contact() {
  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 pb-10 md:px-8 2xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "Who made this",
            subtitle: "",
            description: ``,
          }}
        />
        <div className="max-w-c-1390 relative mx-auto px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute top-0 left-0 -z-1 h-2/3 w-full rounded-lg bg-linear-to-t from-transparent to-[#dee7ff47] dark:bg-linear-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt=""
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt=""
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top shadow-solid-8 dark:border-strokedark w-full rounded-lg bg-white p-7.5 md:w-3/5 lg:w-3/4 xl:p-15 dark:border dark:bg-black"
            >
              <p>
                I'm Alastair, Software Engineer from scottish flag
                Glasgow,Scotland, Currently living in usa flag Oregon, USA.
              </p>
              <p>I am currently open to new work opportunities.</p>

              <h3 className="py-5">Skills</h3>
              <p>
                Computer Computer Computer Computer Computer Computer Computer
                Computer Computer Computer Computer Computer Computer Computer
                Computer Computer Computer Computer Computer Computer
                Computer{" "}
              </p>
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
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="xl:text-sectiontitle2 mb-12.5 text-3xl font-semibold text-black dark:text-white">
                About me
              </h2>

              <div className="5 mb-7">
                <h3 className="text-metatitle3 mb-4 font-medium text-black dark:text-white">
                  Junior full-stack developer
                </h3>
                <div className="flex w-full flex-col text-left">
                  <button className="w-full text-left">Linkedin</button>
                  <button className="w-full text-left">GitHub</button>
                  <button className="w-full text-left">Bluesky</button>
                  <button className="w-full text-left">Dev.to</button>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="m-3 bg-blue-300 p-3 text-black">
            Now accepting applications for employers
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
}
