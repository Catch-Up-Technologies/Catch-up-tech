import { SideBar } from "@/components/home/SideBar";
import { Hero } from "@/components/home/Hero";
import { Partners } from "@/components/home/Partners";
import { Services } from "@/components/home/Services";
import { Methodology } from "@/components/home/Methodology";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/home/Footer";

// --- Main Page ---

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <SideBar />
      <Hero />
      <Services />
      <Methodology />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
