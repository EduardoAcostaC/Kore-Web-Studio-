export default function ProcessSection() {
  const steps = [
    {
      num: "/ 01",
      title: "NOS CUENTAS",
      description:
        "Llenas el formulario o coordinamos una videollamada de 15 min. En menos de 24 horas te enviamos una cotización exacta, con tiempos y entregables precisos.",
    },
    {
      num: "/ 02",
      title: "APRUEBAS",
      description:
        "Precio cerrado y fecha fija de entrega por escrito. Sin costos ocultos. Iniciamos con 50% de anticipo y el resto contra entrega final.",
    },
    {
      num: "/ 03",
      title: "CONSTRUIMOS",
      description:
        "Diseño, desarrollo nativo y copywriting estratégico. Recibes enlaces de prueba y avances periódicos para validar cada sprint de trabajo.",
    },
    {
      num: "/ 04",
      title: "VENDES",
      description:
        "Tu sitio sube al aire optimizado en AWS/Vercel. Te capacitamos para gestionar contenidos y recibes soporte continuo para seguir escalando.",
    },
  ];

  return (
    <section
      className="relative py-24 lg:py-32 border-b border-[#1E2230] overflow-hidden bg-[#08090C]"
      id="proceso"
    >
      {/* Background Watermark 07 */}
      <div className="absolute right-10 top-12 font-display font-black text-[220px] md:text-[340px] text-white/[0.02] select-none pointer-events-none leading-none">
        07
      </div>

      <div className="max-w-[1360px] mx-auto px-5 lg:px-10 relative z-10">
        <div className="mb-16">
          <span className="font-mono text-xs text-[#00D2FF] uppercase tracking-widest block mb-3 font-semibold">
            [ 07 — METODOLOGÍA ÁGIL ]
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            SIN SORPRESAS,<br />
            <span className="text-[#00D2FF]">SIN RODEOS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-[#0C0E14] border border-[#1E2230] hover:border-[#0052FF] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#00D2FF] font-bold block mb-4">
                  {step.num}
                </span>
                <h4 className="font-display font-bold text-base uppercase text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-[#8A90A6] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
