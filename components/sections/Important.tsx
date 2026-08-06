"use client";

import { motion } from "framer-motion";
import { MessageCircleHeart, ShieldCheck, Salad } from "lucide-react";

const beforeEvent = [
  {
    icon: MessageCircleHeart,
    text: "Una vez estés dentro del evento, estarás en un grupo de WhatsApp (Comunidad Volver a Ti) donde te brindaremos soporte de ayuda y toda la información de preparación para esta experiencia transformadora que vas a vivir en el evento.",
  },
  {
    icon: ShieldCheck,
    text: "Te brindaremos todos los protocolos de bioseguridad para tu tranquilidad y seguridad.",
  },
  {
    icon: Salad,
    text: "Es importante que nos informes si sufres de alergias a alguna condición de la naturaleza, alimentos o similares; o si no consumes ciertos alimentos, para tener las respectivas precauciones y atenderte con todo el amor y cuidado que mereces.",
  },
];

export function Important() {
  return (
    <section id="importante" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mauve-600 dark:text-blush-300">
            Antes de reservar
          </span>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink dark:text-blush-50 sm:text-5xl">
            Importante
          </h2>
        </motion.div>

        <div className="mx-auto mt-14 max-w-3xl">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.15em] text-blush-600 dark:text-blush-300"
          >
            Antes del evento
          </motion.h3>

          <div className="mt-5 flex flex-col gap-4">
            {beforeEvent.map((item, i) => (
              <motion.div
                key={item.text.slice(0, 20)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card flex items-start gap-4 rounded-3xl p-5"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blush-100 to-mauve-100 text-mauve-600 dark:from-white/10 dark:to-white/5 dark:text-blush-200">
                  <item.icon className="h-4.5 w-4.5" />
                </span>
                <p className="text-sm leading-relaxed text-ink/70 dark:text-blush-100/70">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-sm font-semibold uppercase tracking-[0.15em] text-blush-600 dark:text-blush-300"
          >
            Política de cancelación
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 rounded-3xl bg-blush-50/70 p-6 text-sm leading-relaxed text-ink/70 dark:bg-white/5 dark:text-blush-100/70"
          >
            <p>
              Una vez realizada tu reserva y confirmado tu cupo en el evento
              Volver a Ti, no se realizarán devoluciones de dinero por
              cancelación de tu participación. Esto se debe a los
              compromisos de alojamiento, transporte y logística que
              asumimos desde el momento en que separas tu lugar.
            </p>
            <p className="mt-4 italic text-ink/60 dark:text-blush-100/60">
              Peeero, ¡tranquila! Si ya dispusiste en tu corazón este tiempo
              para ti, confía en que todo se va a dar y fluirá de la mejor
              manera para que vivas esta experiencia transformadora que
              cambiará tu vida.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
