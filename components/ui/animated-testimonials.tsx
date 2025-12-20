"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Return null if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  // Preload next images for faster transitions
  useEffect(() => {
    if (testimonials.length === 0) return;
    
    // Preload current and next 2 images
    const imagesToPreload = [
      testimonials[active]?.src,
      testimonials[(active + 1) % testimonials.length]?.src,
      testimonials[(active + 2) % testimonials.length]?.src,
    ].filter(Boolean);

    imagesToPreload.forEach((src) => {
      if (src && !src.startsWith('http') && !src.startsWith('//')) {
        // Use link preload for better performance
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
        
        // Also preload with Image object as fallback
        const img = new window.Image();
        img.src = src;
      }
    });

    return () => {
      // Cleanup preload links
      imagesToPreload.forEach((src) => {
        if (src) {
          const link = document.querySelector(`link[href="${src}"]`);
          if (link) link.remove();
        }
      });
    };
  }, [active, testimonials]);

  useEffect(() => {
    if (testimonials.length === 0) return;
    
    intervalRef.current = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }, 10000); // Augmenté de 5s à 10s pour avoir le temps de lire

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActive(index);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="relative min-h-[500px] md:min-h-[600px] overflow-y-auto rounded-2xl bg-gradient-to-br from-gray-900 to-black p-8 md:p-12">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 h-full flex flex-col justify-between"
          >
            <div className="flex-1 flex flex-col justify-center">
              <div className="mb-6">
                <svg
                  className="h-8 w-8 text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-white mb-8 leading-relaxed">
                {testimonials[active].quote}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className={`relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary-500/50 ${testimonials[active].src.includes('mcovery.webp') ? 'bg-white p-2' : ''}`}>
                <Image
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  fill
                  className={testimonials[active].src.includes('mcovery.webp') ? 'object-contain' : 'object-cover'}
                  sizes="56px"
                  priority={active === 0 || active === 1}
                  loading={active <= 1 ? "eager" : "lazy"}
                  quality={90}
                  unoptimized={testimonials[active].src.startsWith('http') || testimonials[active].src.startsWith('//')}
                  onError={(e) => {
                    console.error(`❌ Failed to load testimonial image: ${testimonials[active].src}`, e);
                    const target = e.target as HTMLImageElement;
                    if (target.parentElement) {
                      target.parentElement.style.backgroundColor = 'rgba(100, 100, 100, 0.3)';
                    }
                    target.style.opacity = '0.5';
                    target.style.filter = 'grayscale(100%)';
                  }}
                  onLoad={() => {
                    console.log(`✅ Successfully loaded testimonial image: ${testimonials[active].src}`);
                  }}
                />
              </div>
              <div>
                <div className="text-white font-semibold text-base md:text-lg">
                  {testimonials[active].name}
                </div>
                <div className="text-gray-400 text-xs md:text-sm">
                  {testimonials[active].designation}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === index
                  ? "w-8 bg-primary-500"
                  : "w-2 bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

