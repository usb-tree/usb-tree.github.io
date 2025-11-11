"use client";

import React from "react";
import featuresData from "./featuresData";
import Feature from "./Feature";
import SectionHeader from "@/components/Common/SectionHeader";

function renderFeature(feature: any, key: number) {
  return <Feature feature={feature} key={key} />;
}

export default function Features() {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-15 lg:py-20 xl:py-25">
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Features",
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-2 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map(renderFeature)}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
}
