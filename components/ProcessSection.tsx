import { CheckCircle } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      numClass: "bg-brand-blue/20 text-brand-cyan",
      title: "Charla Inicial & Estrategia",
      description:
        "Escuchamos a fondo tu visión, objetivos de marca y definimos la estructura perfecta para tu cliente ideal.",
    },
    {
      num: "02",
      numClass: "bg-brand-cyan/20 text-brand-cyan",
      title: "Prototipo Visual a Medida",
      description:
        "Te presentamos el diseño interactivo completo. Puedes revisarlo, sugerir ajustes y aprobarlo antes de programar una sola línea.",
    },
    {
      num: "03",
      numClass: "bg-purple-500/20 text-purple-300",
      title: "Desarrollo y Optimización",
      description:
        "Construimos tu sitio con velocidad ultra rápida, llamadas a la acción claras y adaptación perfecta para celulares.",
    },
    {
      num: "04",
      numClass: "bg-emerald-500/20 text-emerald-400",
      title: "Lanzamiento & Soporte",
      description:
        "Conectamos tu dominio, capacitamos a tu equipo para gestionar contenidos y te acompañamos con soporte continuo.",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-5 lg:px-8 py-20" id="proceso">
      <div className="rounded-3xl bg-gradient-to-b from-[#0b0f19] to-[#07090e] border border-white/10 p-6 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold mb-3">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>TRANQUILIDAD TOTAL</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-3">
            Cómo trabajamos contigo: simple y sin complicaciones
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Olvídate de procesos enredados o desaparecer semanas sin dar respuestas. Con Kore
            tienes comunicación directa y total claridad en cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors relative flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-10 h-10 rounded-xl font-display font-bold flex items-center justify-center text-sm mb-4 ${step.numClass}`}
                >
                  {step.num}
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
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
