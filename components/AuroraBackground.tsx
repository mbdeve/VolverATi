"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

/**
 * Fondo con formas orgánicas ("blobs") en degradado rosa/morado
 * y partículas flotando suavemente. Puramente decorativo.
 *
 * Las partículas se generan únicamente en el cliente (useEffect) para
 * evitar errores de hidratación: Math.random() produciría valores
 * distintos en el render de servidor y en el de cliente.
 */
export function AuroraBackground({ dense = false }: { dense?: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: dense ? 22 : 12 }).map((_, i) => ({
        id: i,
        size: 3 + Math.random() * 6,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 10 + Math.random() * 14,
        delay: Math.random() * 6,
      }))
    );
  }, [dense]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-aurora" />

      <motion.div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush-300/40 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-40 h-96 w-96 rounded-full bg-mauve-300/40 blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blush-200/50 blur-3xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.8)] dark:bg-blush-200/40"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ y: [0, -24, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
