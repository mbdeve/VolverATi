"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { formatRD } from "@/lib/utils";
import { TICKET_TYPES } from "@/lib/event-config";

export function TicketPricing() {
  return (
    <section id="boletas-info" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mauve-600 dark:text-blush-300">
            Pre-ventas disponibles
          </span>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink dark:text-blush-50 sm:text-5xl">
            Boletas
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-soft"
        >
          <Sparkles className="h-4 w-4 shrink-0" />
          Si compras en pre-venta, tienes un masaje incluido durante el evento
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {TICKET_TYPES.map((ticket, i) => {
            const isVip = ticket.id === "vip";
            return (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={
                  "relative overflow-hidden rounded-4xl border-t-4 glass-card p-8 " +
                  (isVip ? "border-gold-500" : "border-blush-500")
                }
              >
                {isVip && (
                  <span className="absolute right-6 top-6 flex items-center gap-1 rounded-full bg-gold-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-600 dark:text-gold-400">
                    <Sparkles className="h-3 w-3" /> VIP
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blush-600 dark:text-blush-300">
                  {ticket.id === "vip" ? "Boleta VIP" : "Boleta estándar"}
                </p>
                <p className="mt-2 font-display text-4xl font-semibold text-ink dark:text-blush-50">
                  {formatRD(ticket.price)}{" "}
                  <span className="text-base font-normal text-ink/50 dark:text-blush-100/50">
                    {ticket.id === "estandar" && "p/p"}
                  </span>
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {ticket.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-ink/70 dark:text-blush-100/70">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blush-100 text-blush-600 dark:bg-white/10 dark:text-blush-200">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 flex max-w-4xl items-start gap-3 rounded-3xl border-2 border-gold-400 bg-gold-500/10 p-6 text-sm leading-relaxed text-ink/80 shadow-soft dark:border-gold-500/60 dark:bg-gold-500/10 dark:text-blush-100/80"
        >
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
          <div>
            <p>
              <strong className="text-ink dark:text-blush-50">Ambas boletas</strong>{" "}
              incluyen un masaje si son compradas en pre-venta.
            </p>
            <p className="mt-2">
              <strong className="text-ink dark:text-blush-50">No incluye:</strong>{" "}
              hospedaje.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
