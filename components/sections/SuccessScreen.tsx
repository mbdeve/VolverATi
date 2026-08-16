"use client";

import * as React from "react";
import { motion } from "framer-motion";
import QRCode from "qrcode";
import { CheckCircle2, Download, Mail, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatRD } from "@/lib/utils";
import type { TicketFormValues } from "@/lib/ticket-schema";
import { EVENT, TICKET_TYPES, getTicketPrice } from "@/lib/event-config";

interface SuccessScreenProps {
  orderId: string;
  data: TicketFormValues;
  onReset: () => void;
}

export function SuccessScreen({ orderId, data, onReset }: SuccessScreenProps) {
  const [qrDataUrl, setQrDataUrl] = React.useState<string | null>(null);
  const [emailSent, setEmailSent] = React.useState(false);
  const ticketLabel =
    TICKET_TYPES.find((t) => t.id === data.ticketType)?.label ?? "Boleta";
  const total = data.quantity * getTicketPrice(data.ticketType);

  React.useEffect(() => {
    QRCode.toDataURL(
      JSON.stringify({
        orderId,
        name: data.fullName,
        ticketType: data.ticketType,
        quantity: data.quantity,
        event: EVENT.name,
      }),
      { margin: 1, width: 220, color: { dark: "#8F3D22", light: "#00000000" } }
    ).then(setQrDataUrl);
  }, [orderId, data]);

  const handleDownloadPdf = () => {
    // Genera un "PDF" simple del lado del cliente a partir de una vista imprimible.
    window.print();
  };

  const handleSendEmail = () => {
    setEmailSent(true);
    window.setTimeout(() => setEmailSent(false), 3500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card mx-auto max-w-lg rounded-4xl p-8 text-center sm:p-10"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.15 }}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blush-400 to-mauve-500 text-white shadow-glow"
      >
        <CheckCircle2 className="h-8 w-8" />
      </motion.div>

      <h3 className="mt-6 font-display text-2xl text-ink dark:text-blush-50 sm:text-3xl">
        ¡Gracias, {data.fullName.split(" ")[0]}!
      </h3>
      <p className="mt-2 text-sm text-ink/60 dark:text-blush-100/60">
        Registramos tu reserva para <strong>{EVENT.name}</strong>. Realiza la
        transferencia por el monto indicado y envía tu comprobante al
        WhatsApp de la Comunidad Volver a Ti para confirmar tu lugar. Te
        esperamos el {EVENT.dateLabel}.
      </p>

      <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-blush-50 px-4 py-2 text-sm font-medium text-mauve-700 dark:bg-white/10 dark:text-blush-100">
        Número de orden: <span className="font-semibold">{orderId}</span>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="rounded-3xl bg-white p-4 shadow-soft">
          {qrDataUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={qrDataUrl} alt={`Código QR del boleto, orden ${orderId}`} width={180} height={180} />
          ) : (
            <div className="h-[180px] w-[180px] animate-pulse rounded-xl bg-blush-100" />
          )}
        </div>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-4 rounded-3xl bg-white/60 p-5 text-left text-sm dark:bg-white/5">
        <div>
          <dt className="text-ink/50 dark:text-blush-100/50">Tipo de boleta</dt>
          <dd className="font-medium text-ink dark:text-blush-50">{ticketLabel}</dd>
        </div>
        <div>
          <dt className="text-ink/50 dark:text-blush-100/50">Cantidad</dt>
          <dd className="font-medium text-ink dark:text-blush-50">{data.quantity}</dd>
        </div>
        <div>
          <dt className="text-ink/50 dark:text-blush-100/50">Total a transferir</dt>
          <dd className="font-medium text-ink dark:text-blush-50">{formatRD(total)}</dd>
        </div>
        <div>
          <dt className="text-ink/50 dark:text-blush-100/50">Correo</dt>
          <dd className="truncate font-medium text-ink dark:text-blush-50">{data.email}</dd>
        </div>
      </dl>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button onClick={handleDownloadPdf} className="w-full sm:w-1/2" variant="outline">
          <Download className="h-4 w-4" />
          Descargar PDF
        </Button>
        <Button onClick={handleSendEmail} className="w-full sm:w-1/2">
          <Mail className="h-4 w-4" />
          {emailSent ? "¡Enviado!" : "Enviar por correo"}
        </Button>
      </div>

      <button
        onClick={onReset}
        className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-ink/50 hover:text-mauve-600 dark:text-blush-100/50 dark:hover:text-blush-200"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        Comprar otro boleto
      </button>
    </motion.div>
  );
}
