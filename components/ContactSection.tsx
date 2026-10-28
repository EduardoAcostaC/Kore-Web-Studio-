"use client";

import { useState } from "react";
import {
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    service: "Sitio Web Pro ($1,150 USD)",
    goal: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Ocurrió un error al enviar tu solicitud de cotización."
        );
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Hubo un problema de conexión. Por favor intenta de nuevo o escríbenos directamente por WhatsApp.";
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="relative py-24 lg:py-32 border-b border-[#1E2230] overflow-hidden bg-[#08090C]"
      id="contacto"
    >
      {/* Background Watermark 09 */}
      <div className="absolute right-10 top-12 font-display font-black text-[220px] md:text-[340px] text-white/[0.02] select-none pointer-events-none leading-none">
        09
      </div>

      <div className="max-w-[1360px] mx-auto px-5 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Guarantees */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-[#00D2FF] uppercase tracking-widest block mb-3 font-semibold">
              [ 09 — CONTACTO DIRECTO ]
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-tight mb-6">
              CUÉNTANOS<br />
              DE TU NEGOCIO.<br />
              EN 24 H TIENES<br />
              <span className="text-[#00D2FF]">PROPUESTA.</span>
            </h2>
            <p className="text-sm text-[#8A90A6] leading-relaxed mb-8">
              Sin cotizaciones eternas: nos dices qué vendes y a quién, y te enviamos un plan claro con precio exacto y fecha de entrega por escrito. La primera consulta es 100% gratuita.
            </p>

            <div className="space-y-4 font-mono text-xs text-[#C4C9D9]">
              <div className="flex items-center gap-3">
                <span className="text-[#00D2FF] font-bold flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  EMAIL:
                </span>
                <a
                  href="mailto:contacto@korewebstudio.com"
                  className="text-white hover:text-[#00D2FF] transition-colors"
                >
                  contacto@korewebstudio.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#00D2FF] font-bold flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  WHATSAPP:
                </span>
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.contactCard)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold underline flex items-center gap-1"
                >
                  <span>Chat Directo en Tiempo Real →</span>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#00D2FF] font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  HORARIO:
                </span>
                <span className="text-[#8A90A6]">
                  Lunes a Viernes 09:00 - 19:00 hrs
                </span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#1E2230] space-y-3">
              <div className="flex items-center gap-2 font-mono text-[11px] text-[#00D2FF] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
                <span>RESPUESTA GARANTIZADA</span>
              </div>
              <p className="text-xs text-[#8A90A6] leading-relaxed">
                Recibe tu cotización personalizada, propuesta de arquitectura y cronograma de entrega en menos de 24 horas hábiles.
              </p>
            </div>
          </div>

          {/* Right Column: Full Interactive Form connected to /api/contact */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="p-8 bg-[#0C0E14] border border-[#00D2FF]/40 text-center space-y-4 shadow-2xl animate-in fade-in duration-300">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#0052FF]/20 border border-[#00D2FF]/50 flex items-center justify-center text-[#00D2FF]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display font-black text-2xl text-white uppercase tracking-wide">
                  ¡Propuesta en marcha!
                </h4>
                <p className="text-xs text-[#8A90A6] leading-relaxed max-w-md mx-auto">
                  Hemos recibido los detalles de tu proyecto. Nuestro equipo técnico evaluará tu modelo y te responderá en menos de 24 horas hábiles con tu propuesta personalizada.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppUrl(
                      `Hola Kore Web Studio, acabo de enviar el formulario para ${formData.name}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Avisar por WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        contact: "",
                        service: "Sitio Web Pro ($1,150 USD)",
                        goal: "",
                      });
                    }}
                    className="px-6 py-3 border border-[#1E2230] text-[#8A90A6] hover:text-white font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 bg-[#0C0E14] border border-[#1E2230] flex flex-col gap-5 shadow-2xl"
              >
                {errorMessage && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 text-left space-y-2 animate-in fade-in duration-200">
                    <div className="flex items-start gap-2.5 text-red-400">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div className="text-xs leading-relaxed">
                        <span className="font-semibold block text-red-300 mb-0.5">
                          No se pudo enviar el correo:
                        </span>
                        {errorMessage}
                      </div>
                    </div>
                    <div className="pt-1">
                      <a
                        href={getWhatsAppUrl(WHATSAPP_MESSAGES.contactFallback)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>O háblanos directamente por WhatsApp aquí →</span>
                      </a>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs text-[#8A90A6] uppercase tracking-wider">
                      Nombre Completo o Marca *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Alexander Ramos"
                      className="w-full bg-[#08090C] border border-[#232838] px-4 py-3 text-sm text-white placeholder-[#505770] focus:outline-none focus:border-[#00D2FF] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs text-[#8A90A6] uppercase tracking-wider">
                      Email Corporativo *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@tuempresa.com"
                      className="w-full bg-[#08090C] border border-[#232838] px-4 py-3 text-sm text-white placeholder-[#505770] focus:outline-none focus:border-[#00D2FF] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs text-[#8A90A6] uppercase tracking-wider">
                      WhatsApp / Teléfono *
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.contact}
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
                      placeholder="+52 55 ..."
                      className="w-full bg-[#08090C] border border-[#232838] px-4 py-3 text-sm text-white placeholder-[#505770] focus:outline-none focus:border-[#00D2FF] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs text-[#8A90A6] uppercase tracking-wider">
                      ¿Qué servicio necesitas?
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full bg-[#08090C] border border-[#232838] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D2FF] transition-colors"
                    >
                      <option value="Sitio Web Pro ($1,150 USD)">
                        Sitio Web Pro ($1,150 USD)
                      </option>
                      <option value="Landing Page ($490 USD)">
                        Landing Page ($490 USD)
                      </option>
                      <option value="Tienda Ecommerce ($1,890 USD)">
                        Tienda Ecommerce ($1,890 USD)
                      </option>
                      <option value="Desarrollo a la Medida / Enterprise">
                        Desarrollo a la Medida / Enterprise
                      </option>
                      <option value="Auditoría Gratuita de mi Sitio Actual">
                        Auditoría Gratuita de mi Sitio Actual
                      </option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-[#8A90A6] uppercase tracking-wider">
                    ¿Qué vendes y qué quieres lograr con tu sitio? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.goal}
                    onChange={(e) =>
                      setFormData({ ...formData, goal: e.target.value })
                    }
                    placeholder="Describe brevemente tu modelo de negocio, clientes objetivo o cualquier requerimiento específico..."
                    className="w-full bg-[#08090C] border border-[#232838] px-4 py-3 text-sm text-white placeholder-[#505770] focus:outline-none focus:border-[#00D2FF] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 py-4 bg-[#0052FF] text-white font-mono text-sm font-bold uppercase tracking-widest hover:bg-[#0066FF] hover:shadow-[0_0_35px_rgba(0,82,255,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>PROCESANDO PROPUESTA...</span>
                    </>
                  ) : (
                    <>
                      <span>QUIERO MI PROPUESTA</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="font-mono text-[11px] text-[#636B82] text-center mt-1">
                  Respuesta en menos de 24 horas • Confidencialidad y NDA disponible • Sin compromiso
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
