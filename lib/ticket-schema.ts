import { z } from "zod";

export const ticketFormSchema = z.object({
  fullName: z
    .string()
    .min(3, "Escribe tu nombre completo")
    .max(80, "El nombre es demasiado largo"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  phone: z
    .string()
    .min(10, "El teléfono debe tener al menos 10 dígitos")
    .regex(/^[0-9+()\s-]+$/, "Ingresa solo números y símbolos válidos"),
  city: z.string().min(2, "Ingresa tu ciudad"),
  province: z.string().min(2, "Selecciona tu provincia"),
  ticketType: z.enum(["estandar", "vip"], {
    errorMap: () => ({ message: "Selecciona un tipo de boleta" }),
  }),
  quantity: z.coerce.number().int().min(1).max(5),
  notes: z.string().max(300, "Máximo 300 caracteres").optional(),
  paymentMethod: z.enum(["credito", "debito", "transferencia", "pago-movil"], {
    errorMap: () => ({ message: "Selecciona un método de pago" }),
  }),
});

export type TicketFormValues = z.infer<typeof ticketFormSchema>;
