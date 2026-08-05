import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AuroraBackground } from "@/components/AuroraBackground";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen py-24">
      <AuroraBackground />
      <div className="container-px relative mx-auto max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-mauve-600 hover:text-mauve-700 dark:text-blush-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <div className="glass-card mt-8 rounded-4xl p-8 sm:p-10">
          <h1 className="font-display text-3xl text-ink dark:text-blush-50">{title}</h1>
          <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-ink/70 dark:text-blush-100/70">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
