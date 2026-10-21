import { TrendingUp, Zap, ShoppingCart, ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      badgeIcon: <TrendingUp className="w-3.5 h-3.5" />,
      badgeText: "+210% Consultas Calificadas",
      badgeClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
      company: "AuraFin Consulting",
      industry: "Servicios Financieros Corporativos",
      metricSnippet: "De 8 a 26 prospectos/semana",
      metricClass: "bg-emerald-500/20 text-emerald-300",
      gradient: "from-brand-blue/20 to-brand-cyan/10",
      title: "Rediseño Corporativo de Alta Autoridad",
      description:
        "Pasaron de un sitio web desactualizado a un portal corporativo con agenda directa, elevando la confianza de clientes internacionales.",
      client: "Martín A. Navarro",
    },
    {
      badgeIcon: <Zap className="w-3.5 h-3.5" />,
      badgeText: "+140% Conversión Inmediata",
      badgeClass: "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan",
      company: "MetrixIQ Cloud",
      industry: "Plataforma SaaS en Crecimiento",
      metricSnippet: "Pruebas activas x2.4",
      metricClass: "bg-brand-cyan/20 text-cyan-300",
      gradient: "from-purple-500/20 to-brand-blue/10",
      title: "Landing Page de Registro Sin Fricción",
      description:
        "Optimizamos la explicación de su propuesta y simplificamos el formulario a solo 2 campos con carga en menos de 0.5 segundos en teléfonos móviles.",
      client: "Javier Lozano",
    },
    {
      badgeIcon: <ShoppingCart className="w-3.5 h-3.5" />,
      badgeText: "Máxima Retención y Fidelidad",
      badgeClass: "bg-amber-500/10 border-amber-500/20 text-amber-300",
      company: "Nordic Home Store",
      industry: "E-Commerce de Muebles & Deco",
      metricSnippet: "-50% rebote en checkout",
      metricClass: "bg-amber-500/20 text-amber-300",
      gradient: "from-emerald-500/20 to-brand-cyan/10",
      title: "E-Commerce Rápido y Fluido",
      description:
        "Reemplazo total de su antigua tienda. Implementamos diseño visual de revista, navegación intuitiva y una experiencia de usuario sumamente satisfactoria.",
      client: "Valeria Restrepo",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-5 lg:px-8 py-20" id="casos">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>CASOS DE ÉXITO &amp; RESULTADOS</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Marcas que multiplicaron su impacto con Kore
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          No creamos páginas de adorno. Diseñamos plataformas que conectan
          genuinamente con tu audiencia y generan resultados constantes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {cases.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl glow-card p-6 flex flex-col justify-between group hover:border-brand-cyan/40"
          >
            <div>
              {/* Metric Tag */}
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold mb-4 ${item.badgeClass}`}
              >
                {item.badgeIcon}
                <span>{item.badgeText}</span>
              </div>

              {/* Graphic Mock Box */}
              <div className="rounded-xl bg-[#060810] border border-white/10 p-4 mb-5 relative overflow-hidden">
                <div
                  className={`h-28 bg-gradient-to-tr ${item.gradient} rounded-lg flex flex-col justify-center items-center text-center p-3`}
                >
                  <span className="text-white font-display font-bold text-base">
                    {item.company}
                  </span>
                  <span className="text-neutral-400 text-xs mt-1">
                    {item.industry}
                  </span>
                  <span
                    className={`mt-2 text-[11px] px-2.5 py-0.5 rounded-full font-mono ${item.metricClass}`}
                  >
                    {item.metricSnippet}
                  </span>
                </div>
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-brand-cyan transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
              <span>Cliente: {item.client}</span>
              <a
                href="#contacto"
                className="text-brand-cyan font-medium hover:underline inline-flex items-center gap-1"
              >
                <span>Conversar</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
