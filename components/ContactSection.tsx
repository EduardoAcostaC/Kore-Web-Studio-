"use client";

import { useState } from "react";
import { MessageCircle, Mail, Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    goal: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular envío rápido
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-5 lg:px-8 py-20 pb-28" id="contacto">
      <div className="rounded-3xl glow-card p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        {/* Glow orb */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start relative z-10">
          {/* Left Column: Direct Warm Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Disponibilidad actual para nuevos proyectos</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Hablemos de tu idea y te asesoramos sin costo ni compromiso.
            </h2>

            <p className="text-neutral-300 text-sm leading-relaxed">
              ¿No sabes exactamente qué tipo de web o plataforma necesita tu marca?
              Conversemos 15 minutos, analizamos tu situación actual y te damos una
              recomendación honesta.
            </p>

            {/* WhatsApp Priority Channel */}
            <a
              href="https://wa.me/5215500000000?text=Hola%20Kore%20Web%20Studio,%20quiero%20solicitar%20asesor%C3%ADa%20gratuita%20para%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 to-emerald-600/5 border border-emerald-500/30 hover:border-emerald-400 flex items-center justify-between transition-all shadow-[0_0_25px_rgba(16,185,129,0.15)]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm group-hover:text-emerald-300 transition-colors">
                    Hablar directo por WhatsApp
                  </div>
                  <div className="text-emerald-400 text-xs">
                    Respuesta promedio en menos de 15 minutos
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Email Channel */}
            <a
              href="mailto:contacto@korewebstudio.com"
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-blue/50 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/15 text-brand-cyan flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-medium text-xs sm:text-sm">
                    contacto@korewebstudio.com
                  </div>
                  <div className="text-neutral-400 text-xs">
                    Para propuestas o consultas de alianzas
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </a>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#070b14]/90 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl">
            <h3 className="font-display font-bold text-lg text-white mb-1">
              Envíanos un mensaje
            </h3>
            <p className="text-neutral-400 text-xs mb-5">
              Te responderemos hoy mismo para coordinar una llamada o responder tus
              dudas.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-center space-y-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-10 h-10 text-brand-cyan mx-auto" />
                <h4 className="text-white font-display font-bold text-base">
                  ¡Mensaje recibido con éxito!
                </h4>
                <p className="text-xs text-brand-cyan leading-relaxed max-w-md mx-auto">
                  Gracias por contactarnos. Nos comunicaremos contigo en breve para
                  asesorarte a fondo y poner en marcha tu proyecto.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", contact: "", email: "", goal: "" });
                  }}
                  className="mt-3 px-4 py-2 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:text-white"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-xs font-semibold text-neutral-300 mb-1.5"
                    htmlFor="c-name"
                  >
                    Tu Nombre o Nombre de tu Marca *
                  </label>
                  <input
                    id="c-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Ej. Carlos Rodríguez o MiMarca"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-semibold text-neutral-300 mb-1.5"
                      htmlFor="c-contact"
                    >
                      WhatsApp o Teléfono *
                    </label>
                    <input
                      id="c-contact"
                      required
                      type="text"
                      value={formData.contact}
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
                      placeholder="+54 9 11 1234-5678"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold text-neutral-300 mb-1.5"
                      htmlFor="c-email"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="carlos@empresa.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold text-neutral-300 mb-1.5"
                    htmlFor="c-goal"
                  >
                    ¿Qué buscas lograr con tu sitio web? *
                  </label>
                  <textarea
                    id="c-goal"
                    required
                    rows={3}
                    value={formData.goal}
                    onChange={(e) =>
                      setFormData({ ...formData, goal: e.target.value })
                    }
                    placeholder="Cuéntanos sobre tu proyecto: ¿Buscas rediseñar tu web actual, crear una tienda, o un sitio profesional con reservas?"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-cyan shadow-[0_0_25px_rgba(0,102,255,0.4)] hover:shadow-[0_0_35px_rgba(0,210,255,0.6)] hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>
                    {isLoading
                      ? "Enviando mensaje..."
                      : "Solicitar Asesoría Gratuita"}
                  </span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
