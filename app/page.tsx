import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { EventInfo } from "@/components/sections/EventInfo";
import { TicketForm } from "@/components/sections/TicketForm";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <Hero />
      <EventInfo />
      <Benefits />
      <TicketForm />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
