"use client";

import { motion } from "framer-motion";
import { Clock, Timer, Users } from "lucide-react";
import { useCountdown } from "@/hooks/use-countdown";
import { EVENT } from "@/lib/event-config";

const details = [
  { icon: Clock, label: "Hora", value: EVENT.timeLabel },
  { icon: Timer, label: "Duración", value: EVENT.durationLabel },
  {
    icon: Users,
    label: "Cupos disponibles",
    value: `${EVENT.seatsLeft} de ${EVENT.totalSeats}`,
  },
];

const countdownUnits = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Seg" },
] as const;

export function EventInfo() {
  const countdown = useCountdown(EVENT.date);
  const seatsPercent = Math.round((EVENT.seatsLeft / EVENT.totalSeats) * 100);

  return (
    <section id="evento" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mauve-600 dark:text-blush-300">
            Cuenta regresiva
          </span>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink dark:text-blush-50 sm:text-5xl">
            {EVENT.dateLabel}
          </h2>
        </motion.div>

        {/* Contador regresivo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-12 flex max-w-xl justify-center gap-3 sm:gap-5"
        >
          {countdownUnits.map((unit) => (
            <div
              key={unit.key}
              className="glass-card flex w-20 flex-col items-center rounded-3xl py-4 sm:w-24"
            >
              <span className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                {String(countdown[unit.key]).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[11px] font-medium uppercase tracking-widest text-ink/50 dark:text-blush-100/60">
                {unit.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Tarjetas de información */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
          {details.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card flex items-start gap-4 rounded-3xl p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blush-100 to-mauve-100 text-mauve-600 dark:from-white/10 dark:to-white/5 dark:text-blush-200">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-blush-100/50">
                  {item.label}
                </p>
                <p className="mt-1 font-display text-lg text-ink dark:text-blush-50">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Barra de disponibilidad de cupos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8 max-w-3xl"
        >
          <div className="glass-card rounded-3xl p-6">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-ink dark:text-blush-50">
                Cupos ocupados
              </span>
              <span className="text-mauve-600 dark:text-blush-200">
                {100 - seatsPercent}% reservado
              </span>
            </div>
            <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-blush-100 dark:bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${100 - seatsPercent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full rounded-full btn-gradient"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
