"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/AuroraBackground";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <AuroraBackground dense />

      <div className="container-px relative z-10 mx-auto grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div style={{ y: textY, opacity }} className="order-2 text-center lg:order-1 lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-mauve-700 dark:text-blush-100"
          >
            <Sparkle className="h-3.5 w-3.5 text-blush-500" />
            Segunda edición
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-balance font-display text-5xl font-medium leading-[1.05] text-ink dark:text-blush-50 sm:text-6xl lg:text-7xl"
          >
            Volver <span className="italic text-gradient">a Ti</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mx-auto mt-6 max-w-lg text-balance text-lg leading-relaxed text-ink/70 dark:text-blush-100/70 lg:mx-0"
          >
            Un día completo para sanar, crecer y florecer. Saldrás de acá
            conectada contigo misma.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button asChild size="lg">
              <a href="#boletos">Reservar mi lugar</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#evento">Ver detalles del evento</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imageY }}
          className="relative order-1 mx-auto aspect-[4/5] w-full max-w-md lg:order-2"
        >
          {/* Anillos de respiración: elemento firma del diseño */}
          <motion.div
            className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blush-300/60 to-mauve-300/60 blur-2xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute -inset-10 -z-10 rounded-full border border-blush-300/40 animate-breathe" />
          <div className="absolute -inset-16 -z-10 rounded-full border border-mauve-300/30 animate-breathe [animation-delay:1.5s]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-full w-full overflow-hidden rounded-[3rem] shadow-glow ring-1 ring-white/60"
          >
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
              alt="Mujer meditando en calma, con los ojos cerrados y las manos en posición de gratitud"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mauve-900/25 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-3xl glass-card px-5 py-4 text-center shadow-soft"
          >
            <p className="font-display text-sm italic text-ink/80 dark:text-blush-50/90">
              &ldquo;Cada respiración es una invitación a volver a casa.&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#evento"
        aria-label="Desplázate para ver más"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-mauve-600 dark:text-blush-200"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
