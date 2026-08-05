import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Políticas de privacidad",
};

export default function PoliticasPage() {
  return (
    <LegalLayout title="Políticas de privacidad">
      <p>
        En Volver a Ti protegemos tus datos personales y solo los usamos para
        gestionar tu compra, enviarte tu boleto y comunicarte información
        relevante sobre el evento.
      </p>
      <p>
        No compartimos tu información con terceros con fines publicitarios.
        Puedes solicitar la eliminación de tus datos escribiéndonos a
        hola@volveratievento.com.
      </p>
    </LegalLayout>
  );
}
