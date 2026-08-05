"use client";

import { motion } from "framer-motion";
import { Flower2, Mic2, Users2, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Flower2,
    title: "Meditación",
    description:
      "Sesiones guiadas de respiración y meditación para calmar la mente y volver al presente.",
  },
  {
    icon: Mic2,
    title: "Conferencias",
    description:
      "Charlas inspiradoras con expertas en bienestar, propósito y crecimiento personal.",
  },
  {
    icon: Users2,
    title: "Networking",
    description:
      "Un espacio para conectar con mujeres que están, como tú, en su propio camino de transformación.",
  },
  {
    icon: HeartHandshake,
    title: "Bienestar",
    description:
      "Actividades de autocuidado, aromaterapia y momentos pensados para nutrir cuerpo y alma.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 sm:py-32">
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
            Un día diseñado para ti
          </h2>
          <p className="mt-4 text-ink/65 dark:text-blush-100/70">
            Cuatro momentos que se entrelazan para ayudarte a reconectar
            contigo misma.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass-card relative overflow-hidden rounded-4xl p-8 transition-shadow hover:shadow-glow"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-blush-200/60 to-mauve-200/60 blur-2xl transition-transform duration-500 group-hover:scale-125" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blush-400 to-mauve-500 text-white shadow-soft">
                <b.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-6 font-display text-xl text-ink dark:text-blush-50">
                {b.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink/65 dark:text-blush-100/65">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
