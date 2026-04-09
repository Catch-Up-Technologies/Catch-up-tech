import { Home, Cpu, Rocket, Library, Building2 } from "lucide-react";

export const navigation = [
  { id: "home", label: "Início", icon: Home, href: "/" },
  {
    id: "resources",
    label: "Recursos",
    icon: Library,
    href: "/",
    subItems: [
      { label: "FAQ", href: "/faq" },
    ]
  },
  {
    id: "company",
    label: "Empresa",
    icon: Building2,
    href: "/enterprise",
    subItems: [
      { label: "Sobre Nós", href: "/enterprise#about" },
      { label: "Parceiros", href: "/enterprise#partners" },
      { label: "Cases", href: "/enterprise#cases" },
    ]
  },
];
