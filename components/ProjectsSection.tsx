"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Lock, CheckCircle2, Compass, HeartPulse, ShoppingBag, Sparkles, ChevronDown, ChevronUp } from "lucide-react";

interface InteractiveDemo {
  id: string;
  tabLabel: string;
  tabIcon: React.ReactNode;
  categoryBadge: string;
  title: string;
  description: string;
  browserUrl: string;
  tags: string[];
  image: string;
}

const interactiveDemos: InteractiveDemo[] = [
  {
    id: "turismo",
    tabLabel: "Turismo & Reservas",
    tabIcon: <Compass className="w-3.5 h-3.5 text-[#00D2FF]" />,
    categoryBadge: "Turismo & Reservas Online",
    title: "Xochimilco Mágico — Experiencias y Turismo Cultural",
    description:
      "Plataforma inmersiva con reservas de trajineras, selección de fechas, paquetes guiados y fotografía de alta resolución. Diseñada para enamorar a viajeros locales e internacionales.",
    browserUrl: "xochimilcomagico.com",
    tags: ["Sistema de Reservas", "Diseño Inmersivo", "Mobile-First", "Alta Velocidad"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-K4JVrkRDXFtI0CUsnXstqFkeWKWEnsTyKKFfMUgHrangb6d6qP0PpjBmAWRVAD9Lbq8RxVgTfvZNYrGqygxHJQyx7DtajTT5zjOFT0uq6EI0JgrYnmjqEJwVYKFgwOFi_ua6_UIyLKeI_P29KYDDfrO3JhdqzDGbIqAAOsC82kgWtU2nbHu0vNWovnuoiZ4pnQKNkNXPFBEAtu4urT4YDetEKxEuh7IJGcYMmCHHR1FgznEdQgTGZg",
  },
  {
    id: "salud",
    tabLabel: "Salud & Agendamiento",
    tabIcon: <HeartPulse className="w-3.5 h-3.5 text-emerald-400" />,
    categoryBadge: "Sitio Web Médico & Agendamiento",
    title: "Dr. Morales — Cardiología & Salud Integral",
    description:
      "Diseño sobrio, confiable y empático para profesionales médicos. Integra agenda de citas digital, presentación de especialidades, credenciales médicas y testimonios de pacientes.",
    browserUrl: "drmorales-cardiologia.com",
    tags: ["Agendamiento Online", "Credenciales Clínicas", "Confianza & Empatía", "Atención Inmediata"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkL3sr2AprtOKICVITNm7vl3K7f193Ga64yLXi2QEio-2eHOjKL7b4pnUOU6Y-75COCxHdZvSpwWvntvTH4emIgt9u6oj3zPokdY1JgeAjZICtVteWHsqxTuaPZlMIOSa1MXBSlHDXE4htFJo_ZGf1M1YEX1hnIGz9u0Oh8mt-INHZJ9gZQQW44t-8S5t4VEpF8axO5G9RcqjUVimtzPxcCR0sxKR0qnZ36kVXLuWbPqTnmOn58q5_EA",
  },
  {
    id: "ecommerce",
    tabLabel: "E-Commerce Boutique",
    tabIcon: <ShoppingBag className="w-3.5 h-3.5 text-purple-400" />,
    categoryBadge: "E-Commerce Boutique de Alta Gama",
    title: "Aura Living — Tienda E-commerce & Lifestyle",
    description:
      "Tienda online con microinteracciones de lujo, catálogo fotográfico dinámico, pasarela de pago Stripe ultra segura y checkout optimizado en 1 solo paso.",
    browserUrl: "auraliving-lifestyle.com",
    tags: ["Checkout en 1 Paso", "Catálogo Fluido", "Pagos Stripe/PayPal", "Diseño Minimalista"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVh93u502w-ZzR2b813oK-V08eZkE0BvA1K_D-rX3QjKx81TjYJ_a7y9uB2kX1oP0q8rS-tV9wX1yZaBcDeFgHiJkLmNoP",
  },
  {
    id: "saas",
    tabLabel: "Plataformas SaaS",
    tabIcon: <Sparkles className="w-3.5 h-3.5 text-amber-400" />,
    categoryBadge: "Plataforma Cloud & SaaS",
    title: "MetrixIQ Cloud — Dashboards de Métricas en Tiempo Real",
    description:
      "Portal corporativo de alta autoridad con demostraciones interactivas de software, captura de leads calificados y arquitectura cloud con 99.99% de uptime.",
    browserUrl: "metrixiq-cloud.io",
    tags: ["Arquitectura Cloud", "Dashboards Interactivos", "Captura de Leads", "API Integrations"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyNsYqYw32s6fRtCbwRx6Miwiam0oYHYtfyoEMS6dxNZdHby8SvfeNxzQdhruqbL2oQQ7Rh0n8LD2QAuKDSX-vN3fiuLYNNwZ8bfZpnIcA2H6ZOHzYx9fMuQj73hR4tXnQgxLVYw03fQp64qLr3O6FzQ9R2nxN83Dlw-sYG4EO9Ei8RCuGnL4VlyRUHfsMupI8Kw9_QW8XLM3bWdwQLKGJ9N8rgpCfwY_KdedVuXw",
  },
];

export default function ProjectsSection() {
  const [showInteractiveDemo, setShowInteractiveDemo] = useState(false);
  const [activeDemoIndex, setActiveDemoIndex] = useState(0);

  const activeDemo = interactiveDemos[activeDemoIndex];

  return (
    <section
      className="relative py-24 lg:py-32 border-b border-[#1E2230] overflow-hidden bg-[#08090C]"
      id="proyectos"
    >
      {/* Background Watermark 02 */}
      <div className="absolute right-10 top-12 font-display font-black text-[220px] md:text-[340px] text-white/[0.02] select-none pointer-events-none leading-none">
        02
      </div>

      <div className="max-w-[1360px] mx-auto px-5 lg:px-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs text-[#00D2FF] uppercase tracking-widest block mb-3 font-semibold">
              [ 02 — CASOS SELECCIONADOS ]
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              PROYECTOS QUE<br />
              HACEN LA<br />
              <span className="bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#0052FF] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,210,255,0.3)]">
                DIFERENCIA
              </span>
            </h2>
          </div>
          <a
            className="px-6 py-3 border border-[#0052FF] bg-[#0052FF]/20 text-[#00D2FF] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#0052FF] hover:text-white transition-all self-start md:self-end flex items-center gap-2"
            href="#contacto"
          >
            <span>INICIAR PROYECTO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Portfolio Grid (4 Cards from reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Project 1 */}
          <div className="bg-[#0C0E14] border border-[#1E2230] flex flex-col group overflow-hidden">
            <div className="h-48 w-full overflow-hidden bg-[#12141C] relative">
              <Image
                alt="Nexus FinTech"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyNsYqYw32s6fRtCbwRx6Miwiam0oYHYtfyoEMS6dxNZdHby8SvfeNxzQdhruqbL2oQQ7Rh0n8LD2QAuKDSX-vN3fiuLYNNwZ8bfZpnIcA2H6ZOHzYx9fMuQj73hR4tXnQgxLVYw03fQp64qLr3O6FzQ9R2nxN83Dlw-sYG4EO9Ei8RCuGnL4VlyRUHfsMupI8Kw9_QW8XLM3bWdwQLKGJ9N8rgpCfwY_KdedVuXw"
              />
              <span className="absolute top-3 left-3 bg-[#08090C]/90 text-[#00D2FF] font-mono text-[10px] px-2 py-0.5 border border-[#0052FF]/40 z-10">
                FINTECH / SAAS
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h4 className="font-display font-bold text-sm uppercase text-white tracking-wide mb-1">
                Nexus FinTech Platform
              </h4>
              <p className="text-xs text-[#8A90A6] leading-relaxed mb-4 flex-1">
                Plataforma de liquidación de pagos cloud con dashboards analíticos y 99.99% uptime.
              </p>
              <a href="#contacto" className="font-mono text-[11px] text-[#00D2FF] uppercase font-semibold hover:underline flex items-center gap-1">
                VER CASO →
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-[#0C0E14] border border-[#1E2230] flex flex-col group overflow-hidden">
            <div className="h-48 w-full overflow-hidden bg-[#12141C] relative">
              <Image
                alt="Aura Residences"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU-ImJJoxqODXeSTjciXuJFtjsipF5qCLjxBavVz1ILg9uMb5fgvf55qnalQLYh2fE89zwv2Ko_9H8BQOkyp67eMNmQN_LV1l8qIeN1fo-6zDwRuOFq2jfxTzE5Ur1caQp2_-sLWorjLZSoGAfNXCxEOG0vgU7sMKBjh7mCqgfm6k_Ka_t7TLcLbe1zaraYH7Jz4XbXXnRpHvpLlYTZZBDlFAAhewx6o5V4JcA--4"
              />
              <span className="absolute top-3 left-3 bg-[#08090C]/90 text-[#00D2FF] font-mono text-[10px] px-2 py-0.5 border border-[#0052FF]/40 z-10">
                INMOBILIARIA DE LUJO
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h4 className="font-display font-bold text-sm uppercase text-white tracking-wide mb-1">
                Aura Residences
              </h4>
              <p className="text-xs text-[#8A90A6] leading-relaxed mb-4 flex-1">
                Landing page de conversión inmobiliaria ultra-lujo con tours 3D y captación de leads inversores.
              </p>
              <a href="#contacto" className="font-mono text-[11px] text-[#00D2FF] uppercase font-semibold hover:underline flex items-center gap-1">
                VER CASO →
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-[#0C0E14] border border-[#1E2230] flex flex-col group overflow-hidden">
            <div className="h-48 w-full overflow-hidden bg-[#12141C] relative">
              <Image
                alt="Vortex Supply"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo3XpLS8vrbBvcBiLxRKKbHSRbgyLRzH8ytWfZ7qAC4lIiwGmtUGRpKNfcjwnfVzXkTfW_3Pct1t_QXcmZ3ITWEEGAj82-8LcUyR_UGQ7R7QBEbiDCTiz5clGKah7etB5gsS0WnSuwxInRKTxjQySLRrLB8Txp6e3ycx80Wl_Y8J8lAqyoUOYfKehXNaNsGrKe6xPhwQmbHFE5ZQye79RHPoy-qdrrbksslGXCTRk"
              />
              <span className="absolute top-3 left-3 bg-[#08090C]/90 text-[#00D2FF] font-mono text-[10px] px-2 py-0.5 border border-[#0052FF]/40 z-10">
                ECOMMERCE GLOBAL
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h4 className="font-display font-bold text-sm uppercase text-white tracking-wide mb-1">
                Vortex Store &amp; Retail
              </h4>
              <p className="text-xs text-[#8A90A6] leading-relaxed mb-4 flex-1">
                Tienda headless de alto tráfico con checkout en 1 clic y sincronización instantánea de stock.
              </p>
              <a href="#contacto" className="font-mono text-[11px] text-[#00D2FF] uppercase font-semibold hover:underline flex items-center gap-1">
                VER CASO →
              </a>
            </div>
          </div>

          {/* High-Impact Electric Blue Card: ¿TU NEGOCIO AQUÍ? */}
          <div className="bg-gradient-to-br from-[#0052FF] to-[#0038B6] border border-[#00D2FF] p-6 flex flex-col justify-between text-white relative overflow-hidden shadow-[0_0_40px_rgba(0,82,255,0.4)]">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#00D2FF]/20 rounded-full blur-2xl pointer-events-none" />
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#00D2FF] font-bold block mb-2">
                / PRÓXIMO CASO
              </span>
              <h3 className="font-display font-black text-2xl uppercase leading-tight mb-3">
                ¿TU NEGOCIO AQUÍ?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed">
                Tu caso puede ser el siguiente. En 24 horas te entregamos un plan técnico a tu medida.
              </p>
            </div>
            <a
              className="mt-6 w-full py-3 bg-white text-[#002682] font-mono text-xs font-bold uppercase tracking-widest text-center hover:bg-[#00D2FF] hover:text-black transition-all"
              href="#contacto"
            >
              INICIAR PROYECTO →
            </a>
          </div>
        </div>

        {/* Interactive Demo Simulator Toggle Button */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setShowInteractiveDemo(!showInteractiveDemo)}
            className="font-mono text-xs uppercase tracking-widest px-6 py-3 border border-[#0052FF] text-[#00D2FF] bg-[#0052FF]/10 hover:bg-[#0052FF] hover:text-white transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>{showInteractiveDemo ? "OCULTAR DEMOS INTERACTIVAS" : "EXPLORAR DEMOS INTERACTIVAS EN VIVO"}</span>
            {showInteractiveDemo ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          <a
            className="font-mono text-xs uppercase tracking-widest px-6 py-3 border border-[#1E2230] text-[#C4C9D9] hover:border-[#00D2FF] hover:text-[#00D2FF] transition-all"
            href="#contacto"
          >
            SOLICITAR AUDITORÍA DE MI SITIO →
          </a>
        </div>

        {/* Expandable Live Interactive Browser Simulator */}
        {showInteractiveDemo && (
          <div className="mt-10 p-6 md:p-8 bg-[#0C0E14] border border-[#1E2230] rounded-none animate-in fade-in duration-300">
            {/* Simulator Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-[#1E2230] pb-4">
              {interactiveDemos.map((demo, idx) => (
                <button
                  key={demo.id}
                  type="button"
                  onClick={() => setActiveDemoIndex(idx)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider flex items-center gap-2 border transition-all cursor-pointer ${
                    activeDemoIndex === idx
                      ? "border-[#00D2FF] bg-[#0052FF]/20 text-white font-bold"
                      : "border-[#1E2230] bg-[#08090C] text-[#8A90A6] hover:text-white hover:border-[#0052FF]/50"
                  }`}
                >
                  {demo.tabIcon}
                  <span>{demo.tabLabel}</span>
                </button>
              ))}
            </div>

            {/* Browser Mockup Window */}
            <div className="bg-[#08090C] border border-[#1E2230] overflow-hidden">
              {/* Browser Header Bar */}
              <div className="h-10 bg-[#0C0E14] border-b border-[#1E2230] px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#08090C] border border-[#1E2230] font-mono text-[11px] text-[#8A90A6]">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>https://{activeDemo.browserUrl}</span>
                </div>
                <div className="font-mono text-[10px] text-[#00D2FF]">● LIVE PREVIEW</div>
              </div>

              {/* Browser Content Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="font-mono text-[11px] text-[#00D2FF] uppercase font-bold tracking-wider">
                    {activeDemo.categoryBadge}
                  </span>
                  <h4 className="font-display font-black text-xl text-white uppercase">
                    {activeDemo.title}
                  </h4>
                  <p className="text-xs text-[#8A90A6] leading-relaxed">
                    {activeDemo.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {activeDemo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-[#12141C] border border-[#1E2230] text-[11px] font-mono text-[#C4C9D9] flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#00D2FF]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2">
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 font-mono text-xs text-[#00D2FF] font-bold uppercase tracking-wider hover:underline"
                    >
                      <span>Quiero un proyecto similar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7 h-64 sm:h-80 bg-[#12141C] border border-[#1E2230] overflow-hidden relative">
                  <Image
                    src={activeDemo.image}
                    alt={activeDemo.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
