import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LinkedinIcon = ({ size = 24, ...props }: any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
); const InstagramIcon = ({ size = 24, ...props }: any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
export const Footer = () => (
  <footer className="bg-[#0a0f1a] text-white">
    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">

      <div className="space-y-4 lg:col-span-1">
        <div className="font-black text-2xl tracking-tighter uppercase leading-none">
          CATCH-UP<span className="text-primary italic">TECH</span>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed max-w-[220px] font-medium">
          Engenharia de software de alta precisão para empresas que buscam escala e soberania digital.
        </p>
        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/company/catch-up-tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-primary transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={22} />
          </Link>
          <div
            className="text-slate-700 cursor-not-allowed transition-all duration-300"
            title="Instagram - Em breve"
            aria-label="Instagram (Em breve)"
          >
            <InstagramIcon size={22} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-white text-base tracking-tight uppercase">Recursos</h4>
        <ul className="space-y-2 text-sm text-slate-500 font-medium overflow-hidden">
          <li>
            <Link 
              href="/faq" 
              className="group flex items-center gap-2 hover:text-white transition-all duration-300"
            >
              <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
              <span>FAQ</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-white text-base tracking-tight uppercase">Empresa</h4>
        <ul className="space-y-2 text-sm text-slate-500 font-medium overflow-hidden">
          <li>
            <Link 
              href="/enterprise#about" 
              className="group flex items-center gap-2 hover:text-white transition-all duration-300"
            >
              <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
              <span>Sobre nós</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/enterprise#partners" 
              className="group flex items-center gap-2 hover:text-white transition-all duration-300"
            >
              <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
              <span>Parceiros</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/enterprise#cases" 
              className="group flex items-center gap-2 hover:text-white transition-all duration-300"
            >
              <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
              <span>Cases</span>
            </Link>
          </li>
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
