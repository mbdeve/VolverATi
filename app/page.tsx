import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Venue } from "@/components/sections/Venue";
import { EventInfo } from "@/components/sections/EventInfo";
import { Benefits } from "@/components/sections/Benefits";
import { TicketPricing } from "@/components/sections/TicketPricing";
import { TicketForm } from "@/components/sections/TicketForm";
import { Important } from "@/components/sections/Important";
import { WhyParticipate } from "@/components/sections/WhyParticipate";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { Creator } from "@/components/sections/Creator";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <Hero />
      <Manifesto />
      <Venue />
      <EventInfo />
      <Benefits />
      <TicketPricing />
      <TicketForm />
      <Important />
      <WhyParticipate />
      <Testimonials />
      <Team />
      <Creator />
      <Footer />
    </main>
  );
}
