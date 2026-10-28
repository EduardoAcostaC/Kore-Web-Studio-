export default function Testimonials() {
  const reviews = [
    {
      num: "/ 01",
      metric: "3x RETORNO",
      quote:
        "No siempre teníamos las ideas claras, pero el equipo de Kore siempre aportó soluciones estratégicas. Logramos triplicar el valor de nuestra inversión en ventas en menos de 90 días.",
      author: "Gustavo Carrillo",
      role: "CEO — IMVEC Industrial",
    },
    {
      num: "/ 02",
      metric: "+40% CONVERSIÓN",
      quote:
        "Excelente compromiso, profesionalismo y nivel de servicio de alta ingeniería. La velocidad de carga y la experiencia visual cambiaron radicalmente la respuesta de nuestros clientes.",
      author: "Ricardo Lara",
      role: "Director — Serendipia CDMX",
    },
    {
      num: "/ 03",
      metric: "100/100 SPEED",
      quote:
        "Nuestro nuevo sitio web optimizó la captación de clientes calificados y aumentó nuestras ventas un 45% en dos meses. Cero fallos técnicos y soporte inmediato cuando se requiere.",
      author: "Jesús Bernal",
      role: "Fundador — Red Box Solutions",
    },
  ];

  return (
    <section
      className="relative py-24 lg:py-32 border-b border-[#1E2230] overflow-hidden bg-[#08090C]"
      id="testimonios"
    >
      {/* Background Watermark 03 */}
      <div className="absolute right-10 top-12 font-display font-black text-[220px] md:text-[340px] text-white/[0.02] select-none pointer-events-none leading-none">
        03
      </div>

      <div className="max-w-[1360px] mx-auto px-5 lg:px-10 relative z-10">
        <div className="mb-16">
          <span className="font-mono text-xs text-[#00D2FF] uppercase tracking-widest block mb-3 font-semibold">
            [ 03 — RESULTADOS COMPROBADOS ]
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
            LO QUE DICEN<br />
            QUIENES YA <span className="text-[#00D2FF]">VENDEN</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.num}
              className="p-8 bg-[#0C0E14] border border-[#1E2230] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#00D2FF] font-bold">
                    {rev.num}
                  </span>
                  <span className="font-mono text-xs text-[#00D2FF] bg-[#0052FF]/20 px-2 py-0.5 border border-[#0052FF]/40">
                    {rev.metric}
                  </span>
                </div>
                <p className="text-sm text-[#C4C9D9] leading-relaxed mb-6 font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-[#1E2230] pt-4 flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-xs uppercase text-white">
                    {rev.author}
                  </p>
                  <p className="text-[11px] text-[#8A90A6]">{rev.role}</p>
                </div>
                <span className="font-mono text-[10px] text-[#8A90A6]">
                  VERIFICADO ✓
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
