"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { LayoutTextFlip } from "./layout-text-flip";
import { useLanguage } from "@/contexts/LanguageContext";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const { t, dir } = useLanguage()
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="text-green-400 text-sm uppercase mb-2" dir={dir}>{t.experience.sectionLabel}</p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mb-4" dir={dir}>
            <LayoutTextFlip
              text=""
              words={t.experience.flipWords}
              className="text-2xl md:text-4xl lg:text-5xl"
            />
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl"
          dir={dir}
        >
          {t.experience.subtitle}
        </motion.p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex pt-10 md:pt-40 md:gap-10 ${
              dir === 'rtl' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div className={`sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full ${
              dir === 'rtl' ? 'md:flex-row-reverse' : ''
            }`}>
              <div className={`h-10 absolute w-10 rounded-full bg-black flex items-center justify-center ${
                dir === 'rtl' ? 'right-3 md:right-3' : 'left-3 md:left-3'
              }`}>
                <div className="h-4 w-4 rounded-full bg-gray-800 border border-gray-700 p-2" />
              </div>
              <h3 className={`hidden md:block text-xl md:text-5xl font-bold text-blue-500 ${
                dir === 'rtl' ? 'md:pr-20' : 'md:pl-20'
              }`}>
                {item.title}
              </h3>
            </div>
            <div className={`relative w-full ${
              dir === 'rtl' ? 'pr-20 pl-4 md:pr-4' : 'pl-20 pr-4 md:pl-4'
            }`}>
              <h3 className={`md:hidden block text-2xl mb-4 font-bold text-blue-500 ${
                dir === 'rtl' ? 'text-right' : 'text-left'
              }`}>
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className={`absolute top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ${
            dir === 'rtl' ? 'md:right-8 right-8' : 'md:left-8 left-8'
          }`}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
