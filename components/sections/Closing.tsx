"use client";

import { motion } from "framer-motion";

export function Closing() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-px mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl rounded-[2.5rem] bg-gradient-to-br from-blush-600 to-mauve-700 px-8 py-16 text-center text-white shadow-glow sm:px-14"
        >
          <h3 className="font-display text-3xl sm:text-4xl">
            Bienvenida a Volver a Ti
          </h3>
          <p className="mt-3 text-sm text-white/85 sm:text-base">
            Este es el comienzo de un nuevo capítulo en tu vida.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
