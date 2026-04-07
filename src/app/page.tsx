import { SideBar } from "@/components/landing/SideBar";
import { Hero } from "@/components/landing/Hero";
import { Partners } from "@/components/landing/Partners";
import { Services } from "@/components/landing/Services";
import { ComoFunciona } from "@/components/landing/ComoFunciona";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

// --- Main Page ---

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <SideBar />
      <Hero />
      <Services />
      <Partners />
      <ComoFunciona />
      <Contact />
      <Footer />
    </main>
  );
}
