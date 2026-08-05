"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Carolina Reyes",
    role: "Asistente edición 2025",
    quote:
      "Volver a Ti me regaló el permiso de pausar. Salí con una claridad que no sentía hacía años.",
  },
  {
    name: "María José Fermín",
    role: "Emprendedora",
    quote:
      "Las conferencias y la meditación guiada se sintieron hechas a mi medida. Un antes y un después.",
  },
  {
    name: "Lucía Peña",
    role: "Terapeuta ocupacional",
    quote:
      "La energía del lugar, las personas, todo estaba alineado para sanar. Repetiré cada año.",
  },
  {
    name: "Andrea Cabrera",
    role: "Diseñadora",
    quote:
      "Llegué agotada y me fui liviana. El espacio de networking fue tan cálido como profesional.",
  },
];

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (i: number) => setIndex((i + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonios"
      className="relative py-24 sm:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-px mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mauve-600 dark:text-blush-300">
            Testimonios
          </span>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink dark:text-blush-50 sm:text-5xl">
            Voces que ya volvieron a sí mismas
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-14 max-w-2xl">
          <Quote className="mx-auto h-9 w-9 text-blush-400" aria-hidden />

          <div
            className="relative mt-4 min-h-[220px]"
            role="region"
            aria-label="Carrusel de testimonios"
            aria-live="polite"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="glass-card rounded-4xl p-10 text-center"
              >
                <p className="text-balance font-display text-xl italic leading-relaxed text-ink dark:text-blush-50 sm:text-2xl">
                  &ldquo;{testimonials[index].quote}&rdquo;
                </p>
                <p className="mt-6 font-semibold text-mauve-700 dark:text-blush-200">
                  {testimonials[index].name}
                </p>
                <p className="text-sm text-ink/50 dark:text-blush-100/50">
                  {testimonials[index].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Testimonio anterior"
              onClick={() => goTo(index - 1)}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  aria-label={`Ir al testimonio de ${t.name}`}
                  onClick={() => goTo(i)}
                  className={
                    "h-2 rounded-full transition-all " +
                    (i === index
                      ? "w-6 bg-gradient-to-r from-blush-400 to-mauve-500"
                      : "w-2 bg-blush-200 dark:bg-white/15")
                  }
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Siguiente testimonio"
              onClick={() => goTo(index + 1)}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
