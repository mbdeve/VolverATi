"use client";

import { CreditCard, Landmark, Smartphone, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PAYMENT_METHODS, type PaymentMethodId } from "@/lib/event-config";

const ICONS: Record<PaymentMethodId, React.ComponentType<{ className?: string }>> = {
  credito: CreditCard,
  debito: Wallet,
  transferencia: Landmark,
  "pago-movil": Smartphone,
};

interface PaymentMethodPickerProps {
  value: PaymentMethodId | undefined;
  onChange: (id: PaymentMethodId) => void;
  error?: string;
}

export function PaymentMethodPicker({ value, onChange, error }: PaymentMethodPickerProps) {
  return (
    <div>
      <fieldset>
        <legend className="text-sm font-medium text-ink/80 dark:text-blush-100/80">
          Método de pago
        </legend>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {PAYMENT_METHODS.map((method) => {
            const Icon = ICONS[method.id];
            const selected = value === method.id;
            return (
              <button
                key={method.id}
                type="button"
                aria-pressed={selected}
                onClick={() => onChange(method.id)}
                className={cn(
                  "relative flex flex-col items-center gap-2 rounded-2xl border px-3 py-4 text-center transition-all",
                  selected
                    ? "border-mauve-400 bg-white shadow-soft dark:bg-white/10"
                    : "border-blush-200 bg-white/50 hover:border-mauve-300 dark:border-white/10 dark:bg-white/5"
                )}
              >
                {selected && (
                  <motion.span
                    layoutId="payment-highlight"
                    className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blush-100 to-mauve-100 dark:from-white/10 dark:to-white/5"
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}
                <Icon
                  className={cn(
                    "h-5 w-5",
                    selected ? "text-mauve-600 dark:text-blush-100" : "text-ink/50 dark:text-blush-100/50"
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-medium",
                    selected ? "text-ink dark:text-blush-50" : "text-ink/60 dark:text-blush-100/60"
                  )}
                >
                  {method.label}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>
      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
    </div>
  );
}
