"use client";

import Link from "next/link";

const LinkedinIcon = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
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
);

const InstagramIcon = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
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
  <footer className="bg-secondary text-white">
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 items-start">

      <div className="space-y-6">
        <div className="font-black text-2xl tracking-tighter uppercase leading-none">
          CATCH-UP<span className="text-primary italic">TECH</span>
        </div>
        <p className="text-muted text-sm leading-relaxed max-w-sm font-medium">
          Engenharia de software de alta precisão para empresas que buscam escala, robustez técnica e soberania digital em operações complexas.
        </p>
        <div className="flex gap-4 pt-2">
          <Link
            href="https://www.linkedin.com/company/catchup-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg text-muted hover:text-primary hover:bg-white/10 transition-all duration-300 border border-white/5"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </Link>
          <div
            className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg text-muted/60 cursor-not-allowed border border-white/5"
            title="Instagram - Em breve"
          >
            <InstagramIcon size={20} />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h4 className="font-bold text-white text-sm tracking-widest uppercase opacity-50">Empresa</h4>
        <ul className="space-y-4 text-sm text-muted font-medium">
          <li>
            <Link href="/enterprise#about" className="group flex items-center gap-3 hover:text-white transition-all duration-300">
              <span className="h-[1px] w-0 bg-primary group-hover:w-4 transition-all duration-300" />
              <span>Sobre nós</span>
            </Link>
          </li>
          <li>
            <Link href="/enterprise#partners" className="group flex items-center gap-3 hover:text-white transition-all duration-300">
              <span className="h-[1px] w-0 bg-primary group-hover:w-4 transition-all duration-300" />
              <span>Parceiros</span>
            </Link>
          </li>
          <li>
            <Link href="/enterprise#cases" className="group flex items-center gap-3 hover:text-white transition-all duration-300">
              <span className="h-[1px] w-0 bg-primary group-hover:w-4 transition-all duration-300" />
              <span>Cases</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <h4 className="font-bold text-white text-sm tracking-widest uppercase opacity-50">Suporte</h4>
        <ul className="space-y-4 text-sm text-muted font-medium">
          <li>
            <Link href="/faq" className="group flex items-center gap-3 hover:text-white transition-all duration-300">
              <span className="h-[1px] w-0 bg-primary group-hover:w-4 transition-all duration-300" />
              <span>FAQ</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => window.location.href = '/#contact'}
              className="group flex items-center gap-3 hover:text-white transition-all duration-300 outline-none"
            >
              <span className="h-[1px] w-0 bg-primary group-hover:w-4 transition-all duration-300" />
              <span>Contato</span>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-medium text-muted tracking-wider">
          <div className="flex items-center flex-wrap justify-center md:justify-start gap-1">
            <span>Desenvolvido com ❤️ </span>
            <Link
              href="https://www.linkedin.com/company/catchup-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-black text-white/80 hover:text-primary transition-colors ml-1"
            >
              CatchUp Tech
            </Link>
            <span className="mx-3 opacity-20 hidden md:inline">|</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>

          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacidade</Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
