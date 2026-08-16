"use client";

import Image from "next/image";
import { Landmark } from "lucide-react";
import { BANK_ACCOUNTS } from "@/lib/event-config";

export function BankTransferInfo() {
  return (
    <div>
      <p className="flex items-center gap-2 text-sm font-medium text-ink/80 dark:text-blush-100/80">
        <Landmark className="h-4 w-4 text-blush-500" />
        Método de pago: transferencia bancaria
      </p>

      <div className="mt-3 flex flex-col gap-4 rounded-3xl bg-mauve-50 p-5 dark:bg-white/5">
        {BANK_ACCOUNTS.map((acc) => (
          <div key={acc.id} className="flex items-start gap-4">
            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-white p-2 shadow-soft">
              <Image
                src={acc.logo}
                alt={`Logo de ${acc.bank}`}
                fill
                sizes="56px"
                className="object-contain p-1"
              />
            </span>
            <div className="text-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-blush-600 dark:text-blush-300">
                {acc.bank}
              </p>
              <p className="mt-1 text-ink/70 dark:text-blush-100/70">
                <span className="font-medium text-ink dark:text-blush-50">Titular:</span>{" "}
                {acc.titular}
              </p>
              <p className="text-ink/70 dark:text-blush-100/70">
                <span className="font-medium text-ink dark:text-blush-50">Cédula:</span>{" "}
                {acc.cedula}
              </p>
              <p className="text-ink/70 dark:text-blush-100/70">
                <span className="font-medium text-ink dark:text-blush-50">Cuenta:</span>{" "}
                {acc.account}
              </p>
              <p className="text-ink/70 dark:text-blush-100/70">
                <span className="font-medium text-ink dark:text-blush-50">Correo:</span>{" "}
                {acc.email}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-ink/50 dark:text-blush-100/50">
        Una vez realices la transferencia, envía tu comprobante al WhatsApp de
        la Comunidad Volver a Ti para confirmar tu boleta.
      </p>
    </div>
  );
}
