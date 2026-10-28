export default function CalloutBanner() {
  return (
    <section className="py-20 md:py-28 bg-[#0052FF] text-white relative overflow-hidden">
      {/* Abstract overlay markings */}
      <div className="absolute right-0 top-0 w-96 h-full bg-[#00D2FF]/20 skew-x-12 pointer-events-none" />
      <div className="max-w-[1360px] mx-auto px-5 lg:px-10 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#00D2FF] bg-[#08090C] px-3 py-1 font-bold inline-block mb-4">
            SIN EXCUSAS • RESULTADOS INMEDIATOS
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-white">
            ¿LISTO<br />
            PARA CRECER?
          </h2>
        </div>
        <div className="flex flex-col items-start md:items-end gap-4 max-w-md">
          <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium md:text-right">
            En menos de 24 horas te enviamos una propuesta técnica clara y sin compromiso.
          </p>
          <a
            className="px-8 py-4 bg-[#08090C] text-[#00D2FF] font-mono text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#0052FF] transition-all shadow-xl"
            href="#contacto"
          >
            INICIAR MI PROYECTO AHORA →
          </a>
        </div>
      </div>
    </section>
  );
}
