import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de reembolso",
};

export default function ReembolsosPage() {
  return (
    <LegalLayout title="Política de reembolso">
      <p>
        Puedes solicitar el reembolso completo de tu boleto hasta 7 días
        antes de la fecha del evento, escribiendo a
        hola@volveratievento.com con tu número de orden.
      </p>
      <p>
        Después de ese plazo, el boleto podrá transferirse a otra persona
        pero no será reembolsable.
      </p>
    </LegalLayout>
  );
}
