"use client";
import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

export function World({ globeConfig, data }: { globeConfig: any; data: any[] }) {
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = globeRef.current;

    // Auto-rotate
    if (globeConfig.autoRotate) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = globeConfig.autoRotateSpeed || 0.5;
    }

    // Initial position
    if (globeConfig.initialPosition) {
      globe.pointOfView(
        {
          lat: globeConfig.initialPosition.lat,
          lng: globeConfig.initialPosition.lng,
          altitude: globeConfig.initialPosition.altitude || 2,
        },
        0
      );
    }
  }, [globeConfig]);

  const arcs = data.filter((d) => d.startLat && d.startLng && d.endLat && d.endLng);

  return (
    <Globe
      ref={globeRef}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      arcsData={arcs}
      arcStartLat={(d: any) => d.startLat}
      arcStartLng={(d: any) => d.startLng}
      arcEndLat={(d: any) => d.endLat}
      arcEndLng={(d: any) => d.endLng}
      arcColor={(d: any) => d.color || "#3b82f6"}
      arcAltitude={(d: any) => d.arcAlt || 0.1}
      arcStroke={(d: any) => d.stroke || 0.4}
      arcDashLength={globeConfig.arcLength || 0.9}
      arcDashGap={globeConfig.arcLength || 0.9}
      arcDashAnimateTime={globeConfig.arcTime || 1000}
      globeColor={globeConfig.globeColor || "#062056"}
      showAtmosphere={globeConfig.showAtmosphere !== false}
      atmosphereColor={globeConfig.atmosphereColor || "#FFFFFF"}
      atmosphereAltitude={globeConfig.atmosphereAltitude || 0.1}
      backgroundColor="rgba(0,0,0,0)"
    />
  );
}

