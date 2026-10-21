import {
  Eye,
  MessageCircle,
  ShieldCheck,
  Zap,
  Smartphone,
  Headphones,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full max-w-6xl mx-auto px-5 lg:px-8 text-center flex flex-col items-center pt-8 pb-16">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-medium mb-8 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-brand-cyan/40 transition-colors">
        <span className="inline-block w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_10px_#00D2FF] animate-pulse" />
        <span>Acompañamiento personalizado • Interfaces diseñadas para cautivar</span>
      </div>

      {/* Main Headline */}
      <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-[-0.035em] text-white max-w-5xl leading-[1.1] mb-7">
        Creamos sitios y plataformas web que{" "}
        <span className="shimmer-text block sm:inline">
          enamoran a tus visitas y las convierten en clientes fieles.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed mb-10">
        Diseño premium y desarrollo a medida para marcas y profesionales que
        buscan proyectar una imagen de clase mundial, generar confianza inmediata y
        multiplicar sus resultados.
      </p>

      {/* Friendly CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-14">
        <a
          href="#portafolio"
          className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-blue via-[#0080ff] to-brand-cyan shadow-[0_0_30px_rgba(0,102,255,0.5)] hover:shadow-[0_0_40px_rgba(0,210,255,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <Eye className="w-5 h-5 text-white" />
          <span>Ver Proyectos Destacados</span>
        </a>
        <a
          href="https://wa.me/5215500000000?text=Hola%20Kore%20Web%20Studio,%20quiero%20información%20sobre%20un%20proyecto%20web"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-4 rounded-xl font-medium text-sm text-neutral-200 bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-brand-cyan/40 transition-all flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5 text-emerald-400" />
          <span>Hablar por WhatsApp</span>
        </a>
      </div>

      {/* Trust Bar: Beneficios Inmediatos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-6 border-t border-white/10 text-left">
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
          <ShieldCheck className="w-7 h-7 text-brand-cyan flex-shrink-0" />
          <div>
            <div className="text-white font-semibold text-xs sm:text-sm">
              Garantía de Satisfacción
            </div>
            <div className="text-neutral-400 text-[11px]">
              Aprobación antes de publicar
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
          <Zap className="w-7 h-7 text-emerald-400 flex-shrink-0" />
          <div>
            <div className="text-white font-semibold text-xs sm:text-sm">
              Carga Instantánea
            </div>
            <div className="text-neutral-400 text-[11px]">
              Nadie abandona por lentitud
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
          <Smartphone className="w-7 h-7 text-purple-400 flex-shrink-0" />
          <div>
            <div className="text-white font-semibold text-xs sm:text-sm">
              100% Mobile First
            </div>
            <div className="text-neutral-400 text-[11px]">
              Experiencia perfecta en celular
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
          <Headphones className="w-7 h-7 text-amber-400 flex-shrink-0" />
          <div>
            <div className="text-white font-semibold text-xs sm:text-sm">
              Soporte Continuo
            </div>
            <div className="text-neutral-400 text-[11px]">
              Nunca te dejamos solo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
