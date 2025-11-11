import React from "react";
import { Feature } from "@/types/feature";
import { motion } from "framer-motion";

export default function Feature({ feature }: { feature: Feature }) {
  const { icon, title, alt } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark z-40 rounded-lg border border-white bg-white p-7.5 transition-all xl:p-12.5"
      >
        <div className="relative flex items-center justify-center rounded-[4px]">
          <img src={icon} alt={alt} />
        </div>
        <h3 className="xl:text-itemtitle mt-7.5 mb-5 text-xl font-semibold text-black dark:text-white">
          {title}
        </h3>
      </motion.div>
    </>
  );
}
