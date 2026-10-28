"use client";

import { ArrowRight, MessageCircle, ShieldCheck, Zap, Smartphone, Headphones } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-[#1E2230]">
      {/* Curved Cyber Waves Graphic Overlay (Cobalt & Cyan neon waves) */}
      <div className="absolute right-[-15%] top-[-5%] w-[850px] h-[850px] pointer-events-none opacity-40 md:opacity-75 z-0">
        <svg
          className="w-full h-full"
          fill="none"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="450"
            cy="350"
            r="380"
            stroke="url(#electricGrad)"
            strokeDasharray="8 6"
            strokeWidth="1.5"
          />
          <circle
            cx="450"
            cy="350"
            r="320"
            stroke="url(#electricGrad)"
            strokeWidth="2"
          />
          <circle
            cx="450"
            cy="350"
            r="260"
            stroke="#00D2FF"
            strokeOpacity="0.6"
            strokeWidth="1.2"
          />
          <circle
            cx="450"
            cy="350"
            r="200"
            stroke="#0052FF"
            strokeOpacity="0.8"
            strokeWidth="2.5"
          />
          <path
            d="M 100 100 C 350 150, 480 300, 700 700"
            stroke="#00D2FF"
            strokeLinecap="round"
            strokeWidth="2.5"
          />
          <path
            d="M 150 50 C 380 120, 520 280, 780 620"
            stroke="#0052FF"
            strokeWidth="3"
          />
          <path
            d="M 220 20 C 420 100, 560 250, 800 550"
            stroke="#00D2FF"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient
              id="electricGrad"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="800"
              y1="0"
              y2="800"
            >
              <stop stopColor="#00D2FF" />
              <stop offset="0.5" stopColor="#0052FF" />
              <stop offset="1" stopColor="#08090C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Background Radial Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#0052FF]/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#00D2FF]/10 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 lg:px-10">
        {/* Eyebrow Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-block w-2.5 h-2.5 bg-[#00D2FF] shadow-[0_0_10px_#00D2FF]" />
          <p className="font-mono text-xs md:text-sm text-[#00D2FF] font-semibold tracking-widest uppercase">
            CLIENTES, NO SOLO VISITAS. INGENIERÍA WEB &amp; HIGH-CONVERSION.
          </p>
        </div>

        {/* Reference Style Huge Duo/Outlined Headline */}
        <div className="max-w-6xl">
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-[104px] tracking-tight uppercase leading-[0.92] text-white">
            CONSTRUIMOS TU<br />
            <span className="text-white">PRESENCIA</span>{" "}
            <span className="text-stroke-white">DIGITAL</span><br />
            <span className="text-[#00D2FF] drop-shadow-[0_0_35px_rgba(0,210,255,0.4)]">
              QUE CIERRA.
            </span>
          </h1>
        </div>

        {/* Subtitle description & CTA Buttons */}
        <div className="mt-8 md:mt-10 max-w-2xl">
          <p className="text-base sm:text-lg text-[#9EA6BC] leading-relaxed font-normal">
            Ahora mismo alguien busca lo que tú vendes. Construimos el sitio que
            hace que te elijan a ti, sin plantillas lentas y con arquitectura
            cloud de última generación.
          </p>

          {/* CTA row modeled on reference (solid high-impact primary + WhatsApp / outline secondary) */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#contacto"
              className="group px-7 py-4 bg-[#0052FF] hover:bg-[#0066FF] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-center transition-all duration-200 flex items-center justify-center gap-3 hover:shadow-[0_0_35px_rgba(0,82,255,0.7)] shrink-0"
            >
              <span>INICIAR PROYECTO</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-4 border border-emerald-500/40 hover:border-emerald-400 bg-emerald-500/[0.08] hover:bg-emerald-500/[0.16] text-[#E0E6F2] hover:text-white font-mono text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(16,185,129,0.08)] hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="whitespace-nowrap">CONSULTA INMEDIATA POR WHATSAPP</span>
              <ArrowRight className="w-4 h-4 text-emerald-400/80 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0" />
            </a>
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-8 border-t border-[#1E2230]">
          <div className="flex items-center gap-3 p-3 bg-[#0C0E14] border border-[#1E2230]">
            <ShieldCheck className="w-5 h-5 text-[#00D2FF] flex-shrink-0" />
            <div>
              <div className="font-mono text-xs text-white font-bold uppercase">
                Garantía Total
              </div>
              <div className="font-mono text-[11px] text-[#8A90A6]">
                Aprobación antes de publicar
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-[#0C0E14] border border-[#1E2230]">
            <Zap className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="font-mono text-xs text-white font-bold uppercase">
                Carga Instantánea
              </div>
              <div className="font-mono text-[11px] text-[#8A90A6]">
                Score 95+ Core Web Vitals
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-[#0C0E14] border border-[#1E2230]">
            <Smartphone className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <div>
              <div className="font-mono text-xs text-white font-bold uppercase">
                100% Mobile First
              </div>
              <div className="font-mono text-[11px] text-[#8A90A6]">
                Experiencia táctil fluida
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-[#0C0E14] border border-[#1E2230]">
            <Headphones className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <div className="font-mono text-xs text-white font-bold uppercase">
                Soporte Continuo
              </div>
              <div className="font-mono text-[11px] text-[#8A90A6]">
                Acompañamiento post-lanzamiento
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
