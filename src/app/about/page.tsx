import { SideBar } from "@/components/home/SideBar";
import { Footer } from "@/components/home/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <SideBar />

      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="title-main text-gradient mb-8">Sobre a Catch-up Tech</h1>
        <p className="text-body max-w-3xl">
          Somos uma empresa dedicada a transformar o mercado digital através de engenharia de software de ponta e design focado na experiência do usuário.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="card-premium">
            <h3 className="text-xl font-bold mb-4">Nossa Missão</h3>
            <p className="text-muted">Empoderar negócios através de tecnologia escalável e inovadora.</p>
          </div>
          <div className="card-premium">
            <h3 className="text-xl font-bold mb-4">Nossa Visão</h3>
            <p className="text-muted">Ser a principal parceira de tecnologia para empresas que buscam domínio digital.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
