import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      quote:
        "Triplicamos las consultas desde el celular en el primer mes. Por fin nuestra empresa proyecta el profesionalismo y prestigio que realmente tenemos.",
      author: "Martín A. Navarro",
      role: "Director @ AuraFin",
      initials: "MA",
      avatarClass: "bg-gradient-to-tr from-brand-blue to-brand-cyan text-white",
    },
    {
      quote:
        "Trabajar con Kore fue un alivio total. Cumplieron con los plazos exactos y la velocidad de la web es instantánea. Nuestros clientes lo notaron de inmediato.",
      author: "Valeria Restrepo",
      role: "Co-founder @ Nordic Home",
      initials: "VR",
      avatarClass: "bg-gradient-to-tr from-purple-500 to-brand-blue text-white",
    },
    {
      quote:
        "No son una agencia impersonal que te olvida tras la entrega. El acompañamiento y los consejos de diseño nos permitieron generar confianza con socios clave.",
      author: "Javier Lozano",
      role: "Fundador @ MetrixIQ",
      initials: "JL",
      avatarClass: "bg-gradient-to-tr from-cyan-400 to-emerald-400 text-[#07090e]",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-5 lg:px-8 py-16" id="testimonios">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-3">
          Lo que dicen quienes ya trabajan con nosotros
        </h2>
        <p className="text-neutral-400 text-sm">
          Relaciones a largo plazo basadas en confianza, atención cercana y crecimiento mutuo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="rounded-2xl glow-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-neutral-200 text-sm leading-relaxed mb-6">
                &ldquo;{rev.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${rev.avatarClass}`}
              >
                {rev.initials}
              </div>
              <div>
                <div className="text-white font-semibold text-xs sm:text-sm">
                  {rev.author}
                </div>
                <div className="text-neutral-400 text-[11px]">{rev.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
