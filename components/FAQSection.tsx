"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Cuánto cuesta una página web profesional con Kore?",
    answer:
      "Nuestros esquemas son directos y transparentes: KORE / LAUNCH por $6,000 MXN (~$300 USD) para landing pages de alta conversión; KORE / PRO por $15,000 MXN (~$750 USD) para sitios completos con CMS y hosting anual; KORE / ENTERPRISE desde $25,000 MXN (~$1,250 USD) para plataformas avanzadas y e-commerce; y KORE / CUSTOM adaptado 100% a la medida de tus objetivos. Esquema de pago: 50% anticipo y 50% contra entrega, sin costos ocultos.",
  },
  {
    question: "¿En cuánto tiempo entregan el sitio listo para producción?",
    answer:
      "Una Landing Page toma 5 a 7 días hábiles. Un Sitio Web Pro toma entre 10 y 15 días hábiles. Plataformas complejas o tiendas online se entregan típicamente en 3 a 4 semanas con cronograma estricto.",
  },
  {
    question: "¿Qué incluye el servicio de hosting y dominio administrado?",
    answer:
      "Incluye 1 año de alojamiento en arquitectura cloud de alta velocidad (AWS/Vercel Edge), certificado SSL corporativo, copias de seguridad semanales, monitoreo de ciberseguridad y registro/vinculación de dominio (.com, .io, etc.).",
  },
  {
    question: "¿Qué es la optimización para IA (ChatGPT, Claude, Perplexity)?",
    answer:
      "Estructuramos tu código con Schema.org, metadatos semánticos y arquitectura de datos JSON-LD para que los motores de IA puedan indexar, citar y recomendar tu negocio como referencia calificada ante preguntas de tus clientes.",
  },
  {
    question: "¿Por qué es mejor código a la medida que una plantilla de Wix o WordPress?",
    answer:
      "Las plantillas gratuitas o constructores visuales arrastran plugins obsoletos y código pesado que demoran más de 4 segundos en abrir en teléfonos. Con desarrollo nativo obtienes velocidad instantánea (menos de 1s), 100/100 en Google Core Web Vitals y una experiencia única sin limitaciones de diseño.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="relative py-24 lg:py-32 border-b border-[#1E2230] overflow-hidden bg-[#08090C]"
      id="faq"
    >
      <div className="max-w-[1000px] mx-auto px-5 lg:px-10 relative z-10">
        <div className="mb-14 text-center md:text-left">
          <span className="font-mono text-xs text-[#00D2FF] uppercase tracking-widest block mb-3 font-semibold">
            [ 08 — DUDAS FRECUENTES ]
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            LO QUE TODOS<br />
            PREGUNTAN ANTES<br />
            DE <span className="text-[#00D2FF]">EMPEZAR</span>
          </h2>
        </div>

        <div className="flex flex-col border-t border-[#1E2230]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-[#1E2230]">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-6 flex items-center justify-between text-left group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base md:text-lg text-white group-hover:text-[#00D2FF] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span className="font-mono text-xl text-[#00D2FF] transition-transform duration-300 ml-4 flex-shrink-0">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 text-sm text-[#8A90A6] leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
