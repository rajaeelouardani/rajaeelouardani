"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import { useTheme } from "@/contexts/ThemeContext";

interface SocialLink {
  title: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    title: "Facebook",
    icon: IconBrandFacebook,
    href: "https://www.facebook.com/p/Rajae-Elouardani-100036596478135/",
  },
  {
    title: "LinkedIn",
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/rajae-elouardani-577892225/?originalSubdomain=ma",
  },
  {
    title: "GitHub",
    icon: IconBrandGithub,
    href: "https://github.com/rajaeelouardani",
  },
  {
    title: "X (Twitter)",
    icon: IconBrandX,
    href: "https://x.com/rajaeelouardani",
  },
  {
    title: "Instagram",
    icon: IconBrandInstagram,
    href: "https://www.instagram.com/rajaeelouardani/",
  },
];

function DockIcon({ item, index, mouseY, primaryColor, isLoading }: { 
  item: SocialLink; 
  index: number; 
  mouseY: any;
  primaryColor: string;
  isLoading: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  
  const distance = useTransform(mouseY, (val) => {
    if (!ref.current || val === Infinity) return 0;
    const bounds = ref.current.getBoundingClientRect();
    return Math.abs((bounds.top + bounds.height / 2) - (val as number));
  });

  const widthSync = useTransform(distance, [-40, 0, 40], [28, 36, 28]);
  const heightSync = useTransform(distance, [-40, 0, 40], [28, 36, 28]);
  const scaleSync = useTransform(distance, [-40, 0, 40], [1, 1.2, 1]);

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const height = useSpring(heightSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const scale = useSpring(scaleSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const IconComponent = item.icon;

  return (
    <Link
      ref={ref}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center rounded-lg transition-all duration-200 group"
    >
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-7 h-7 flex items-center justify-center"
          >
            <motion.div
              className="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        ) : (
          <motion.div
            style={{ width, height, scale }}
            className="relative flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 overflow-hidden"
            whileHover={{ 
              scale: 1.15,
              boxShadow: `0 0 15px ${primaryColor}60, 0 0 30px ${primaryColor}30`,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <IconComponent 
              className="h-3 w-3 text-gray-400 group-hover:text-white transition-colors z-10" 
              style={{
                filter: `drop-shadow(0 0 4px ${primaryColor}80)`,
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}40, transparent)`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 70 }}
        className="absolute right-full mr-3 px-3 py-1.5 bg-black/90 backdrop-blur-md text-white text-xs rounded-lg whitespace-nowrap shadow-xl pointer-events-none z-50 border border-white/20"
        style={{
          boxShadow: `0 10px 30px ${primaryColor}40`,
        }}
      >
        {item.title}
      </motion.div>
    </Link>
  );
}

export default function SocialDock() {
  const { primaryColor } = useTheme();
  const dockRef = useRef<HTMLDivElement>(null);
  const mouseY = useMotionValue(Infinity);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Set loading to false immediately on mount to show icons right away
    setIsLoading(false);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dockRef.current) {
      const rect = dockRef.current.getBoundingClientRect();
      mouseY.set(e.clientY);
    }
  };

  const handleMouseLeave = () => {
    mouseY.set(Infinity);
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={dockRef}
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-1.5 shadow-2xl"
        style={{
          boxShadow: `0 20px 60px ${primaryColor}20, 0 0 40px ${primaryColor}10`,
        }}
      >
        <div className="flex flex-col space-y-4">
          {socialLinks.map((item, index) => (
            <DockIcon 
              key={item.title}
              item={item} 
              index={index} 
              mouseY={mouseY}
              primaryColor={primaryColor}
              isLoading={isLoading}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
