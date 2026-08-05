"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 " +
        (scrolled
          ? "glass shadow-soft py-3"
          : "bg-transparent py-6")
      }
    >
      <div className="container-px mx-auto grid grid-cols-3 items-center">
        <div className="hidden sm:block" />

        <div className="col-span-2 flex items-center justify-between sm:col-span-1 sm:justify-self-center">
          <a href="#inicio" className="flex flex-col items-center gap-1 text-center">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blush-400 to-mauve-500 text-white shadow-soft">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold tracking-wide text-ink dark:text-blush-50">
              VOLVER A TI
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-mauve-600/80 dark:text-blush-200/70 md:block">
              Evento de Reconexión, Bienestar y Transformación
            </span>
          </a>
        </div>

        <div className="col-start-3 flex items-center justify-end gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#boletos">Comprar Boleta</a>
          </Button>
        </div>
      </div>

      <div className="mt-3 flex justify-center sm:hidden">
        <Button asChild size="sm">
          <a href="#boletos">Comprar Boleta</a>
        </Button>
      </div>
    </motion.header>
  );
}
