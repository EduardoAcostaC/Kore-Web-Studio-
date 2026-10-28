"use client";

import { Check } from "lucide-react";

export default function PricingSection() {
  const handleSelectPlan = (planName: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("kore:select-plan", { detail: { plan: planName } })
      );
    }
  };

  return (
    <section
      className="relative py-24 lg:py-32 border-b border-[#1E2230] overflow-hidden bg-[#08090C]"
      id="precios"
    >
      {/* Background Watermark 04 */}
      <div className="absolute right-10 top-12 font-display font-black text-[220px] md:text-[340px] text-white/[0.02] select-none pointer-events-none leading-none">
        04
      </div>

      <div className="max-w-[1360px] mx-auto px-5 lg:px-10 relative z-10">
        <div className="mb-12">
          <span className="font-mono text-xs text-[#00D2FF] uppercase tracking-widest block mb-3 font-semibold">
            [ 04 — INVERSIÓN TRANSPARENTE ]
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
            PRECIOS<br />
            <span className="bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#0052FF] bg-clip-text text-transparent">
              SIN LETRA
            </span><br />
            <span className="text-[#00D2FF]">CHICA.</span>
          </h2>
          <p className="text-sm text-[#8A90A6] mt-4 font-mono max-w-2xl">
            Montos claros en moneda nacional con equivalencia en USD. Sin costes ocultos ni mensualidades imprevistas.
          </p>
        </div>

        {/* Top 3 Metrics Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-4 bg-[#0C0E14] border border-[#1E2230] flex flex-col">
            <span className="font-display font-black text-3xl text-[#00D2FF]">
              3x+
            </span>
            <span className="font-mono text-xs text-[#8A90A6] uppercase mt-1">
              Retorno de inversión en ventas
            </span>
          </div>
          <div className="p-4 bg-[#0C0E14] border border-[#1E2230] flex flex-col">
            <span className="font-display font-black text-3xl text-white">
              +40%
            </span>
            <span className="font-mono text-xs text-[#8A90A6] uppercase mt-1">
              Más ventas en 2 meses promedio
            </span>
          </div>
          <div className="p-4 bg-[#0C0E14] border border-[#1E2230] flex flex-col">
            <span className="font-display font-black text-3xl text-[#00D2FF]">
              12
            </span>
            <span className="font-mono text-xs text-[#8A90A6] uppercase mt-1">
              Proyectos publicados con éxito
            </span>
          </div>
        </div>

        {/* 4 Pricing Plans Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {/* Card 1: KORE / LAUNCH */}
          <div className="p-6 lg:p-7 bg-[#0C0E14] border border-[#1E2230] hover:border-[#0052FF]/60 hover:shadow-[0_0_30px_rgba(0,82,255,0.15)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#8A90A6] uppercase tracking-wider font-semibold">
                  KORE / LAUNCH
                </span>
                <span className="font-mono text-[11px] text-[#8A90A6] px-2 py-0.5 bg-[#12141C] border border-[#1E2230]">
                  One-Page
                </span>
              </div>

              <div className="mb-6 pb-6 border-b border-[#1E2230]">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                    $6,000
                  </span>
                  <span className="font-mono text-xs font-bold text-[#8A90A6]">
                    MXN
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#8A90A6] block uppercase mt-2 tracking-wide font-medium">
                  ~$300 USD • ENTREGA 5-7 DÍAS
                </span>
              </div>

              <ul className="space-y-3 font-sans text-xs text-[#C4C9D9] mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>One-page layout optimizado para conversión</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>Copywriting persuasivo y arquitectura de ventas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>Integración con CRM / WhatsApp API</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>100% responsive optimizado para móviles</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>SEO técnico inicial e indexación en Google</span>
                </li>
              </ul>
            </div>

            <a
              href="#contacto"
              onClick={() => handleSelectPlan("KORE / LAUNCH ($6,000 MXN / ~$300 USD)")}
              className="w-full py-3.5 border border-[#1E2230] bg-[#12141C] text-center font-mono text-xs font-bold uppercase tracking-widest text-white hover:border-[#0052FF] hover:text-[#00D2FF] hover:bg-[#161A26] transition-all block"
            >
              QUIERO EMPEZAR →
            </a>
          </div>

          {/* Card 2: KORE / PRO (Featured / Blue Electric Highlight) */}
          <div className="p-6 lg:p-7 bg-[#0F131E] border-2 border-[#0052FF] shadow-[0_0_50px_rgba(0,82,255,0.35)] flex flex-col justify-between relative mt-3 md:mt-0">
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0052FF] text-white font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,82,255,0.7)] whitespace-nowrap">
              MÁS SOLICITADO
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-1">
                <span className="font-mono text-xs text-[#00D2FF] uppercase tracking-wider font-bold">
                  KORE / PRO
                </span>
                <span className="font-mono text-[11px] text-[#00D2FF] px-2 py-0.5 bg-[#0052FF]/20 border border-[#0052FF]/50 font-semibold">
                  Sitio Completo
                </span>
              </div>

              <div className="mb-6 pb-6 border-b border-[#0052FF]/30">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-black text-3xl sm:text-4xl text-[#00D2FF] tracking-tight">
                    $15,000
                  </span>
                  <span className="font-mono text-xs font-bold text-[#00D2FF]">
                    MXN
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#8A90A6] block uppercase mt-2 tracking-wide font-medium">
                  ~$750 USD • ENTREGA 10-15 DÍAS
                </span>
              </div>

              <ul className="space-y-3 font-sans text-xs text-[#F1F3F9] mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>4 a 7 páginas estratégicas de alto impacto</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>CMS autoadministrable sin necesidad de código</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>Score 95+ Core Web Vitals y velocidad extrema</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>Google Analytics 4 &amp; Meta Pixel configurados</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>1 año de hosting cloud gestionado + dominio</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>SEO y visibilidad en motores de IA (ChatGPT / Perplexity)</span>
                </li>
              </ul>
            </div>

            <a
              href="#contacto"
              onClick={() => handleSelectPlan("KORE / PRO ($15,000 MXN / ~$750 USD)")}
              className="w-full py-3.5 bg-[#0052FF] text-center font-mono text-xs font-bold uppercase tracking-widest text-white hover:bg-[#0066FF] hover:shadow-[0_0_35px_rgba(0,82,255,0.7)] transition-all block"
            >
              QUIERO EL SITIO PRO →
            </a>
          </div>

          {/* Card 3: KORE / ENTERPRISE */}
          <div className="p-6 lg:p-7 bg-[#0C0E14] border border-[#1E2230] hover:border-[#0052FF]/60 hover:shadow-[0_0_30px_rgba(0,82,255,0.15)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#8A90A6] uppercase tracking-wider font-semibold">
                  KORE / ENTERPRISE
                </span>
                <span className="font-mono text-[11px] text-[#8A90A6] px-2 py-0.5 bg-[#12141C] border border-[#1E2230]">
                  Escalable
                </span>
              </div>

              <div className="mb-6 pb-6 border-b border-[#1E2230]">
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="font-mono text-xs font-bold text-[#8A90A6] uppercase">
                    Desde
                  </span>
                  <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                    $25,000
                  </span>
                  <span className="font-mono text-xs font-bold text-[#8A90A6]">
                    MXN
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#8A90A6] block uppercase mt-2 tracking-wide font-medium">
                  ~$1,250 USD • BASE DE PROYECTO
                </span>
              </div>

              <ul className="space-y-3 font-sans text-xs text-[#C4C9D9] mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>Plataformas SaaS o portales avanzados</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>Catálogo e-commerce y pasarelas mundiales</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>Integraciones API / webhooks / bases de datos</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>SLA prioritario de soporte 24/7</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>Auditoría de seguridad y backups</span>
                </li>
              </ul>
            </div>

            <a
              href="#contacto"
              onClick={() => handleSelectPlan("KORE / ENTERPRISE (Desde $25,000 MXN / ~$1,250 USD)")}
              className="w-full py-3.5 border border-[#1E2230] bg-[#12141C] text-center font-mono text-xs font-bold uppercase tracking-widest text-white hover:border-[#0052FF] hover:text-[#00D2FF] hover:bg-[#161A26] transition-all block"
            >
              COTIZAR ENTERPRISE →
            </a>
          </div>

          {/* Card 4: KORE / CUSTOM */}
          <div className="p-6 lg:p-7 bg-[#0C0E14] border border-[#1E2230] hover:border-[#00D2FF]/60 hover:shadow-[0_0_30px_rgba(0,210,255,0.18)] transition-all duration-300 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#00D2FF] uppercase tracking-wider font-bold">
                  KORE / CUSTOM
                </span>
                <span className="font-mono text-[10px] text-[#00D2FF] px-2 py-0.5 bg-[#00D2FF]/10 border border-[#00D2FF]/30 font-semibold uppercase tracking-wider">
                  Presupuesto Flexible
                </span>
              </div>

              <div className="mb-6 pb-6 border-b border-[#1E2230]">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                    A la Medida
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#8A90A6] block uppercase mt-2 tracking-wide font-medium">
                  ADAPTADO A TU ALCANCE Y OBJETIVOS
                </span>
              </div>

              <ul className="space-y-3 font-sans text-xs text-[#C4C9D9] mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>Alcance definido según los requerimientos exactos de tu negocio</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>Ajuste de arquitectura, módulos y funcionalidades bajo demanda</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>Integración con sistemas existentes o herramientas heredadas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>Planificación por fases de entrega o desarrollo por sprints</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>Asesoría técnica inicial y levantamiento de requerimientos sin costo</span>
                </li>
              </ul>
            </div>

            <a
              href="#contacto"
              onClick={() => handleSelectPlan("KORE / CUSTOM (A la Medida - Presupuesto Flexible)")}
              className="w-full py-3.5 border border-[#00D2FF]/50 bg-[#00D2FF]/[0.04] backdrop-blur-sm text-center font-mono text-xs font-bold uppercase tracking-widest text-[#00D2FF] hover:bg-[#0052FF] hover:border-[#0052FF] hover:text-white hover:shadow-[0_0_30px_rgba(0,82,255,0.6)] transition-all block"
            >
              DISEÑAR MI PLAN →
            </a>
          </div>
        </div>

        {/* Small Print / Footnote */}
        <div className="mt-12 pt-6 border-t border-[#1E2230] text-center">
          <p className="font-mono text-xs text-[#8A90A6] max-w-3xl mx-auto leading-relaxed">
            *Precios más IVA en caso de requerir factura. Esquema de pago: 50% anticipo y 50% contra entrega.
          </p>
        </div>
      </div>
    </section>
  );
}
