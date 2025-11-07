import Image from "next/image";
import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import Skill from "./skill";
import { skillsData } from "./skillsData";

export default function Contact() {
  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 pb-10 md:px-8 2xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "Who made this",
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
            <div className="shadow-solid-8 dark:border-strokedark w-full rounded-lg bg-white p-7.5 md:w-3/5 lg:w-3/4 xl:p-15 dark:border dark:bg-black">
              <p className="text-body">
                I'm Alastair, Software Engineer from Glasgow,Scotland, Currently
                living in Oregon, USA.
              </p>
              <p className="text-body">
                I am currently open to new work opportunities.
              </p>

              <h3 className="text-body py-5">I'm skilled in</h3>
              <div>
                {skillsData.map((skill, index) => (
                  <Skill key={index} word={skill.word} />
                ))}
              </div>
              <a
                href="http://www.linkedin.com/in/alastair-ozmond-108512179"
                rel="noopener"
                target="_blank"
              >
                <div className="highlight mt-10 rounded-lg p-3 text-center text-black">
                  Now accepting applications for employers
                </div>
              </a>
            </div>

            <div className="w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15">
              <h2 className="text-2xl font-semibold text-black dark:text-white">
                About me
              </h2>
              <div className="mb-7">
                <h3 className="mb-4 font-medium whitespace-nowrap text-black dark:text-white">
                  Junior full-stack developer
                </h3>

                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.linkedin.com/in/alastair-ozmond-108512179/"
                    rel="noopener"
                    target="_blank"
                    className="flex items-center"
                  >
                    <img
                      src="https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff"
                      alt="Linkedin logo"
                    />
                  </a>
                  <a
                    href="https://github.com/AOzmond"
                    rel="noopener"
                    target="_blank"
                    className="flex items-center"
                  >
                    <img
                      src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white"
                      alt="GitHub logo"
                      className="w-auto"
                    />
                  </a>
                  <a
                    href="https://bsky.app/profile/alastair-ozmond.bsky.social"
                    rel="noopener"
                    target="_blank"
                    className="flex items-center"
                  >
                    <img
                      src="https://img.shields.io/badge/Bluesky-0285FF?logo=bluesky&logoColor=fff"
                      alt="Bluesky logo"
                      className="w-auto"
                    />
                  </a>
                  <a
                    href="https://dev.to/alastair_ozmond_347af2033"
                    rel="noopener"
                    target="_blank"
                    className="flex"
                  >
                    <img
                      src="https://img.shields.io/badge/Dev.to-0A0A0A?logo=devdotto&logoColor=white"
                      alt="Dev.to logo"
                      className="w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
}
