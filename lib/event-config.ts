export const EVENT = {
  name: "Volver a Ti",
  tagline: "Segunda Edición — Sanar, Crecer, Florecer",
  date: new Date("2026-10-04T08:00:00-04:00"),
  dateLabel: "Sábado, 4 de octubre de 2026",
  timeLabel: "8:00 a.m. en adelante",
  durationLabel: "Un día completo de experiencia",
  venue: "Villa Tabiki, Las Terrenas",
  totalSeats: 120,
  seatsLeft: 38,
  currency: "RD$",
};

export const TICKET_TYPES = [
  {
    id: "estandar",
    label: "Boleta Estándar",
    price: 5595,
    benefits: [
      "Acceso al buffet de desayuno, almuerzo, bebidas (no alcohólicas) y postres",
      "Bolsa de regalo",
      "Acceso a todas las actividades y dinámicas del evento",
    ],
  },
  {
    id: "vip",
    label: "Boleta VIP",
    price: 8595,
    benefits: [
      "Preferencia en asientos en conferencias, yoga y pilates",
      "Bolsa de regalo premium",
      "Acceso al buffet de mariscos",
      "Acceso al open bar (cócteles)",
    ],
  },
] as const;

export type TicketTypeId = (typeof TICKET_TYPES)[number]["id"];

export function getTicketPrice(typeId: TicketTypeId) {
  return TICKET_TYPES.find((t) => t.id === typeId)?.price ?? 0;
}

export const PAYMENT_METHODS = [
  { id: "credito", label: "Tarjeta de crédito" },
  { id: "debito", label: "Tarjeta de débito" },
  { id: "transferencia", label: "Transferencia bancaria" },
  { id: "pago-movil", label: "Pago móvil" },
] as const;

export type PaymentMethodId = (typeof PAYMENT_METHODS)[number]["id"];
