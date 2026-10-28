import { Code, ShoppingCart, Palette, Rocket, Cloud, Cpu, ArrowRight } from "lucide-react";

export default function CapabilitiesSection() {
  const capabilities = [
    {
      num: "/ 01",
      icon: <Code className="w-5 h-5 text-[#8A90A6] group-hover:text-[#00D2FF] transition-colors" />,
      title: "DESARROLLO WEB",
      description:
        "Sitios rápidos, modernos y optimizados para Google (SEO). No son tarjetas de visita: son canales donde entran clientes de manera predecible.",
      serviceKey: "landing",
    },
    {
      num: "/ 02",
      icon: <ShoppingCart className="w-5 h-5 text-[#8A90A6] group-hover:text-[#00D2FF] transition-colors" />,
      title: "TIENDAS ECOMMERCE",
      description:
        "Tu negocio abierto 24/7. Tiendas online completas con pasarelas de pago seguro (Stripe/PayPal), checkout optimizado y experiencia fluida.",
      serviceKey: "ecommerce",
    },
    {
      num: "/ 03",
      icon: <Palette className="w-5 h-5 text-[#8A90A6] group-hover:text-[#00D2FF] transition-colors" />,
      title: "BRANDING DIGITAL & UI/UX",
      description:
        "Identidad visual profesional que diferencia tu negocio. Generamos la confianza que la audiencia necesita antes de dar clic y cotizar.",
      serviceKey: "pro",
    },
    {
      num: "/ 04",
      icon: <Rocket className="w-5 h-5 text-[#8A90A6] group-hover:text-[#00D2FF] transition-colors" />,
      title: "SEO + AI SEARCH",
      description:
        "Posicionamiento en Google + visibilidad en ChatGPT, Claude, Gemini y Perplexity. Que los clientes te encuentren cuando le preguntan a la IA.",
      serviceKey: "pro",
    },
    {
      num: "/ 05",
      icon: <Cloud className="w-5 h-5 text-[#8A90A6] group-hover:text-[#00D2FF] transition-colors" />,
      title: "HOSTING & CLOUD CARE",
      description:
        "Soporte técnico continuo, actualizaciones de seguridad, certificados SSL y optimización 24/7 para que tu sitio funcione perfecto siempre.",
      serviceKey: "custom",
    },
    {
      num: "/ 06",
      icon: <Cpu className="w-5 h-5 text-[#8A90A6] group-hover:text-[#00D2FF] transition-colors" />,
      title: "CONSULTORÍA DIGITAL",
      description:
        "Estrategia digital personalizada para escalar tu facturación. Tomamos las decisiones correctas antes de escribir una sola línea de código.",
      serviceKey: "audit",
    },
  ];

  return (
    <section
      className="relative py-24 lg:py-32 border-b border-[#1E2230] overflow-hidden bg-[#08090C]"
      id="servicios"
    >
      {/* Big faint section numeral watermark */}
      <div className="absolute right-6 top-8 font-display font-black text-[220px] md:text-[340px] text-white/[0.02] select-none pointer-events-none leading-none">
        01
      </div>

      <div className="max-w-[1360px] mx-auto px-5 lg:px-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs text-[#00D2FF] uppercase tracking-widest block mb-3 font-semibold">
              [ 01 — CAPACIDADES CORE ]
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              TODO LO QUE<br />
              NECESITAS<br />
              PARA <span className="bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#0052FF] bg-clip-text text-transparent">VENDER</span> EN<br />
              <span className="text-[#00D2FF]">LÍNEA</span>
            </h2>
          </div>
          <p className="font-sans text-[#8A90A6] max-w-sm text-sm leading-relaxed border-l-2 border-[#0052FF] pl-4">
            Escoge solo lo que tu negocio necesita hoy. Este servicio está hecho
            para lo mismo: que te encuentren, que confíen en ti y que te compren.
          </p>
        </div>

        {/* 6-Grid Core Capabilities (Numbered Minimalist Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item) => (
            <div
              key={item.num}
              className="group p-8 bg-[#0C0E14] border border-[#1E2230] hover:border-[#0052FF] transition-all relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#00D2FF] font-bold tracking-widest">
                    {item.num}
                  </span>
                  {item.icon}
                </div>
                <h3 className="font-display font-black text-lg uppercase tracking-wider text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#8A90A6] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              <a
                href="#contacto"
                className="font-mono text-xs text-[#00D2FF] uppercase tracking-wider font-semibold group-hover:underline flex items-center gap-1.5 pt-2"
              >
                <span>VER MÁS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
