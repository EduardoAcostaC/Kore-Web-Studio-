"use client";

import { useState } from "react";
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

interface SolutionItem {
  id: string;
  tabTitle: string;
  categoryTag: string;
  categoryTagColor: string;
  title: string;
  challenge: string;
  features: string[];
  ctaText: string;
  ctaColor: string;
  metrics: {
    label: string;
    value: string;
    color: string;
  }[];
}

const solutions: SolutionItem[] = [
  {
    id: "startups",
    tabTitle: "Startups & SaaS",
    categoryTag: "Para Startups & Proyectos Digitales",
    categoryTagColor: "text-brand-cyan",
    title: "Diseño de clase Silicon Valley para enamorar a clientes e inversionistas",
    challenge:
      "Tienes una idea o software brillante, pero tu página web actual no transmite solidez y los usuarios abandonan antes de comprender tu propuesta de valor.",
    features: [
      "Arquitectura estética moderna con micro-interacciones que generan confianza instantánea.",
      "Optimización para métricas de retención y registro de usuarios en menos de 3 clics.",
      "Integración con Analytics, CRMs y flujos de onboarding directo.",
    ],
    ctaText: "Comenzar con mi Startup",
    ctaColor: "text-brand-cyan",
    metrics: [
      { label: "Tasa de Demo Requests", value: "+180% alza", color: "text-emerald-400" },
      { label: "Percepción de Marca", value: "Enterprise Tier", color: "text-brand-cyan" },
      { label: "Tiempo de Entrega", value: "2 a 3 Semanas", color: "text-white" },
    ],
  },
  {
    id: "locales",
    tabTitle: "Negocios Locales & Servicios",
    categoryTag: "Para Negocios Locales & Empresas de Servicios",
    categoryTagColor: "text-emerald-400",
    title: "Haz que tu teléfono y WhatsApp no paren de recibir nuevos clientes",
    challenge:
      "Dependes del boca a boca o de redes sociales donde los clientes preguntan y desaparecen. Tu negocio necesita máxima autoridad en Google.",
    features: [
      "Botones de WhatsApp estratégicos y llamados a la acción claros en cada pantalla.",
      "Configuración de Google Maps, SEO Local y catálogo visual de tus servicios reales.",
      "Formularios rápidos que envían alertas directas a tu celular en tiempo real.",
    ],
    ctaText: "Multiplicar clientes locales",
    ctaColor: "text-emerald-400",
    metrics: [
      { label: "Consultas por WhatsApp", value: "+230% semanales", color: "text-emerald-400" },
      { label: "Aparición en Google", value: "Top 3 en tu zona", color: "text-brand-cyan" },
      { label: "Tiempo de Entrega", value: "1 a 2 Semanas", color: "text-white" },
    ],
  },
  {
    id: "ecommerce",
    tabTitle: "Tiendas Online & Marcas",
    categoryTag: "Para Tiendas Online & Marcas de Consumo",
    categoryTagColor: "text-purple-400",
    title: "Una experiencia de compra veloz donde comprar es un placer",
    challenge:
      "Las tiendas lentas sufren un alto abandono de carritos. Los compradores necesitan una navegación clara, estética refinada y máxima seguridad.",
    features: [
      "Checkout ultra simplificado en un solo paso (menos fricción = más pedidos completados).",
      "Carga de catálogo fotográfico instantánea sin retrasos en smartphone.",
      "Integración de pagos seguros y gestión de stock sincronizada.",
    ],
    ctaText: "Escalar mi tienda online",
    ctaColor: "text-purple-400",
    metrics: [
      { label: "Reducción de Carrito Caído", value: "-45% abandono", color: "text-emerald-400" },
      { label: "Satisfacción de Compra", value: "98.4% positiva", color: "text-brand-cyan" },
      { label: "Tiempo de Entrega", value: "3 a 4 Semanas", color: "text-white" },
    ],
  },
  {
    id: "consultores",
    tabTitle: "Profesionales & Consultores",
    categoryTag: "Para Profesionales, Asesores & Consultores",
    categoryTagColor: "text-amber-400",
    title: "Posiciónate como el referente número uno de tu especialidad",
    challenge:
      "Tu presencia digital actual no refleja tu verdadera trayectoria y calibre profesional, lo que dificulta que clientes de alto perfil confíen en ti.",
    features: [
      "Diseño que transmite máxima autoridad, casos de estudio y testimonios impecables.",
      "Agenda interactiva de citas sincronizada con tu calendario en tiempo real.",
      "Filtro de prospectos calificados para que sólo hables con personas comprometidas.",
    ],
    ctaText: "Construir mi marca de autoridad",
    ctaColor: "text-amber-400",
    metrics: [
      { label: "Percepción Profesional", value: "Top Referente", color: "text-emerald-400" },
      { label: "Reuniones Confirmadas", value: "Automáticas", color: "text-brand-cyan" },
      { label: "Tiempo de Entrega", value: "1 a 2 Semanas", color: "text-white" },
    ],
  },
];

export default function SolutionsSwitcher() {
  const [activeTab, setActiveTab] = useState("startups");
  const current = solutions.find((s) => s.id === activeTab) || solutions[0];

  return (
    <section className="w-full max-w-6xl mx-auto px-5 lg:px-8 py-20" id="soluciones">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>SOLUCIONES ADAPTADAS</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-3">
          ¿Cuál es tu tipo de negocio?
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          Haz clic en tu industria para ver exactamente qué problema resolvemos y qué
          beneficios tangibles obtendrás.
        </p>
      </div>

      {/* Segment Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto mb-8">
        {solutions.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-brand-blue text-white shadow-[0_0_20px_rgba(0,102,255,0.4)]"
                  : "bg-white/5 text-neutral-300 border border-white/10 hover:border-white/30"
              }`}
            >
              {item.tabTitle}
            </button>
          );
        })}
      </div>

      {/* Dynamic Content Card */}
      <div className="rounded-3xl glow-card p-6 sm:p-10 border border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Info Column */}
          <div className="lg:col-span-7 space-y-4">
            <span className={`text-xs font-mono uppercase tracking-wider ${current.categoryTagColor}`}>
              {current.categoryTag}
            </span>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              {current.title}
            </h3>

            <p className="text-neutral-300 text-sm leading-relaxed">
              <strong>El reto habitual:</strong> {current.challenge}
            </p>

            <div className="space-y-2.5 pt-2">
              {current.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contacto"
                className={`inline-flex items-center gap-2 text-sm font-semibold ${current.ctaColor} hover:text-white transition-colors`}
              >
                <span>{current.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Impact Metrics Card */}
          <div className="lg:col-span-5 bg-[#070b14] p-5 sm:p-6 rounded-2xl border border-white/5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <TrendingUp className="w-4 h-4 text-brand-cyan" />
              <span>IMPACTO EN TU CRECIMIENTO</span>
            </div>

            {current.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between"
              >
                <span className="text-xs text-neutral-300">{metric.label}</span>
                <span className={`font-bold font-mono text-sm ${metric.color}`}>
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
