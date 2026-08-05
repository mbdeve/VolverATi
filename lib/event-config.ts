export const EVENT = {
  name: "Volver a Ti",
  tagline: "Evento de Reconexión, Bienestar y Transformación",
  date: new Date("2026-10-17T09:00:00-04:00"),
  dateLabel: "Sábado, 17 de octubre de 2026",
  timeLabel: "9:00 a.m. — 5:00 p.m.",
  durationLabel: "8 horas de experiencia",
  venue: "Salón Jardín Botánico, Santo Domingo",
  totalSeats: 180,
  seatsLeft: 47,
  pricePerTicket: 5000,
  currency: "RD$",
};

export const PAYMENT_METHODS = [
  { id: "credito", label: "Tarjeta de crédito" },
  { id: "debito", label: "Tarjeta de débito" },
  { id: "transferencia", label: "Transferencia bancaria" },
  { id: "pago-movil", label: "Pago móvil" },
] as const;

export type PaymentMethodId = (typeof PAYMENT_METHODS)[number]["id"];
