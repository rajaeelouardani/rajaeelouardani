"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useLanguage } from "@/contexts/LanguageContext";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const { t, dir } = useLanguage();
  const [htmlElementsData, setHtmlElementsData] = useState<any[]>([]);
  
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
    initialPosition: { lat: 0, lng: 0, altitude: 2.5 }, // Centered view
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  
  // Create HTML element after component mounts
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const createMoroccoHtmlElement = () => {
      const container = document.createElement('div');
      container.style.width = '45px';
      container.style.height = '45px';
      container.style.transform = 'translate(-50%, -100%)';
      container.style.cursor = 'pointer';
      container.style.filter = 'drop-shadow(0 2px 6px rgba(255, 0, 0, 0.6))';
      container.style.zIndex = '9999';
      container.style.position = 'relative';
      container.style.pointerEvents = 'auto';
      
      const img = document.createElement('img');
      img.src = '/LOCALISATION ICOM.svg';
      img.alt = 'Morocco Location';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';
      img.style.position = 'relative';
      img.style.zIndex = '9999';
      
      container.appendChild(img);
      return container;
    };
    
    const element = createMoroccoHtmlElement();
    if (element) {
      setHtmlElementsData([{
        lat: moroccoLat,
        lng: moroccoLng,
        html: element
      }]);
    }
  }, []);

  // Green color for all arcs
  const greenColor = "#10b981"; // Tailwind green-500
  
  // Arcs from Morocco to various countries (all in green)
  const sampleArcs = [
    {
      order: 1,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 48.8566, // Paris, France
      endLng: 2.3522,
      arcAlt: 0.3,
      color: greenColor,
    },
    {
      order: 1,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 38.7223, // Lisbon, Portugal
      endLng: -9.1393,
      arcAlt: 0.3,
      color: greenColor,
    },
    {
      order: 1,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 40.7128, // New York, USA
      endLng: -74.006,
      arcAlt: 0.4,
      color: greenColor,
    },
    {
      order: 2,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 37.7749, // San Francisco, USA
      endLng: -122.4194,
      arcAlt: 0.4,
      color: greenColor,
    },
    {
      order: 2,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 51.5072, // London, UK
      endLng: -0.1276,
      arcAlt: 0.3,
      color: greenColor,
    },
    {
      order: 2,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 52.3676, // Amsterdam, Netherlands
      endLng: 4.9041,
      arcAlt: 0.3,
      color: greenColor,
    },
    {
      order: 3,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 35.6762, // Tokyo, Japan
      endLng: 139.6503,
      arcAlt: 0.5,
      color: greenColor,
    },
    {
      order: 3,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: -33.8688, // Sydney, Australia
      endLng: 151.2093,
      arcAlt: 0.5,
      color: greenColor,
    },
    {
      order: 3,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 31.2304, // Shanghai, China
      endLng: 121.4737,
      arcAlt: 0.4,
      color: greenColor,
    },
    {
      order: 4,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 25.2048, // Dubai, UAE
      endLng: 55.2708,
      arcAlt: 0.3,
      color: greenColor,
    },
    {
      order: 4,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: -22.9068, // Rio de Janeiro, Brazil
      endLng: -43.1729,
      arcAlt: 0.5,
      color: greenColor,
    },
    {
      order: 4,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 28.6139, // New Delhi, India
      endLng: 77.209,
      arcAlt: 0.4,
      color: greenColor,
    },
    {
      order: 5,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 55.7558, // Moscow, Russia
      endLng: 37.6173,
      arcAlt: 0.4,
      color: greenColor,
    },
    {
      order: 5,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 41.9028, // Rome, Italy
      endLng: 12.4964,
      arcAlt: 0.3,
      color: greenColor,
    },
    {
      order: 5,
      startLat: moroccoLat,
      startLng: moroccoLng,
      endLat: 52.5200, // Berlin, Germany
      endLng: 13.4050,
      arcAlt: 0.3,
      color: greenColor,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Fixed Title Section */}
      <div className="sticky top-20 z-50 bg-black/90 backdrop-blur-md py-4 border-b border-gray-800">
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
          className="max-w-7xl mx-auto px-4"
        >
          <div className="flex items-center justify-center gap-3 mb-2" dir={dir}>
            <span className="text-2xl md:text-4xl">🇲🇦</span>
            <h2 className="text-center text-xl md:text-4xl font-bold text-white" dir={dir}>
              {t?.services?.globeTitle || "Working Internationally from Morocco"}
            </h2>
            <span className="text-2xl md:text-4xl">🇲🇦</span>
          </div>
          <p className="text-center text-sm md:text-base lg:text-lg font-normal text-gray-300 max-w-md mt-2 mx-auto" dir={dir}>
            {t?.services?.globeDescription || "Providing web development and design services to clients worldwide. Connecting Morocco to the global digital landscape."}
          </p>
        </motion.div>
      </div>

      {/* Globe container - centered */}
      <div className="flex items-center justify-center py-10 md:py-20 h-auto min-h-[600px] md:min-h-[700px] relative">
        <div className="max-w-7xl mx-auto w-full relative h-full min-h-[600px] md:h-[40rem] px-4">
          <div className="w-full h-full max-w-6xl mx-auto relative flex items-center justify-center">
            <World data={sampleArcs} globeConfig={globeConfig} htmlElementsData={htmlElementsData} />
          </div>
          
          {/* Shadow gradient - reduced opacity and positioned below globe */}
          <div className="absolute w-full bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none select-none z-10" />
        </div>
      </div>
    </section>
  );
}

