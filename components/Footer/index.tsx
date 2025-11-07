"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <footer className="border-stroke dark:border-strokedark dark:bg-blacksection border-t bg-white">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20">
            <div className="flex flex-wrap justify-center gap-8">
              <a
                href="https://github.com/AOzmond/usb-tree"
                rel="noopener"
                target="_blank"
                className="footer-link"
              >
                USB Tree GitHub
              </a>
              <a
                href="https://github.com/usb-tree/usb-tree.github.io"
                rel="noopener"
                target="_blank"
                className="footer-link"
              >
                Website Source
              </a>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="border-stroke dark:border-strokedark flex flex-col flex-wrap items-center justify-center gap-5 border-t py-7">
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
            >
              <p className="text-body">
                &copy; {new Date().getFullYear()} Alastair Ozmond
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <ul className="flex items-center gap-5">
                <li>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="www.linkedin.com/in/alastair-ozmond-108512179"
                  >
                    <img
                      src="/images/icon/linkedin.svg"
                      alt="Linkedin logo"
                      className="img-svg-link w-6 dark:invert"
                    />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/AOzmond/usb-tree"
                  >
                    <img
                      src="/images/icon/github.svg"
                      alt="Github logo"
                      className="img-svg-link w-6 dark:invert"
                    />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://bsky.app/profile/alastair-ozmond.bsky.social"
                  >
                    <img
                      src="/images/icon/bluesky.svg"
                      alt="Bluesky logo"
                      className="img-svg-link w-6 dark:invert"
                    />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://dev.to/alastair_ozmond_347af2033"
                  >
                    <img
                      src="/images/icon/devdotto.svg"
                      alt="dev.to logo"
                      className="img-svg-link w-6 dark:invert"
                    />
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
}
