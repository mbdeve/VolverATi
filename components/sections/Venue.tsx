"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const tiles = [
  {
    src: "/images/lugar/villa-completa.jpg",
    alt: "Vista frontal de Villa Tabiki, con su piscina y jardines rodeados de palmeras",
    caption: "El lugar del evento",
  },
  {
    src: "/images/lugar/meditacion-jardin.jpg",
    alt: "Mujer meditando en el jardín de la villa, rodeada de palmeras",
    caption: "Yoga y meditación",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
    alt: "Piedras de spa y toallas dispuestas para un masaje relajante",
    caption: "Masajes",
  },
  {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    alt: "Mesa con un desayuno saludable servido al aire libre",
    caption: "Stand de comida",
  },
];

const galleryStrip = [
  {
    src: "/images/lugar/piscina-mar.jpg",
    alt: "Piscina infinita de Villa Tabiki con vista al mar Caribe entre palmeras",
  },
  {
    src: "/images/lugar/villa-tabiki-letrero.jpg",
    alt: "Letrero de madera 'Villa Tabiki' entre las palmeras del jardín",
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

        {/* Grid principal 2x2 */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.caption}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-4xl shadow-soft"
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 640px) 90vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <span className="absolute bottom-4 left-5 font-display text-lg text-white drop-shadow">
                {tile.caption}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Nombre y descripción del lugar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-4xl rounded-3xl border-l-4 border-blush-500 bg-blush-50/70 p-6 text-center dark:bg-white/5 sm:p-8"
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

        {/* Franja adicional de fotos reales del lugar */}
        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {galleryStrip.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              className="relative aspect-[16/10] overflow-hidden rounded-4xl shadow-soft"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 90vw, 45vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
