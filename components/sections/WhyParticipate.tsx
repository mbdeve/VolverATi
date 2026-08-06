"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const reasons = [
  "Sabes que ha llegado el momento de liberar el pasado, cerrar heridas y construir una vida plena, equilibrada y consciente, esa que realmente eliges para ti.",
  "Sientes que hay algo que no fluye como debería, y hay un llamado interno a despertar y fortalecer tu poder personal.",
  "Anhelas reconciliarte contigo misma, fortalecer tu autoestima y tu confianza, y reconocer que mereces amor, respeto, abundancia y milagros en tu vida.",
  "Buscas sanar para transformar cada vínculo y relación que forma parte de tu historia.",
  "Necesitas rodearte de mujeres que te acompañen con cariño y respeto, mujeres que compartan tu búsqueda y cuyas historias inspiren y transformen la tuya.",
  "Has tomado la decisión de regalarte tiempo exclusivo para ti, de ponerte en el centro de tu vida y apostar por tu propio crecimiento.",
  "Quieres alejarte del ruido cotidiano para reencontrarte contigo misma, con otras mujeres, con la naturaleza y con tu misión de vida.",
  "Ya no quieres solo imaginar la vida que sueñas ni seguir pensando en tu sanación: quieres actuar, retomar las riendas de tu camino y vivir la experiencia más poderosa y transformadora de toda tu vida.",
];

export function WhyParticipate() {
  return (
    <section id="por-que-participar" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mauve-600 dark:text-blush-300">
            Una invitación
          </span>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink dark:text-blush-50 sm:text-5xl">
            ¿Por qué deberías participar en el evento Volver a Ti?
          </h2>
        </motion.div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.slice(0, 24)}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card flex items-start gap-4 rounded-3xl p-5"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blush-400 to-blush-600 text-white">
                <Heart className="h-3.5 w-3.5" />
              </span>
              <p className="text-sm leading-relaxed text-ink/75 dark:text-blush-100/75">
                {reason}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
