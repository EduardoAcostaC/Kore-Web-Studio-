"use client";

import Image from "next/image";
import {
  ArrowRight,
  ArrowUp,
  MessageCircle,
  ShieldCheck,
  Zap,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full relative z-10 border-t border-white/10 bg-[#04060c] overflow-hidden pt-16 pb-12">
      {/* Ambient Top Glow & Hairline Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[250px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-cyan-400/5 to-transparent blur-[110px] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 lg:px-8 relative z-10 space-y-16">
        {/* Pre-Footer Action Box */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-blue/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="space-y-2 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TRANSFORMA TU PRESENCIA DIGITAL</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              ¿Listo para dar el siguiente salto con tu web?
            </h3>
            <p className="text-neutral-300 text-sm max-w-xl">
              Diseñamos experiencias memorables que transmiten autoridad, enamoran
              a tus clientes y multiplican tus conversiones.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto relative z-10">
            <a
              href="https://wa.me/5215500000000?text=Hola%20Kore%20Web%20Studio,%20quiero%20iniciar%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-medium text-xs text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Directo</span>
            </a>
            <a
              href="#contacto"
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span>Iniciar Proyecto</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-4">
          {/* Column 1: Identity & Status (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center p-1 bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(0,102,255,0.3)]">
                <Image
                  src="/kore-icon.png"
                  alt="Kore Web Studio"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(0,102,255,0.7)]"
                />
              </div>
              <div>
                <span className="font-display font-bold text-base text-white tracking-tight">
                  Kore Web Studio
                </span>
                <div className="text-[11px] text-cyan-300 font-medium">
                  Diseño Web &amp; Crecimiento Digital
                </div>
              </div>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Estudio especializado en la creación de páginas web, tiendas online y
              plataformas digitales de alto rendimiento que posicionan tu marca
              en el nivel más alto de tu industria.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Disponibilidad activa para proyectos</span>
              </div>
            </div>
          </div>

          {/* Column 2: Soluciones (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-white">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Sitios Web Corporativos &amp; PYMES</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Turismo &amp; Sistemas de Reserva</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Profesionales de Salud &amp; Citas</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                <span>E-Commerce Boutique &amp; Catálogos</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Landing Pages de Alta Conversión</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Navegación (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#portafolio" className="hover:text-white transition-colors">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-white transition-colors">
                  Soluciones
                </a>
              </li>
              <li>
                <a href="#casos" className="hover:text-white transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-white transition-colors">
                  Metodología
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Asesoría Gratuita
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Compromiso & Confianza (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-white">
              Garantía Kore
            </h4>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                <span>Garantía de satisfacción y soporte pos-lanzamiento.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-neutral-300">
                <Zap className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Optimización de velocidad y 100% adaptable a móviles.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-500 text-center md:text-left">
            © 2025 Kore Web Studio. Todos los derechos reservados.
            Hecho para hacer crecer tu marca.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-neutral-400 bg-white/5 px-3 py-1 rounded-full border border-white/5 hidden sm:inline-block">
              Desarrollo Moderno • Next.js
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-neutral-300 hover:text-white transition-all flex items-center justify-center cursor-pointer group"
              aria-label="Volver arriba"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

