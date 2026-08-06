"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { cn, formatRD } from "@/lib/utils";
import { TICKET_TYPES, type TicketTypeId } from "@/lib/event-config";

interface TicketTypePickerProps {
  value: TicketTypeId | undefined;
  onChange: (id: TicketTypeId) => void;
  error?: string;
}

export function TicketTypePicker({ value, onChange, error }: TicketTypePickerProps) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-ink/80 dark:text-blush-100/80">
        Tipo de boleta
      </legend>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {TICKET_TYPES.map((ticket) => {
          const selected = value === ticket.id;
          const isVip = ticket.id === "vip";
          return (
            <button
              key={ticket.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(ticket.id)}
              className={cn(
                "relative flex flex-col items-start rounded-3xl border p-5 text-left transition-all",
                selected
                  ? "border-blush-400 bg-white shadow-soft dark:bg-white/10"
                  : "border-blush-200 bg-white/50 hover:border-blush-300 dark:border-white/10 dark:bg-white/5"
              )}
            >
              {selected && (
                <motion.span
                  layoutId="ticket-type-highlight"
                  className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blush-50 to-blush-100 dark:from-white/10 dark:to-white/5"
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                />
              )}

              <div className="flex w-full items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-mauve-600 dark:text-blush-200">
                  {isVip && <Sparkles className="h-3.5 w-3.5 text-gold-500" />}
                  {ticket.label}
                </span>
                {selected && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blush-500 text-white">
                    <Check className="h-3 w-3" />
                  </span>
                )}
              </div>

              <p className="mt-1.5 font-display text-2xl font-semibold text-ink dark:text-blush-50">
                {formatRD(ticket.price)}{" "}
                <span className="text-sm font-normal text-ink/50 dark:text-blush-100/50">
                  p/p
                </span>
              </p>

              <ul className="mt-3 space-y-1.5">
                {ticket.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-1.5 text-xs leading-relaxed text-ink/60 dark:text-blush-100/60"
                  >
                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-blush-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>
      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
    </fieldset>
  );
}
