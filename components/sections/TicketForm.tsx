"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TicketTypePicker } from "@/components/TicketTypePicker";
import { BankTransferInfo } from "@/components/BankTransferInfo";
import { PayButton } from "@/components/PayButton";
import { SuccessScreen } from "@/components/sections/SuccessScreen";
import { AuroraBackground } from "@/components/AuroraBackground";

import { ticketFormSchema, type TicketFormValues } from "@/lib/ticket-schema";
import { EVENT, getTicketPrice } from "@/lib/event-config";
import { PROVINCES } from "@/lib/provinces";
import { formatRD, generateOrderId } from "@/lib/utils";

const TICKET_QUANTITIES = [1, 2, 3, 4, 5];

export function TicketForm() {
  const [loading, setLoading] = React.useState(false);
  const [order, setOrder] = React.useState<{ id: string; data: TicketFormValues } | null>(
    null
  );

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<TicketFormValues>({
    resolver: zodResolver(ticketFormSchema),
    defaultValues: {
      ticketType: "estandar",
      quantity: 1,
      imageConsent: false,
    },
  });

  const quantity = watch("quantity") || 1;
  const ticketType = watch("ticketType") || "estandar";
  const total = quantity * getTicketPrice(ticketType);

  const onSubmit = async (values: TicketFormValues) => {
    setLoading(true);
    const orderId = generateOrderId();
    const total = values.quantity * getTicketPrice(values.ticketType);

    try {
      // Google Apps Script no responde con cabeceras CORS legibles, así
      // que enviamos en modo "no-cors": el request llega y se procesa
      // igual (fila añadida + correo enviado), pero no podemos leer la
      // respuesta desde el navegador. Usamos text/plain para evitar el
      // preflight OPTIONS que Apps Script no maneja bien.
      await fetch(EVENT.sheetsWebhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ ...values, orderId, total }),
      });
    } catch (err) {
      // Un fallo de red no debe bloquear la confirmación visual al
      // usuario; el dato más importante (contacto) ya quedó en el
      // formulario y puede reintentarse manualmente si hace falta.
      console.error("No se pudo registrar la reserva en Google Sheets:", err);
    }

    setLoading(false);
    setOrder({ id: orderId, data: values });
  };

  const handleReset = () => {
    setOrder(null);
    reset();
  };

  return (
    <section id="boletos" className="relative py-24 sm:py-32">
      <AuroraBackground />
      <div className="container-px relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mauve-600 dark:text-blush-300">
            Reserva tu lugar
          </span>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink dark:text-blush-50 sm:text-5xl">
            Compra tu boleta
          </h2>
          <p className="mt-4 text-ink/65 dark:text-blush-100/70">
            Completa tus datos y asegura tu espacio en {EVENT.name}.
          </p>
        </motion.div>

        <div id="contenido" className="mx-auto mt-14 max-w-2xl">
          <AnimatePresence mode="wait">
            {order ? (
              <SuccessScreen
                key="success"
                orderId={order.id}
                data={order.data}
                onReset={handleReset}
              />
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="glass-card rounded-4xl p-6 sm:p-10"
              >
                <div className="mb-8">
                  <Controller
                    control={control}
                    name="ticketType"
                    render={({ field }) => (
                      <TicketTypePicker
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.ticketType?.message}
                      />
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Label htmlFor="fullName">Nombre completo</Label>
                    <Input
                      id="fullName"
                      placeholder="Ej. Ana María Pérez"
                      autoComplete="name"
                      error={!!errors.fullName}
                      aria-invalid={!!errors.fullName}
                      {...register("fullName")}
                      className="mt-1.5"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@correo.com"
                      autoComplete="email"
                      error={!!errors.email}
                      aria-invalid={!!errors.email}
                      {...register("email")}
                      className="mt-1.5"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(809) 555-0123"
                      autoComplete="tel"
                      error={!!errors.phone}
                      aria-invalid={!!errors.phone}
                      {...register("phone")}
                      className="mt-1.5"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="city">Ciudad</Label>
                    <Input
                      id="city"
                      placeholder="Ej. Santo Domingo"
                      autoComplete="address-level2"
                      error={!!errors.city}
                      aria-invalid={!!errors.city}
                      {...register("city")}
                      className="mt-1.5"
                    />
                    {errors.city && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.city.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="province">Provincia</Label>
                    <Controller
                      control={control}
                      name="province"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="province" className="mt-1.5">
                            <SelectValue placeholder="Selecciona tu provincia" />
                          </SelectTrigger>
                          <SelectContent>
                            {PROVINCES.map((p) => (
                              <SelectItem key={p} value={p}>
                                {p}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.province && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.province.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="quantity">Cantidad de boletas</Label>
                    <Controller
                      control={control}
                      name="quantity"
                      render={({ field }) => (
                        <Select
                          onValueChange={(v) => field.onChange(Number(v))}
                          value={String(field.value ?? 1)}
                        >
                          <SelectTrigger id="quantity" className="mt-1.5">
                            <SelectValue placeholder="1" />
                          </SelectTrigger>
                          <SelectContent>
                            {TICKET_QUANTITIES.map((q) => (
                              <SelectItem key={q} value={String(q)}>
                                {q} {q === 1 ? "boleta" : "boletas"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>

                  <div className="flex flex-col justify-end">
                    <div className="rounded-2xl bg-gradient-to-r from-blush-50 to-mauve-50 px-4 py-3 text-center dark:from-white/10 dark:to-white/5">
                      <p className="text-xs font-medium uppercase tracking-wide text-ink/50 dark:text-blush-100/50">
                        Total a pagar
                      </p>
                      <motion.p
                        key={total}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-2xl font-semibold text-gradient"
                      >
                        {formatRD(total)}
                      </motion.p>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <Label htmlFor="notes">Observaciones (opcional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="¿Alguna alergia, condición especial o comentario?"
                      {...register("notes")}
                      className="mt-1.5"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <BankTransferInfo />
                </div>

                <div className="mt-6">
                  <Controller
                    control={control}
                    name="imageConsent"
                    render={({ field }) => (
                      <label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-blush-50/70 p-4 dark:bg-white/5">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-0.5"
                        />
                        <span className="text-sm leading-relaxed text-ink/75 dark:text-blush-100/75">
                          Autorizo que mi imagen sea captada en fotos y
                          videos de este evento, con fines de difusión
                          pública.
                        </span>
                      </label>
                    )}
                  />
                  {errors.imageConsent && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.imageConsent.message}
                    </p>
                  )}
                </div>

                <div className="mt-9">
                  <PayButton
                    loading={loading}
                    label="Confirmar reserva"
                    loadingLabel="Registrando tu reserva..."
                  />
                  <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-ink/40 dark:text-blush-100/40">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Tus datos están seguros y solo se usan para tu reserva
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
