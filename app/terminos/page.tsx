import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Términos y condiciones",
};

export default function TerminosPage() {
  return (
    <LegalLayout title="Términos y condiciones">
      <p>
        Al comprar un boleto para Volver a Ti aceptas las condiciones de
        participación, el reglamento del recinto y las políticas de
        reembolso publicadas en esta página.
      </p>
      <p>
        Los boletos son personales e intransferibles salvo autorización
        previa del equipo organizador.
      </p>
    </LegalLayout>
  );
}
