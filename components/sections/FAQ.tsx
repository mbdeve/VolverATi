"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EVENT } from "@/lib/event-config";

const faqs = [
  {
    q: "¿Qué incluye el boleto?",
    a: `Acceso completo al evento de ${EVENT.durationLabel.toLowerCase()}, materiales, refrigerios, sesiones de meditación, conferencias y certificado de participación.`,
  },
  {
    q: "¿Puedo cambiar la fecha de mi boleto?",
    a: "Los boletos son válidos únicamente para la fecha del evento. En caso de fuerza mayor, contáctanos con al menos 5 días de anticipación.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Aceptamos tarjeta de crédito, tarjeta de débito, transferencia bancaria y pago móvil.",
  },
  {
    q: "¿Hay política de reembolso?",
    a: "Sí, puedes solicitar reembolso hasta 7 días antes del evento. Después de ese plazo, el boleto podrá transferirse a otra persona.",
  },
  {
    q: "¿Necesito experiencia previa en meditación?",
    a: "No. Volver a Ti está diseñado para todos los niveles, desde quienes recién comienzan hasta practicantes con experiencia.",
  },
  {
    q: "¿Cómo recibo mi boleto después de comprar?",
    a: "Al confirmar tu pago recibirás un código QR y un PDF descargable con tu boleto, enviado también a tu correo electrónico.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mauve-600 dark:text-blush-300">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink dark:text-blush-50 sm:text-5xl">
            Resolvemos tus dudas
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-14 max-w-3xl"
        >
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
