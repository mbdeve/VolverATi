"use client";

import Image from "next/image";
import { Landmark } from "lucide-react";
import { BANK_ACCOUNTS } from "@/lib/event-config";

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.29.58-.36.77-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.81.86.26.13.44.19.5.3.07.11.07.62-.17 1.3Z" />
    </svg>
  );
}

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

      <div className="mt-4 rounded-2xl bg-blush-50 p-4 dark:bg-white/5">
        <p className="text-xs font-semibold uppercase tracking-wide text-blush-600 dark:text-blush-300">
          Después de pagar
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-ink/70 dark:text-blush-100/70">
          Envía la imagen de tu comprobante de transferencia a cualquiera de
          estos números para confirmar tu boleta:
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          <a
            href="https://wa.me/18494941176"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-mauve-700 shadow-soft transition-colors hover:bg-blush-100 dark:bg-white/10 dark:text-blush-100"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
            (849) 494-1176
          </a>
          <a
            href="https://wa.me/18296670611"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-mauve-700 shadow-soft transition-colors hover:bg-blush-100 dark:bg-white/10 dark:text-blush-100"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
            (829) 667-0611
          </a>
        </div>
      </div>
    </div>
  );
}
