"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappHref = getWhatsAppUrl(WHATSAPP_MESSAGES.floating);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Mensaje de bienvenida flotante */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#070b14]/95 border border-emerald-500/30 text-white shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-right-3 duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium hover:text-emerald-300 transition-colors"
          >
            ¿Tienes un proyecto en mente? <span className="text-emerald-400 font-semibold underline decoration-emerald-500/40">Escríbenos</span>
          </a>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white p-0.5 rounded-full hover:bg-white/10 transition-colors ml-1"
            aria-label="Cerrar aviso de WhatsApp"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Botón Circular Principal de WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Kore Web Studio por WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-emerald-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 border border-emerald-300/40"
      >
        {/* Anillo de pulso sutil */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-pulse pointer-events-none" />

        {/* Icono de WhatsApp */}
        <MessageCircle className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </div>
  );
}
