"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Creator() {
  return (
    <section id="creadora" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blush-100 via-blush-50 to-white dark:from-white/5 dark:via-transparent dark:to-transparent" />
      <div className="container-px relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto h-40 w-40 overflow-hidden rounded-full shadow-glow ring-4 ring-white dark:ring-white/10"
          >
            <Image
              src="/images/equipo/manuela-sarante.jpeg"
              alt="Manuela Sarante, creadora de Volver a Ti"
              fill
              sizes="160px"
              className="object-cover"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-8 max-w-xl text-balance font-display text-xl italic leading-relaxed text-ink dark:text-blush-50"
          >
            &ldquo;Hola, mi nombre es Manuela Sarante, creadora de Volver a
            Ti. Estoy muy feliz de que estés aquí, decidiéndote a dar este
            paso tan importante para ti. El 4 de octubre comenzamos juntas
            el camino correcto para sanar, crecer y florecer.&rdquo;
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 font-display text-lg text-blush-600 dark:text-blush-300"
          >
            Manuela Sarante
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
