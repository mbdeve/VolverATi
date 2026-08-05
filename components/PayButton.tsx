"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface PayButtonProps {
  loading?: boolean;
  disabled?: boolean;
  label?: string;
  loadingLabel?: string;
}

export function PayButton({
  loading = false,
  disabled = false,
  label = "Continuar con el Pago",
  loadingLabel = "Procesando pago...",
}: PayButtonProps) {
  const [ripples, setRipples] = React.useState<Ripple[]>([]);

  const addRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.4;
    const ripple: Ripple = {
      id: Date.now(),
      x: e.clientX - rect.left - size / 2,
      y: e.clientY - rect.top - size / 2,
      size,
    };
    setRipples((prev) => [...prev, ripple]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 650);
  };

  return (
    <button
      type="submit"
      onClick={addRipple}
      disabled={disabled || loading}
      className={cn(
        "btn-gradient relative flex h-16 w-full items-center justify-center gap-2.5 overflow-hidden rounded-full text-base font-semibold text-white shadow-soft transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-glow active:translate-y-0",
        "disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      )}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/40 animate-[ripple_0.65s_ease-out]"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}

      <AnimatePresence mode="wait" initial={false}>
        {loading ? (
          <motion.span
            key="loading"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="flex items-center gap-2.5"
          >
            <Loader2 className="h-5 w-5 animate-spin" />
            {loadingLabel}
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="flex items-center gap-2.5"
          >
            <Lock className="h-4 w-4" />
            {label}
          </motion.span>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes ripple {
          from {
            transform: scale(0);
            opacity: 0.6;
          }
          to {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </button>
  );
}
