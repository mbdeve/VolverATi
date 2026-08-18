export const EVENT = {
  name: "Volver a Ti",
  tagline: "Segunda Edición — Sanar, Crecer, Florecer",
  date: new Date("2026-10-04T09:00:00-04:00"),
  dateLabel: "Domingo, 4 de octubre de 2026",
  timeLabel: "9:00 a.m. – 7:00 p.m.",
  durationLabel: "Un día completo de experiencia",
  venue: "Villa Tabiki, Las Terrenas",
  totalSeats: 120,
  seatsLeft: 38,
  currency: "RD$",
  whatsapp: "18494941176",
  whatsappLabel: "849-494-1176",
  /**
   * URL de la aplicación web de Google Apps Script que recibe cada
   * reserva, la agrega a la hoja "Reservas" y envía la notificación
   * por correo. Ver README para instrucciones de cómo generarla.
   */
  sheetsWebhookUrl:
    "https://script.google.com/macros/s/AKfycbzLIxgMkOaYpkdwnObYY9syV7rBs7sMyFrF5kPctbpQFfXCzEB7CjMNha-SITZ2hFrM/exec",
};

export const TICKET_TYPES = [
  {
    id: "estandar",
    label: "Boleta Estándar",
    price: 5595,
    benefits: [
      "Acceso a buffet y bebidas no alcohólicas",
      "Bolsa de regalo",
      "Acceso a todas las actividades y dinámicas del evento",
    ],
  },
  {
    id: "vip",
    label: "Boleta VIP",
    price: 8595,
    benefits: [
      "Todos los beneficios de la Boleta Estándar",
      "Asientos preferenciales en conferencias y áreas de actividades",
      "Bolsa de regalo Premium",
      "Acceso ilimitado al Open Bar de cócteles",
    ],
  },
] as const;

export type TicketTypeId = (typeof TICKET_TYPES)[number]["id"];

export function getTicketPrice(typeId: TicketTypeId) {
  return TICKET_TYPES.find((t) => t.id === typeId)?.price ?? 0;
}

/** Único método de pago disponible: transferencia bancaria. */
export const BANK_ACCOUNTS = [
  {
    id: "banreservas",
    bank: "Banreservas (Ahorros)",
    logo: "/images/bancos/banreservas.jpg",
    titular: "Yokaira Altagracia Mercedes Reynoso",
    cedula: "402-2317764-9",
    account: "9608109843",
    email: "yokaira.mr@hotmail.com",
  },
  {
    id: "bhd",
    bank: "Banco BHD (Ahorros)",
    logo: "/images/bancos/bhd.jpg",
    titular: "Yokaira Mercedes",
    cedula: "402-2317764-9",
    account: "29931260011",
    email: "yokaira.mr@hotmail.com",
  },
] as const;
