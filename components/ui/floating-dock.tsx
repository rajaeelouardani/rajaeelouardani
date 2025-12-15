"use client";
import React, { PropsWithChildren, useState, useRef } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

interface FloatingDockProps {
  items: DockItem[];
  mobileClassName?: string;
}

export function FloatingDock({ items, mobileClassName }: FloatingDockProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const mouseX = useMotionValue(Infinity);
  const dockRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dockRef.current) {
      const rect = dockRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(Infinity);
  };

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 ${mobileClassName || ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={dockRef}
        className="flex items-end gap-4 bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-full px-4 py-3 shadow-2xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        {items.map((item, index) => {
          const distance = useTransform(mouseX, (val) => {
            if (!dockRef.current) return 0;
            const items = dockRef.current.children;
            if (items[index]) {
              const bounds = (items[index] as HTMLElement).getBoundingClientRect();
              const dockBounds = dockRef.current.getBoundingClientRect();
              return (bounds.left + bounds.width / 2) - (dockBounds.left + val);
            }
            return 0;
          });

          const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
          const heightSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
          const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.5, 1]);

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

          return (
            <div key={item.title}>
              <Tooltip title={item.title}>
                <Link href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <motion.div
                    style={{ width, height, scale }}
                    className="relative flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 hover:border-primary-500 transition-colors cursor-pointer overflow-hidden group"
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 w-5 h-5 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <AnimatePresence>
                      {hovered === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, x: "-50%" }}
                          animate={{ opacity: 1, y: 0, x: "-50%" }}
                          exit={{ opacity: 0, y: 2, x: "-50%" }}
                          className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg border border-gray-700 shadow-lg"
                        >
                          {item.title}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              </Tooltip>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

const Tooltip = ({ children, title }: PropsWithChildren<{ title: string }>) => {
  return <>{children}</>;
};

