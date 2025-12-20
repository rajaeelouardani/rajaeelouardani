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
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Return null if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  // Preload ALL images at once for instant loading with better error handling
  useEffect(() => {
    if (testimonials.length === 0) return;
    
    // Preload ALL testimonial images immediately
    const allImages = testimonials.map((t) => t.src).filter(Boolean);
    const loaded = new Set<string>();
    const errors = new Set<string>();

    allImages.forEach((src) => {
      if (src && !src.startsWith('http') && !src.startsWith('//')) {
        // Use link preload for better performance
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.setAttribute('fetchpriority', 'high');
        document.head.appendChild(link);
        
        // Also preload with Image object with proper error handling
        const img = new window.Image();
        img.onload = () => {
          loaded.add(src);
          setLoadedImages(new Set(loaded));
        };
        img.onerror = () => {
          errors.add(src);
          setImageErrors(new Set(errors));
          console.warn(`Failed to preload image: ${src}`);
        };
        img.src = src;
      }
    });

    // No cleanup needed - keep all images preloaded
  }, [testimonials]);

  // Helper function to get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

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
              <div className={`relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary-500/50 ${testimonials[active].src.includes('mcovery.webp') ? 'bg-white p-2' : 'bg-gray-800'}`}>
                {/* Placeholder with initials while loading or on error */}
                {(!loadedImages.has(testimonials[active].src) || imageErrors.has(testimonials[active].src)) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-primary-600/20">
                    <span className="text-white font-bold text-sm">
                      {getInitials(testimonials[active].name)}
                    </span>
                  </div>
                )}
                {/* Actual image */}
                {!imageErrors.has(testimonials[active].src) && (
                  <Image
                    src={testimonials[active].src}
                    alt={testimonials[active].name}
                    fill
                    className={`transition-opacity duration-300 ${
                      loadedImages.has(testimonials[active].src) ? 'opacity-100' : 'opacity-0'
                    } ${testimonials[active].src.includes('mcovery.webp') ? 'object-contain' : 'object-cover'}`}
                    sizes="56px"
                    priority={active <= 2}
                    loading={active <= 2 ? "eager" : "lazy"}
                    quality={60}
                    unoptimized={testimonials[active].src.startsWith('http') || testimonials[active].src.startsWith('//')}
                    onError={(e) => {
                      console.error(`❌ Failed to load testimonial image: ${testimonials[active].src}`, e);
                      const newErrors = new Set(imageErrors);
                      newErrors.add(testimonials[active].src);
                      setImageErrors(newErrors);
                    }}
                    onLoad={() => {
                      console.log(`✅ Successfully loaded testimonial image: ${testimonials[active].src}`);
                      const newLoaded = new Set(loadedImages);
                      newLoaded.add(testimonials[active].src);
                      setLoadedImages(newLoaded);
                    }}
                  />
                )}
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

