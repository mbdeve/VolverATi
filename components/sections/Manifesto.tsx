"use client";

import { motion } from "framer-motion";

export function Manifesto() {
  return (
    <section id="sanar-crecer-florecer" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-mauve-600 dark:text-blush-300">
            Sanar
            <span className="h-1 w-1 rounded-full bg-blush-400" />
            Crecer
            <span className="h-1 w-1 rounded-full bg-blush-400" />
            Florecer
          </span>

          <p className="mt-8 text-balance font-display text-2xl italic leading-relaxed text-ink dark:text-blush-50 sm:text-3xl">
            Volver a Ti es una experiencia transformadora para mujeres,
            creada para sanar, crecer y florecer. Un espacio donde
            conectarás contigo misma, fortalecerás tu bienestar físico,
            mental y espiritual, y encontrarás herramientas para vivir una
            vida con mayor paz, propósito y plenitud.
          </p>

          <p className="mt-6 text-balance text-base leading-relaxed text-ink/60 dark:text-blush-100/60">
            Además, cada evento contribuye a brindar apoyo en salud mental a
            mujeres que lo necesitan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
