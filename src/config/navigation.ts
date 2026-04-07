import { Home, Cpu, Rocket, Library, Building2 } from "lucide-react";

export const navigation = [
  { id: "home", label: "Início", icon: Home, href: "/" },
  {
    id: "services",
    label: "Serviços",
    icon: Cpu,
    href: "/#services",
    subItems: [
      { label: "Sistemas Web", href: "/services/web" },
      { label: "Apps Mobile", href: "/services/mobile" },
      { label: "Soluções Cloud", href: "/services/cloud" }
    ]
  },
  { id: "cases", label: "Cases", icon: Rocket, href: "/#cases" },
  {
    id: "resources",
    label: "Recursos",
    icon: Library,
    href: "/#resources",
    subItems: [
      { label: "FAQ", href: "/faq" },
    ]
  },
  {
    id: "company",
    label: "Empresa",
    icon: Building2,
    href: "/about",
    subItems: [
      { label: "Sobre Nós", href: "/about" },
    ]
  },
];
