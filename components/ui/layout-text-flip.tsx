"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutTextFlipProps {
  text: string;
  words: string[];
  className?: string;
}

export function LayoutTextFlip({ text, words, className }: LayoutTextFlipProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [words.length]);

  // Find the longest word to set width dynamically
  const maxWidth = Math.max(...words.map(word => word.length)) * 0.6; // Approximate width in em

  return (
    <div className={`inline-flex items-center ${className || ""}`}>
      <span>{text}</span>
      <div className={`relative ml-2 inline-block h-[1.2em] overflow-hidden text-left`} style={{ width: `${maxWidth}em`, minWidth: '150px' }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWordIndex}
            initial={{ y: "100%", opacity: 0, rotateX: -90 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: "-100%", opacity: 0, rotateX: 90 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute left-0 top-0 inline-block w-full text-primary-500 font-bold font-tech"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {words[currentWordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

