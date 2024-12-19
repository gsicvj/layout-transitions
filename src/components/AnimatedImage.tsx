"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <motion.div
      initial={{ scaleY: 0.5 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <Image aria-hidden src={src} alt={alt} width={width} height={height} />
    </motion.div>
  );
}
