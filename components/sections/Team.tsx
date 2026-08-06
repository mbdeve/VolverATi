"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

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
          {/* Placeholder: reemplazar por la foto real del equipo cuando esté disponible */}
          <div className="relative aspect-video overflow-hidden rounded-4xl bg-gradient-to-br from-blush-200 to-blush-300 shadow-soft dark:from-white/10 dark:to-white/5">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-ink/60 dark:text-blush-100/60">
              <Users className="h-9 w-9" />
              <p className="text-sm font-medium">
                Foto del equipo Volver a Ti — Segunda edición
              </p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
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
