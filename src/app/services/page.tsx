import { SideBar } from "@/components/landing/SideBar";
import { Footer } from "@/components/landing/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SideBar />
      
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <span className="text-primary font-bold tracking-widest uppercase text-sm">Serviços Especializados</span>
        <h1 className="title-main text-gradient mt-4 mb-8">Nossas Soluções Digitais</h1>
        <p className="text-body max-w-3xl">
          Oferecemos um ecossistema completo de desenvolvimento para levar sua empresa ao próximo nível.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { title: "Sistemas Web", desc: "Plataformas robustas e escaláveis." },
            { title: "Apps Mobile", desc: "Experiências nativas para iOS e Android." },
            { title: "Cloud & Devops", desc: "Infraestrutura moderna e segura." }
          ].map((s, i) => (
            <div key={i} className="card-premium">
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
