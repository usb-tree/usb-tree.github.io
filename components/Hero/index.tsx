"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="overflow-hidden pt-35 pb-20 md:pt-40 xl:pt-46 xl:pb-25">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                👀 Cross-platform USB device viewer, monitor, and logger
              </h4>
              <h1 className="xl:text-hero mb-5 pr-16 text-3xl font-bold text-black dark:text-white">
                The USB buddy you've always wanted
              </h1>
              <p>
                USB Tree is a free and open-source utility for when you're
                trying to see what USB devices are connected to which of your
                USB ports, when you want to find out what speeds they're running
                at, or you're diagnosing any USB device related issues.
              </p>
              <p className="mt-4">
                You'll quickly be able to identify which devices are connected
                or disconnected, and see if there's just too many USB devices
                connected to a single USB root hub.
              </p>
            </div>

            <div className="animate_right hidden px-15 md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <img
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  className="absolute top-0 -left-11.5"
                />
                <img
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  className="absolute right-0 bottom-0 z-10"
                />
                <img
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative aspect-320/330">
                  <Image
                    className="shadow-solid-l"
                    src="/images/hero/hero.gif"
                    alt="Hero"
                    unoptimized
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
