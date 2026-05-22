import { Hero } from "@/components/sections/home/Hero";
import { Partners } from "@/components/sections/home/Partners";
import { Services } from "@/components/sections/home/Services";
import { Methodology } from "@/components/sections/home/Methodology";
import { Cases } from "@/components/sections/home/Cases";
import { FAQ } from "@/components/sections/home/FAQ";
import { CTA } from "@/components/sections/home/CTA";
import { Contact } from "@/components/sections/home/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Partners />
      <Services />
      <Methodology />
      <Cases />
      <FAQ />
      <CTA />
      <Contact />
    </main>
  );
}
