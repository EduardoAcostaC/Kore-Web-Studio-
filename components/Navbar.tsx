"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Portafolio Interactivo", href: "#portafolio" },
    { label: "Soluciones por Sector", href: "#soluciones" },
    { label: "Casos de Éxito", href: "#casos" },
    { label: "Nuestra Metodología", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl bg-[#0b0f19]/85 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-between transition-all duration-300 hover:border-white/20">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 pl-2 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center p-0.5 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:border-brand-cyan/50 transition-colors">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKGl8fusZknl4uvCHmzkjMADQ08oK4PTGyfq1bemPEBr66RR3aJpClNffMuRSfjUXiT3SRbNHNox-1nmypIuYek60XZFAynnDARsDQwZkGOe9hRJWk_48JbtSYypX-AtRdo2N-_duCUvNJEOPYMkRamzqbHVgilKG3lbw83XULlku7iAzxi5Ma8PCXao93M5GLF8HMNWtT7aItlB4svnZJfzag_XLMmM9xbU5E2Dp1Ty-bj38YWiSSA71PKThyIgIVTZY"
              alt="Kore Web Studio"
              width={32}
              height={32}
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,102,255,0.6)]"
              unoptimized
            />
          </div>
          <span className="font-display font-bold text-[15px] tracking-tight text-white group-hover:text-cyan-200 transition-colors">
            Kore <span className="text-neutral-400 font-normal">Web Studio</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-[13px] font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="relative group inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-brand-blue to-[#0099ff] hover:to-brand-cyan shadow-[0_0_20px_rgba(0,102,255,0.45)] hover:shadow-[0_0_25px_rgba(0,210,255,0.7)] transition-all"
          >
            <span>Iniciar Proyecto</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-neutral-300 hover:text-white transition-colors"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-[#0b0f19]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-neutral-200 hover:text-brand-cyan transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-cyan shadow-[0_0_20px_rgba(0,102,255,0.45)]"
          >
            Iniciar Proyecto
          </a>
        </div>
      )}
    </header>
  );
}
