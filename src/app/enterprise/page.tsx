"use client";

import { About } from "@/components/sections/enterprise/About";
import { Partners } from "@/components/sections/home/Partners";
import { Cases } from "@/components/sections/enterprise/Cases";
import { Guidelines } from "@/components/sections/enterprise/Guidelines";
import { Contact } from "@/components/sections/enterprise/Contact";

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-white">
      <About />
      <Guidelines />
      <Partners />
      <Cases />
      <Contact />
    </main>
  );
}
