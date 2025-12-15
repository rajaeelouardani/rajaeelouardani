"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  // Morocco coordinates: 33.5731° N, 7.5898° W (Rabat)
  const moroccoLat = 33.5731;
  const moroccoLng = -7.5898;

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: moroccoLat, lng: moroccoLng, altitude: 2 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1", "#10b981", "#f59e0b"];

  // Arcs from Morocco to various international locations
  const sampleArcs = [
    {
      order: 1,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 40.7128, // New York
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[0],
    },
    {
      order: 1,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 51.5072, // London
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[1],
    },
    {
      order: 1,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 48.8566, // Paris
      endLng: 2.3522,
      arcAlt: 0.3,
      color: colors[2],
    },
    {
      order: 2,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 35.6762, // Tokyo
      endLng: 139.6503,
      arcAlt: 0.4,
      color: colors[3],
    },
    {
      order: 2,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: -33.8688, // Sydney
      endLng: 151.2093,
      arcAlt: 0.4,
      color: colors[4],
    },
    {
      order: 2,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 28.6139, // New Delhi
      endLng: 77.209,
      arcAlt: 0.3,
      color: colors[0],
    },
    {
      order: 3,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: -22.9068, // Rio de Janeiro
      endLng: -43.1729,
      arcAlt: 0.5,
      color: colors[1],
    },
    {
      order: 3,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 37.7749, // San Francisco
      endLng: -122.4194,
      arcAlt: 0.3,
      color: colors[2],
    },
    {
      order: 3,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 52.3676, // Amsterdam
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[3],
    },
    {
      order: 4,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 31.2304, // Shanghai
      endLng: 121.4737,
      arcAlt: 0.4,
      color: colors[4],
    },
    {
      order: 4,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 25.2048, // Dubai
      endLng: 55.2708,
      arcAlt: 0.3,
      color: colors[0],
    },
    {
      order: 4,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 55.7558, // Moscow
      endLng: 37.6173,
      arcAlt: 0.4,
      color: colors[1],
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-black relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🇲🇦</span>
            <h2 className="text-center text-xl md:text-4xl font-bold text-white">
              Working Internationally from Morocco
            </h2>
            <span className="text-4xl">🇲🇦</span>
          </div>
          <p className="text-center text-base md:text-lg font-normal text-gray-300 max-w-md mt-2 mx-auto">
            Providing web development and design services to clients worldwide. 
            Connecting Morocco to the global digital landscape.
          </p>
        </motion.div>

        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-black pointer-events-none select-none z-40" />

        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}

