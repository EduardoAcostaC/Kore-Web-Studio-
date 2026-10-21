"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X, MessageCircle, Sparkles } from "lucide-react";

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
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-4">
      <div className="w-full max-w-6xl relative bg-[#070b14]/85 backdrop-blur-2xl border border-white/[0.12] rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.18)] flex items-center justify-between transition-all duration-300 hover:border-white/25">
        {/* Top luminous hairline highlight */}
        <div className="absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 pl-1 group flex-shrink-0">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center p-1 bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/15 shadow-[0_0_15px_rgba(0,102,255,0.4)] group-hover:border-brand-cyan/60 group-hover:shadow-[0_0_24px_rgba(0,210,255,0.7)] transition-all duration-300">
            <Image
              src="/kore-icon.png"
              alt="Kore Web Studio"
              width={36}
              height={36}
              priority
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,102,255,0.8)]"
            />
          </div>
          <span className="font-display font-bold text-[15px] sm:text-base tracking-tight text-white whitespace-nowrap group-hover:text-cyan-100 transition-colors">
            Kore <span className="text-neutral-400 font-normal text-sm">Web Studio</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/[0.08] border border-transparent hover:border-white/10 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href="https://wa.me/5215500000000?text=Hola%20Kore%20Web%20Studio,%20quiero%20iniciar%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-500/40 text-neutral-300 hover:text-emerald-300 transition-all duration-200"
            title="Chat en WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <a
            href="#contacto"
            className="relative group inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-brand-blue via-[#0088ff] to-brand-cyan hover:from-blue-500 hover:to-cyan-300 shadow-[0_0_20px_rgba(0,102,255,0.5),inset_0_1px_0_rgba(255,255,255,0.35)] hover:shadow-[0_0_28px_rgba(0,210,255,0.75)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Iniciar Proyecto</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden text-neutral-300 hover:text-white transition-colors rounded-lg bg-white/5 border border-white/10"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-4 right-4 bg-[#070b14]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-neutral-200 hover:text-brand-cyan hover:bg-white/5 rounded-xl px-3 py-2.5 transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="https://wa.me/5215500000000?text=Hola%20Kore%20Web%20Studio,%20quiero%20iniciar%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hablar por WhatsApp</span>
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-cyan shadow-[0_0_20px_rgba(0,102,255,0.45)]"
            >
              Iniciar Proyecto
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
