"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamPhotos = [
  {
    src: "/images/equipo/team-1.jpg",
    alt: "Equipo de Volver a Ti posando juntas, sonriendo",
  },
  {
    src: "/images/equipo/team-2.jpg",
    alt: "Equipo de Volver a Ti riendo juntas en un momento espontáneo",
  },
];

export function Team() {
  return (
    <section id="equipo" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {teamPhotos.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-soft"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, 45vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-8 max-w-2xl text-balance text-center font-display text-xl italic leading-relaxed text-ink/80 dark:text-blush-100/80"
          >
            &ldquo;Sola avanzas rápido, pero en compañía llegas más lejos.
            Quiero presentarte a mi equipo: un grupo de mujeres que le ha
            puesto el alma a este proyecto, para que tú puedas vivir la
            experiencia más transformadora, acompañada y respaldada en cada
            paso.&rdquo;
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
