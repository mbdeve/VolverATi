import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Venue } from "@/components/sections/Venue";
import { EventInfo } from "@/components/sections/EventInfo";
import { Activities } from "@/components/sections/Activities";
import { TicketPricing } from "@/components/sections/TicketPricing";
import { TicketForm } from "@/components/sections/TicketForm";
import { WhyParticipate } from "@/components/sections/WhyParticipate";
import { Important } from "@/components/sections/Important";
import { Manifesto } from "@/components/sections/Manifesto";
import { Creator } from "@/components/sections/Creator";
import { Team } from "@/components/sections/Team";
import { Closing } from "@/components/sections/Closing";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <Hero />
      <Venue />
      <EventInfo />
      <Activities />
      <TicketPricing />
      <TicketForm />
      <WhyParticipate />
      <Important />
      <Manifesto />
      <Creator />
      <Team />
      <Closing />
      <Footer />
    </main>
  );
}
