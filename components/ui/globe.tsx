"use client";
import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

export function World({ globeConfig, data, moroccoPoint, htmlElementsData }: { globeConfig: any; data: any[]; moroccoPoint?: any; htmlElementsData?: any[] }) {
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = globeRef.current;

    // Auto-rotate
    if (globeConfig.autoRotate) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = globeConfig.autoRotateSpeed || 0.5;
    }

    // Initial position - centered
    if (globeConfig.initialPosition) {
      globe.pointOfView(
        {
          lat: globeConfig.initialPosition.lat,
          lng: globeConfig.initialPosition.lng,
          altitude: globeConfig.initialPosition.altitude || 2.5,
        },
        0
      );
    }
  }, [globeConfig]);

  const arcs = data.filter((d) => d.startLat && d.startLng && d.endLat && d.endLng);
  
  // Morocco point data for highlighting
  const pointsData = moroccoPoint ? [moroccoPoint] : [];

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
      backgroundColor="rgba(0,0,0,0)"
      pointsData={pointsData}
      pointLat={(d: any) => d.lat}
      pointLng={(d: any) => d.lng}
      pointColor={(d: any) => d.color || "#FF0000"}
      pointRadius={(d: any) => d.size || 12}
      pointLabel={(d: any) => d.label || ""}
      pointResolution={2}
      htmlElementsData={htmlElementsData || []}
      htmlElement={(d: any) => {
        if (d && d.html) {
          return d.html;
        }
        return null;
      }}
      onGlobeReady={() => {
        // Ensure globe is fully visible and centered
        if (globeRef.current) {
          globeRef.current.controls().minDistance = 150;
          globeRef.current.controls().maxDistance = 500;
          globeRef.current.controls().enableZoom = true;
          globeRef.current.controls().enableRotate = true;
        }
      }}
    />
  );
}

