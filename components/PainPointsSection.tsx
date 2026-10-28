export default function PainPointsSection() {
  const painPoints = [
    {
      num: "01",
      title: "El cliente que te buscó encontró a tu competencia",
      description:
        "Si buscas en Google o en redes y no estás tú —o encuentras un sitio roto y lento— el cliente no va a insistir. Se va con el primero que le genere confianza y respuesta inmediata.",
    },
    {
      num: "02",
      title: "La credibilidad que ya te juzgaron antes de hablar",
      description:
        "El 75% de los compradores evalúan la seriedad de una empresa por su diseño web. Con un sitio viejo o improvisado, te descartan antes de agendar o pedir presupuesto.",
    },
    {
      num: "03",
      title: "Las respuestas de IA donde hoy no existes",
      description:
        "Cerca del 36% de las búsquedas ya terminan en ChatGPT, Claude o Gemini. Si tu negocio no está optimizado con schema semántico y arquitectura moderna, no existes para el algoritmo.",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 border-b border-[#1E2230] overflow-hidden bg-[#08090C]">
      {/* Background Watermark 05 */}
      <div className="absolute right-10 top-12 font-display font-black text-[220px] md:text-[340px] text-white/[0.02] select-none pointer-events-none leading-none">
        05
      </div>

      <div className="max-w-[1360px] mx-auto px-5 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-[#00D2FF] uppercase tracking-widest block mb-3 font-semibold">
              [ 05 — LO QUE ESTÁ EN JUEGO ]
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none mb-6">
              LO QUE PIERDES<br />
              CADA DÍA<br />
              SIN UN SITIO<br />
              <span className="text-[#00D2FF]">QUE VENDA</span>
            </h2>
            <p className="text-sm text-[#8A90A6] leading-relaxed mb-6 font-normal">
              Tener una web antigua o no tener presencia optimizada cuesta clientes reales todos los días.
            </p>
            <a
              className="inline-flex items-center gap-2 font-mono text-xs text-[#00D2FF] font-bold uppercase tracking-wider underline hover:text-white transition-colors"
              href="#contacto"
            >
              DEJAR DE PERDER CLIENTES →
            </a>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            {painPoints.map((item) => (
              <div
                key={item.num}
                className="p-6 bg-[#0C0E14] border border-[#1E2230] hover:border-[#0052FF] transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-sm text-[#00D2FF] font-bold">
                    {item.num}
                  </span>
                  <h4 className="font-display font-bold text-base text-white uppercase">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-[#8A90A6] leading-relaxed pl-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
