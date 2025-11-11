"use client";

import { motion } from "framer-motion";

type HeaderInfo = {
  title: string;
};

export default function SectionHeader({
  headerInfo,
}: {
  headerInfo: HeaderInfo;
}) {
  const { title } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
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
        className="mx-auto text-center"
      >
        <div className="bg-zumthor dark:border-strokedark dark:bg-blacksection mb-10 inline-block rounded-full px-4.5 py-1.5 dark:border">
          <span className="text-sectiontitle font-medium text-black dark:text-white">
            {title}
          </span>
        </div>
      </motion.div>
      {/* <!-- Section Title End --> */}
    </>
  );
}
