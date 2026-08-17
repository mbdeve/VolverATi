import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import { EVENT } from "@/lib/event-config";

const socials = [
  {
    name: "WhatsApp",
    href: `https://wa.me/${EVENT.whatsapp}`,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.29.58-.36.77-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.81.86.26.13.44.19.5.3.07.11.07.62-.17 1.3Z" />
      </svg>
    ),
  },
  { name: "Instagram", href: "https://www.instagram.com/volveratims", icon: Instagram },
  { name: "Facebook", href: "https://facebook.com/volveratievento", icon: Facebook },
];

const legalLinks = [
  { label: "Políticas de privacidad", href: "/politicas" },
  { label: "Términos y condiciones", href: "/terminos" },
  { label: "Política de reembolso", href: "/reembolsos" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-blush-200/60 bg-white/60 py-14 dark:border-white/10 dark:bg-[#211710]/60">
      <div className="container-px mx-auto flex flex-col items-center gap-8 text-center">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-white shadow-soft">
            <Image
              src="/images/logo/logo.jpeg"
              alt="Logotipo de Volver a Ti"
              fill
              sizes="36px"
              className="object-cover"
            />
          </span>
          <span className="font-display text-base font-semibold text-ink dark:text-blush-50">
            VOLVER A TI
          </span>
        </a>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="flex h-10 w-10 items-center justify-center rounded-full glass text-mauve-700 transition-colors hover:bg-mauve-100 dark:text-blush-100 dark:hover:bg-white/10"
            >
              <s.icon className="h-4.5 w-4.5" />
            </a>
          ))}
        </div>

        <nav aria-label="Enlaces legales" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink/60 dark:text-blush-100/60">
          {legalLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-mauve-600 dark:hover:text-blush-200">
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-ink/40 dark:text-blush-100/40">
          © {new Date().getFullYear()} Volver a Ti. Todos los derechos
          reservados. · WhatsApp: {EVENT.whatsappLabel}
        </p>
      </div>
    </footer>
  );
}
