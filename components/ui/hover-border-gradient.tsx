"use client";
import React, { ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Component = "button",
  ...props
}: {
  children: ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  href?: string;
  [key: string]: any;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 500,
    damping: 100,
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 500,
    damping: 100,
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isLink = Component === "a" || Component === Link || props.href;

  return (
    <div
      className={`relative group ${containerClassName || ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-green-500 to-primary-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse"></div>
        <div className="relative bg-black rounded-lg">
          <Component
            className={`relative flex items-center justify-center px-8 py-4 transition-all duration-200 ${className || ""}`}
            {...props}
          >
            {children}
          </Component>
        </div>
      </motion.div>
    </div>
  );
};

