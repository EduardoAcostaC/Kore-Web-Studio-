import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function WhyKoreSection() {
  const stats = [
    { value: "24h", label: "Propuesta técnica detallada", highlight: false },
    { value: "99.9%", label: "Uptime garantizado en la nube", highlight: true },
    { value: "100%", label: "Código propietario limpio", highlight: false },
    { value: "0", label: "Plantillas genéricas lentas", highlight: true },
  ];

  return (
    <section className="relative py-24 lg:py-32 border-b border-[#1E2230] overflow-hidden bg-[#08090C]">
      {/* Background Watermark 06 */}
      <div className="absolute right-10 top-12 font-display font-black text-[220px] md:text-[340px] text-white/[0.02] select-none pointer-events-none leading-none">
        06
      </div>

      <div className="max-w-[1360px] mx-auto px-5 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Official Kore Web Studio Brand Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[420px] aspect-square bg-[#0C0E14] border border-[#1E2230] p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(0,82,255,0.2)]">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#0052FF]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#00D2FF]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative w-52 h-52 z-10 flex items-center justify-center">
                <Image
                  src="/kore-icon.png"
                  alt="Kore Web Studio Logo Badge"
                  width={208}
                  height={208}
                  className="object-contain drop-shadow-[0_0_25px_rgba(0,82,255,0.5)]"
                />
              </div>
              <div className="mt-4 text-center relative z-10">
                <span className="font-mono text-xs text-[#00D2FF] font-bold tracking-widest uppercase">
                  KORE WEB STUDIO • INGENIERÍA DIGITAL
                </span>
              </div>
            </div>
            <div className="mt-4 text-center max-w-sm">
              <p className="font-mono text-xs text-[#8A90A6]">
                &ldquo;Un sitio web no es un gasto decorativo. Es el vendedor más rentable que nunca descansa.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Differentiators & Stats */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-[#00D2FF] uppercase tracking-widest block mb-3 font-semibold">
              [ 06 — FILOSOFÍA Y RIGOR ]
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none mb-6">
              POR QUÉ KORE<br />
              Y <span className="text-[#00D2FF]">NO OTRA</span><br />
              AGENCIA
            </h2>
            <p className="text-sm text-[#8A90A6] leading-relaxed mb-8 font-normal">
              No somos intermediarios de plantillas prefabricadas. Construimos software web con enfoque obsesivo en velocidad, retorno de inversión y conversión comercial sin ataduras innecesarias.
            </p>

            {/* 4 Big Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((st) => (
                <div
                  key={st.label}
                  className="p-4 bg-[#0C0E14] border border-[#1E2230]"
                >
                  <span
                    className={`font-display font-black text-3xl ${
                      st.highlight ? "text-[#00D2FF]" : "text-white"
                    }`}
                  >
                    {st.value}
                  </span>
                  <span className="font-mono text-[10px] text-[#8A90A6] block uppercase mt-1">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="px-6 py-3.5 bg-[#0052FF] text-white font-mono text-xs font-bold uppercase tracking-widest text-center hover:bg-[#0066FF] transition-all flex items-center justify-center gap-2"
                href="#contacto"
              >
                <span>INICIAR PROYECTO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                className="px-6 py-3.5 border border-[#1E2230] text-[#C4C9D9] font-mono text-xs font-bold uppercase tracking-widest text-center hover:border-emerald-500/50 hover:text-emerald-300 transition-all flex items-center justify-center gap-2"
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.navbar)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>CHAT EN VIVO</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
