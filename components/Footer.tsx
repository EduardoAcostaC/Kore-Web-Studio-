"use client";

import Image from "next/image";
import { ArrowUp, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#06070A] py-16 border-t border-[#1E2230]">
      <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1E2230]">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/kore-icon.png"
                  alt="Kore Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-black text-xl tracking-tight text-white uppercase">
                Kore <span className="text-[#00D2FF]">Web Studio</span>
              </span>
            </div>
            <p className="font-mono text-xs text-[#8A90A6] max-w-sm leading-relaxed">
              Construimos el futuro digital de tu negocio con estándares de ingeniería, alto impacto visual y conversión sin compromisos.
            </p>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#00D2FF]">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
              <span>Estudio Operativo • Proyectos Abiertos</span>
            </div>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.footer)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-mono text-xs font-semibold hover:bg-emerald-500/20 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Hablar por WhatsApp Directo</span>
              </a>
            </div>
          </div>

          {/* Links Navigation */}
          <div className="md:col-span-2">
            <h5 className="font-mono text-xs text-white uppercase tracking-widest mb-4 font-bold">
              Navegación
            </h5>
            <ul className="space-y-2 text-xs font-mono text-[#8A90A6]">
              <li>
                <a className="hover:text-[#00D2FF] transition-colors" href="#servicios">
                  Servicios
                </a>
              </li>
              <li>
                <a className="hover:text-[#00D2FF] transition-colors" href="#proyectos">
                  Portafolio
                </a>
              </li>
              <li>
                <a className="hover:text-[#00D2FF] transition-colors" href="#testimonios">
                  Testimonios
                </a>
              </li>
              <li>
                <a className="hover:text-[#00D2FF] transition-colors" href="#precios">
                  Precios
                </a>
              </li>
              <li>
                <a className="hover:text-[#00D2FF] transition-colors" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="md:col-span-3">
            <h5 className="font-mono text-xs text-white uppercase tracking-widest mb-4 font-bold">
              Servicios Core
            </h5>
            <ul className="space-y-2 text-xs font-mono text-[#8A90A6]">
              <li>
                <a className="hover:text-[#00D2FF] transition-colors" href="#servicios">
                  Desarrollo Web Next.js 16
                </a>
              </li>
              <li>
                <a className="hover:text-[#00D2FF] transition-colors" href="#servicios">
                  Tiendas E-Commerce
                </a>
              </li>
              <li>
                <a className="hover:text-[#00D2FF] transition-colors" href="#servicios">
                  UI/UX &amp; Branding Digital
                </a>
              </li>
              <li>
                <a className="hover:text-[#00D2FF] transition-colors" href="#servicios">
                  SEO &amp; Optimización de IA
                </a>
              </li>
              <li>
                <a className="hover:text-[#00D2FF] transition-colors" href="#servicios">
                  Hosting Cloud &amp; Seguridad
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Top */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <h5 className="font-mono text-xs text-white uppercase tracking-widest mb-4 font-bold">
                Conectar
              </h5>
              <ul className="space-y-2 text-xs font-mono text-[#8A90A6]">
                <li>
                  <a
                    className="hover:text-[#00D2FF] transition-colors"
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#00D2FF] transition-colors"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#00D2FF] transition-colors"
                    href="#contacto"
                  >
                    Contacto Directo
                  </a>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-[#8A90A6] hover:text-[#00D2FF] transition-colors cursor-pointer self-start"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Volver arriba</span>
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#636B82]">
          <p>© 2025 Kore Web Studio. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-[#00D2FF] transition-colors" href="#">
              Privacidad &amp; Cookies
            </a>
            <a className="hover:text-[#00D2FF] transition-colors" href="#">
              Términos de Servicio
            </a>
            <span className="text-[#00D2FF]">Hecho con &lt; K &gt;</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
