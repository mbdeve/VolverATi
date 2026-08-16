"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const tiles = [
  {
    src: "/images/lugar/villa-completa.jpg",
    alt: "Vista frontal de Villa Tabiki, con su piscina y jardines rodeados de palmeras",
  },
  {
    src: "/images/lugar/piscina-mar.jpg",
    alt: "Piscina infinita de Villa Tabiki con vista al mar Caribe entre palmeras",
  },
  {
    src: "/images/lugar/villa-tabiki-letrero.jpg",
    alt: "Vista amplia de los jardines de Villa Tabiki, con una cabaña de palapa entre las palmeras",
  },
];

export function Venue() {
  return (
    <section id="lugar" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mauve-600 dark:text-blush-300">
            El escenario
          </span>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink dark:text-blush-50 sm:text-5xl">
            El lugar del encuentro
          </h2>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-4xl shadow-soft"
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 640px) 90vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-5xl rounded-3xl border-l-4 border-blush-500 bg-blush-50/70 p-6 text-center dark:bg-white/5 sm:p-8"
        >
          <p className="flex items-center justify-center gap-2 font-display text-2xl text-blush-600 dark:text-blush-300">
            <MapPin className="h-5 w-5" />
            Villa Tabiki — Las Terrenas
          </p>
          <p className="mt-2 italic text-ink/70 dark:text-blush-100/70">
            Ahí disfrutarás de esa sensación de tranquilidad y bienestar que
            te recargará el alma.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
