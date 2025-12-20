"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  // Log images for debugging
  if (typeof window !== 'undefined' && images.length > 0) {
    console.log('3D Marquee - Loading images:', images);
  }
  
  // Filter out invalid/empty images
  const validImages = images.filter(img => img && img.trim() !== '');
  
  // Duplicate images to create seamless loop
  const duplicatedImages = [...validImages, ...validImages, ...validImages];
  
  // Split the images array into 6 equal parts
  const chunkSize = Math.ceil(duplicatedImages.length / 6);
  const chunks = Array.from({ length: 6 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return duplicatedImages.slice(start, start + chunkSize);
  });
  
  // If no images, return empty div
  if (!validImages || validImages.length === 0) {
    console.warn('3D Marquee - No valid images provided');
    return <div className={cn("w-full h-full", className)} />
  }

  return (
    <div
      className={cn(
        "mx-auto block overflow-hidden rounded-2xl relative",
        className,
      )}
    >
      <div className="flex size-full items-center justify-center relative min-h-[600px]">
        <div className="size-[2000px] shrink-0 scale-50 sm:scale-75 lg:scale-125 relative">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
              transformStyle: "preserve-3d",
            }}
            className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid size-full origin-center grid-cols-6 gap-2 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-4"
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((image, imageIndex) => (
                  <div className="relative w-full" key={`${colIndex}-${imageIndex}-${image}`}>
                    <GridLineHorizontal className="-top-4" offset="20px" />
                    <motion.div
                      whileHover={{
                        y: -10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      key={`${colIndex}-${imageIndex}-${image}`}
                      className="relative w-[280px] sm:w-[300px] aspect-[970/700] rounded-lg overflow-hidden ring-2 ring-white/10 hover:ring-white/20 hover:shadow-2xl shadow-2xl bg-black/20"
                      style={{
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={image}
                          alt={`Project ${imageIndex + 1}`}
                          fill
                          className="object-cover rounded-lg"
                          sizes="(max-width: 640px) 280px, 300px"
                          loading="lazy"
                          quality={85}
                          unoptimized={image.startsWith('http') || image.startsWith('//')}
                          onError={(e) => {
                            console.error(`❌ Failed to load image: ${image}`, e);
                            const target = e.target as HTMLImageElement;
                            target.style.opacity = '0.5';
                            target.style.filter = 'grayscale(100%)';
                          }}
                          onLoad={() => {
                            console.log(`✅ Successfully loaded image: ${image}`);
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};
