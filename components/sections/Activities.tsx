"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const activities = [
  {
    src: "/images/actividades/charlas.jpg",
    alt: "Concepto ilustrativo de una charla de Volver a Ti bajo una carpa, con asistentes sentadas frente al escenario",
    caption: "Charlas",
  },
  {
    src: "/images/actividades/pilates.jpg",
    alt: "Concepto ilustrativo de una clase de pilates al aire libre frente al mar, entre palmeras",
    caption: "Pilates",
  },
  {
    src: "/images/actividades/relajacion.jpg",
    alt: "Piscina de Villa Tabiki con vista al mar entre palmeras",
    caption: "Ejercicios de relajación",
  },
  {
    src: "/images/actividades/stand.jpg",
    alt: "Concepto ilustrativo de un stand de comida y bebidas al aire libre, entre palmeras, con la marca Volver a Ti",
    caption: "Stand — comida, bebidas, postres y cócteles",
  },
];

export function Activities() {
  return (
    <section id="actividades" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mauve-600 dark:text-blush-300">
            La experiencia
          </span>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink dark:text-blush-50 sm:text-5xl">
            Así se vivirá la experiencia
          </h2>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {activities.map((a, i) => (
            <motion.div
              key={a.caption}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-4xl shadow-soft"
            >
              <Image
                src={a.src}
                alt={a.alt}
                fill
                sizes="(max-width: 640px) 90vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <span className="absolute bottom-4 left-5 right-5 font-display text-lg text-white drop-shadow">
                {a.caption}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
