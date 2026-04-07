import { SideBar } from "@/components/landing/SideBar";
import { Hero } from "@/components/landing/Hero";
import { ProvaSocial } from "@/components/landing/ProvaSocial";
import { Servicos } from "@/components/landing/Servicos";
import { ComoFunciona } from "@/components/landing/ComoFunciona";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

// --- Main Page ---

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <SideBar />
      <Hero />
      <ProvaSocial />
      <Servicos />
      <ComoFunciona />
      <Contact />
      <Footer />
    </main>
  );
}
