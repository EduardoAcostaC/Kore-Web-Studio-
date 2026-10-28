"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Precios", href: "#precios" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08090C]/90 backdrop-blur-xl border-b border-[#1E2230]/80">
      <div className="max-w-[1360px] mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 flex-shrink-0">
            <Image
              src="/kore-icon.png"
              alt="Kore Web Studio Logo"
              width={36}
              height={36}
              priority
              className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(0,82,255,0.6)] group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-xl tracking-tight text-white uppercase leading-none">
              Kore Web <span className="text-[#00D2FF]">Studio</span>
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#8A90A6] uppercase mt-0.5">
              &lt; Development • Design &gt;
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] uppercase tracking-wider text-[#A0A6BE]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#00D2FF] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.navbar)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="p-2.5 rounded-none border border-[#1E2230] bg-[#0C0E14] text-[#00D2FF] hover:border-[#00D2FF] hover:bg-[#0052FF]/10 transition-all flex items-center justify-center"
            title="Chat en tiempo real por WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <a
            href="#contacto"
            className="px-5 py-2.5 rounded-none border border-[#0052FF] bg-[#0052FF] text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#0066FF] hover:border-[#00D2FF] hover:shadow-[0_0_25px_rgba(0,82,255,0.7)] transition-all hidden sm:inline-block"
          >
            Iniciar Proyecto
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 md:hidden text-[#C4C9D9] hover:text-white transition-colors border border-[#1E2230] bg-[#0C0E14]"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08090C]/98 border-b border-[#1E2230] px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-[#A0A6BE] hover:text-[#00D2FF] border-b border-[#1E2230]/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-[#0052FF] text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#0066FF]"
            >
              Iniciar Proyecto
            </a>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.navbar)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest bg-emerald-500/10 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
