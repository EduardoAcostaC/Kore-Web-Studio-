"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Compass,
  HeartPulse,
  ShoppingBag,
  Sparkles,
  Lock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

interface ProjectSlide {
  id: string;
  tabLabel: string;
  tabIcon: React.ReactNode;
  categoryBadge: string;
  categoryColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeTextColor: string;
  title: string;
  description: string;
  browserUrl: string;
  statusBadge: string;
  statusTag: string;
  statusTagBg: string;
  statusTagText: string;
  tags: string[];
  image: string;
}

const projects: ProjectSlide[] = [
  {
    id: "turismo",
    tabLabel: "Turismo & Reservas",
    tabIcon: <Compass className="w-4 h-4 text-amber-400" />,
    categoryBadge: "Turismo & Reservas Online",
    categoryColor: "amber",
    badgeBg: "bg-amber-400/10",
    badgeBorder: "border-amber-400/25",
    badgeTextColor: "text-amber-300",
    title: "Xochimilco Mágico — Experiencias y Turismo Cultural",
    description:
      "Plataforma inmersiva con reservas de trajineras, selección de fechas, paquetes guiados y fotografía de alta resolución. Diseñada para enamorar a viajeros locales e internacionales desde el primer segundo.",
    browserUrl: "xochimilcomagico.com",
    statusBadge: "UI Activa y Optimizada",
    statusTag: "Turismo & Cultura",
    statusTagBg: "bg-brand-blue/80",
    statusTagText: "text-white",
    tags: [
      "Sistema de Reservas",
      "Diseño Inmersivo",
      "Mobile-First",
      "Alta Velocidad",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-K4JVrkRDXFtI0CUsnXstqFkeWKWEnsTyKKFfMUgHrangb6d6qP0PpjBmAWRVAD9Lbq8RxVgTfvZNYrGqygxHJQyx7DtajTT5zjOFT0uq6EI0JgrYnmjqEJwVYKFgwOFi_ua6_UIyLKeI_P29KYDDfrO3JhdqzDGbIqAAOsC82kgWtU2nbHu0vNWovnuoiZ4pnQKNkNXPFBEAtu4urT4YDetEKxEuh7IJGcYMmCHHR1FgznEdQgTGZg",
  },
  {
    id: "salud",
    tabLabel: "Salud & Agendamiento",
    tabIcon: <HeartPulse className="w-4 h-4 text-brand-cyan" />,
    categoryBadge: "Sitio Web Médico & Agendamiento",
    categoryColor: "cyan",
    badgeBg: "bg-brand-cyan/15",
    badgeBorder: "border-brand-cyan/30",
    badgeTextColor: "text-cyan-300",
    title: "Dr. Morales — Cardiología & Salud Integral",
    description:
      "Diseño sobrio, confiable y empático para profesionales médicos. Integra agenda de citas digital, presentación de especialidades, credenciales médicas y testimonios de pacientes.",
    browserUrl: "drmorales-cardiologia.com",
    statusBadge: "UI Médica Certificada",
    statusTag: "Salud & Bienestar",
    statusTagBg: "bg-brand-cyan/80",
    statusTagText: "text-black",
    tags: [
      "Agendamiento Online",
      "Credenciales Clínicas",
      "Confianza & Empatía",
      "Atención Inmediata",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkL3sr2AprtOKICVITNm7vl3K7f193Ga64yLXi2QEio-2eHOjKL7b4pnUOU6Y-75COCxHdZvSpwWvntvTH4emIgt9u6oj3zPokdY1JgeAjZICtVteWHsqxTuaPZlMIOSa1MXBSlHDXE4htFJo_ZGf1M1YEX1hnIGz9u0Oh8mt-INHZJ9gZQQW44t-8S5t4VEpF8axO5G9RcqjUVimtzPxcCR0sxKR0qnZ36kVXLuWbPqTnmOn58q5_EA",
  },
  {
    id: "ecommerce",
    tabLabel: "E-Commerce Boutique",
    tabIcon: <ShoppingBag className="w-4 h-4 text-purple-400" />,
    categoryBadge: "E-Commerce Boutique de Alta Gama",
    categoryColor: "purple",
    badgeBg: "bg-purple-500/15",
    badgeBorder: "border-purple-500/30",
    badgeTextColor: "text-purple-300",
    title: "Aura Living — Tienda E-commerce & Lifestyle",
    description:
      "Tienda online minimalista con catálogo interactivo, carrito dinámico, pagos optimizados y fotografía editorial. Diseñada para elevar el ticket promedio y ofrecer una experiencia de compra sin fricciones.",
    browserUrl: "auraliving.store",
    statusBadge: "Alta Conversión",
    statusTag: "E-Commerce Boutique",
    statusTagBg: "bg-purple-600/80",
    statusTagText: "text-white",
    tags: [
      "Catálogo Interactivo",
      "Checkout Rápido",
      "Experiencia Editorial",
      "Optimización de Conversión",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDj9PQMwn_5J3TnrViucJrWF1zWIhhE86jafVVwlvCk4eetafczSkARGDg2JSmO1rxFbquxqTOYfr2ICReuzvKI-zoVXYogpRzgAmU1zbvyU6u1w373JoEthZK17uyWmtcFC-w9RaqfV7KPWOWK7G0j_DTlKBdsg6KLRnDmlfJ5Ctld1mIjBiTe-o3bPhM0Xc3xHzDju44P3pNgL_BRTyOCs5GvSOFRkE3Au9CHZyvMXGs6C8b7kkrCg",
  },
];

export default function ShowcaseCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentSlide];

  return (
    <section className="w-full max-w-6xl mx-auto px-5 lg:px-8 py-16" id="portafolio">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SHOWCASE INTERACTIVO DE EXPERIENCIAS</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Mira lo que podemos construir para ti
        </h2>
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
          Explora cómo transformamos la presencia digital de marcas turísticas,
          profesionales de la salud y tiendas online con interfaces modernas y fluidas.
        </p>
      </div>

      {/* Project Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto mb-8">
        {projects.map((project, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={project.id}
              onClick={() => setCurrentSlide(idx)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "carousel-tab-active"
                  : "bg-white/5 text-neutral-300 border-white/10 hover:border-brand-cyan/40 hover:text-white"
              }`}
            >
              {project.tabIcon}
              <span>{project.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Main Carousel Container */}
      <div className="relative rounded-3xl glow-card p-4 sm:p-7 lg:p-9 border border-white/10 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
        {/* Carousel Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">
          {/* Visual Mockup Column */}
          <div className="lg:col-span-7">
            <div className="group relative rounded-2xl overflow-hidden border border-white/15 bg-[#090d18] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              {/* Browser Chrome Bar */}
              <div className="px-4 py-2.5 bg-[#0b0e17] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="text-[11px] font-mono text-neutral-400 bg-white/5 px-4 py-0.5 rounded-full border border-white/5 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>{currentProject.browserUrl}</span>
                </div>
                <div className="flex items-center gap-1 text-neutral-500">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Image Preview Container */}
              <div className="relative overflow-hidden aspect-[16/10] bg-[#070a12]">
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  unoptimized
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{currentProject.statusBadge}</span>
                  </span>
                  <span
                    className={`${currentProject.statusTagBg} ${currentProject.statusTagText} backdrop-blur-md px-3 py-1 rounded-full font-mono text-[11px] font-semibold`}
                  >
                    {currentProject.statusTag}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${currentProject.badgeBg} ${currentProject.badgeBorder} ${currentProject.badgeTextColor} text-xs font-semibold mb-3 border`}
              >
                {currentProject.tabIcon}
                <span>{currentProject.categoryBadge}</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-snug mb-3">
                {currentProject.title}
              </h3>

              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                {currentProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href="#contacto"
                className="px-5 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 shadow-[0_0_20px_rgba(0,102,255,0.35)] transition-all flex items-center justify-center gap-2"
              >
                <span>Solicitar Proyecto Similar</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contacto"
                className="px-4 py-3 rounded-xl font-medium text-xs text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2"
              >
                <span>Consultar Detalles</span>
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Controls Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {projects.map((p, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={p.id}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Ver proyecto ${p.tabLabel}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? "w-7 h-3 bg-brand-cyan shadow-[0_0_10px_#00D2FF]"
                      : "w-3 h-3 bg-white/20 hover:bg-white/50"
                  }`}
                />
              );
            })}
          </div>

          {/* Arrow Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Proyecto anterior"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Proyecto siguiente"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all flex items-center justify-center cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
