import Link from "next/link";

export const Footer = () => (
  <footer className="bg-[#0a0f1a] text-white">
    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
      <div className="space-y-4 lg:col-span-1">
        <div className="font-black text-2xl tracking-tighter uppercase">
          CATCH-UP<span className="text-primary italic">TECH</span>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed max-w-[220px] font-medium">
          Transformamos ideias em soluções digitais de impacto. Tire o máximo proveito do potencial da sua empresa.
        </p>
        <div className="flex gap-5 text-slate-500">
          <Link href="#" className="hover:text-white transition-all">Linkedin</Link>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-white text-base tracking-tight uppercase px-0">
          <Link href="#" className="hover:text-white transition-colors">Início</Link>
        </h4>
        <ul className="space-y-2 text-sm text-slate-500 font-medium">
          <li><Link href="#services" className="hover:text-white transition-colors">Serviços</Link></li>
          <li><Link href="#methodology" className="hover:text-white transition-colors">Metodologia</Link></li>
          <li><Link href="#partners" className="hover:text-white transition-colors">Parceiros</Link></li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-white text-base tracking-tight uppercase">Produtos</h4>
        <ul className="space-y-2 text-sm text-slate-500 font-medium">
          <li><Link href="#" className="hover:text-white transition-colors">Sistemas Web</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Apps Mobile</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Soluções Cloud</Link></li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-white text-base tracking-tight uppercase">Recursos</h4>
        <ul className="space-y-2 text-sm text-slate-500 font-medium">
          <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-white text-base tracking-tight uppercase">Empresa</h4>
        <ul className="space-y-2 text-sm text-slate-500 font-medium">
          <li><Link href="/about" className="hover:text-white transition-colors">Sobre nós</Link></li>
          <li><Link href="#contact" className="hover:text-white transition-colors">Contato</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 font-medium">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} CATCH-UP TECH. Todos os direitos reservados.
        </p>
        <div className="flex gap-8 text-xs text-slate-500">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Política de Privacidade</Link>
          <Link href="/terms-of-use" className="hover:text-white transition-colors">Termos de Uso</Link>
        </div>
      </div>
    </div>
  </footer>
);







