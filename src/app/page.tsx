import { Hero } from "@/components/sections/home/Hero";
import { Services } from "@/components/sections/home/Services";
import { Methodology } from "@/components/sections/home/Methodology";
import { Contact } from "@/components/sections/home/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Methodology />
      <Contact />
    </main>
  );
}
