export default function PricingSection() {
  return (
    <section
      className="relative py-24 lg:py-32 border-b border-[#1E2230] overflow-hidden bg-[#08090C]"
      id="precios"
    >
      {/* Background Watermark 04 */}
      <div className="absolute right-10 top-12 font-display font-black text-[220px] md:text-[340px] text-white/[0.02] select-none pointer-events-none leading-none">
        04
      </div>

      <div className="max-w-[1360px] mx-auto px-5 lg:px-10 relative z-10">
        <div className="mb-12">
          <span className="font-mono text-xs text-[#00D2FF] uppercase tracking-widest block mb-3 font-semibold">
            [ 04 — INVERSIÓN TRANSPARENTE ]
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
            PRECIOS<br />
            <span className="text-stroke-white">SIN LETRA</span><br />
            <span className="text-[#00D2FF]">CHICA.</span>
          </h2>
          <p className="text-sm text-[#8A90A6] mt-4 font-mono">
            Precios de este trimestre. Tomamos 5 proyectos nuevos al mes para garantizar estándar enterprise.
          </p>
        </div>

        {/* Top 3 Metrics Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-4 bg-[#0C0E14] border border-[#1E2230] flex flex-col">
            <span className="font-display font-black text-3xl text-[#00D2FF]">
              3x+
            </span>
            <span className="font-mono text-xs text-[#8A90A6] uppercase mt-1">
              Retorno de inversión en ventas
            </span>
          </div>
          <div className="p-4 bg-[#0C0E14] border border-[#1E2230] flex flex-col">
            <span className="font-display font-black text-3xl text-white">
              +40%
            </span>
            <span className="font-mono text-xs text-[#8A90A6] uppercase mt-1">
              Más ventas en 2 meses promedio
            </span>
          </div>
          <div className="p-4 bg-[#0C0E14] border border-[#1E2230] flex flex-col">
            <span className="font-display font-black text-3xl text-[#00D2FF]">
              12
            </span>
            <span className="font-mono text-xs text-[#8A90A6] uppercase mt-1">
              Proyectos publicados con éxito
            </span>
          </div>
        </div>

        {/* Pricing Plans Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Tier 1: Landing Page */}
          <div className="p-8 bg-[#0C0E14] border border-[#1E2230] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#8A90A6] uppercase tracking-wider">
                  KORE / LAUNCH
                </span>
                <span className="font-mono text-xs text-[#8A90A6]">Pago único</span>
              </div>
              <div className="mb-6">
                <span className="font-display font-black text-5xl text-white">
                  $490
                </span>
                <span className="font-mono text-xs text-[#8A90A6] block uppercase mt-1">
                  USD • Entrega 5-7 días
                </span>
              </div>
              <ul className="space-y-3 font-sans text-xs text-[#C4C9D9] mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00D2FF] font-bold">✓</span>
                  <span>One-page layout optimizado para conversión rápida</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00D2FF] font-bold">✓</span>
                  <span>Copywriting persuasivo y arquitectura de ventas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00D2FF] font-bold">✓</span>
                  <span>Integración CRM directo y botón WhatsApp API</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00D2FF] font-bold">✓</span>
                  <span>Optimización responsive para móviles 100%</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00D2FF] font-bold">✓</span>
                  <span>SEO técnico inicial e indexación en Google</span>
                </li>
              </ul>
            </div>
            <a
              className="w-full py-3 border border-[#1E2230] bg-[#12141C] text-center font-mono text-xs font-bold uppercase tracking-widest text-white hover:border-[#0052FF] hover:text-[#00D2FF] transition-all"
              href="#contacto"
            >
              QUIERO EMPEZAR →
            </a>
          </div>

          {/* Tier 2: Sitio Web Pro (Featured / Blue Highlight) */}
          <div className="p-8 bg-[#0F131E] border-2 border-[#0052FF] shadow-[0_0_50px_rgba(0,82,255,0.3)] flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0052FF] text-white font-mono text-[11px] font-bold uppercase tracking-widest shadow-md">
              MÁS SOLICITADO
            </div>
            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="font-mono text-xs text-[#00D2FF] font-bold uppercase tracking-wider">
                  KORE / PRO
                </span>
                <span className="font-mono text-xs text-[#00D2FF]">
                  Proyecto Completo
                </span>
              </div>
              <div className="mb-6">
                <span className="font-display font-black text-5xl text-[#00D2FF]">
                  $1,150
                </span>
                <span className="font-mono text-xs text-[#8A90A6] block uppercase mt-1">
                  USD • Entrega 10-15 días
                </span>
              </div>
              <ul className="space-y-3 font-sans text-xs text-[#E1E4EE] mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00D2FF] font-bold">✓</span>
                  <span>4 a 7 páginas estratégicas (Inicio, Servicios, Nosotros, Casos, Contacto)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00D2FF] font-bold">✓</span>
                  <span>CMS autoadministrable sin necesidad de código</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00D2FF] font-bold">✓</span>
                  <span>Score 95+ Core Web Vitals y velocidad extrema</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00D2FF] font-bold">✓</span>
                  <span>Google Analytics 4 &amp; Meta Pixel configurados</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00D2FF] font-bold">✓</span>
                  <span>1 año de hosting cloud gestionado + dominio incluido</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00D2FF] font-bold">✓</span>
                  <span>Optimización SEO + visibilidad en IA (ChatGPT/Perplexity)</span>
                </li>
              </ul>
            </div>
            <a
              className="w-full py-3.5 bg-[#0052FF] text-center font-mono text-xs font-bold uppercase tracking-widest text-white hover:bg-[#0066FF] hover:shadow-[0_0_30px_rgba(0,82,255,0.7)] transition-all"
              href="#contacto"
            >
              QUIERO EL SITIO PRO →
            </a>
          </div>

          {/* Tier 3: Enterprise */}
          <div className="p-8 bg-[#0C0E14] border border-[#1E2230] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#8A90A6] uppercase tracking-wider">
                  KORE / ENTERPRISE
                </span>
                <span className="font-mono text-xs text-[#8A90A6]">A Medida</span>
              </div>
              <div className="mb-6">
                <span className="font-display font-black text-5xl text-white">
                  Desde $1,890
                </span>
                <span className="font-mono text-xs text-[#8A90A6] block uppercase mt-1">
                  USD • Cotización Técnica
                </span>
              </div>
              <ul className="space-y-3 font-sans text-xs text-[#C4C9D9] mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00D2FF] font-bold">✓</span>
                  <span>Plataformas SaaS, portales o tiendas ecommerce avanzadas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00D2FF] font-bold">✓</span>
                  <span>Catálogo ilimitado de productos y pasarelas mundiales</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00D2FF] font-bold">✓</span>
                  <span>Integraciones API a medida, webhooks y bases de datos</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00D2FF] font-bold">✓</span>
                  <span>SLA de soporte técnico prioritario 24/7</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00D2FF] font-bold">✓</span>
                  <span>Auditoría de ciberseguridad y backups automatizados</span>
                </li>
              </ul>
            </div>
            <a
              className="w-full py-3 border border-[#1E2230] bg-[#12141C] text-center font-mono text-xs font-bold uppercase tracking-widest text-white hover:border-[#0052FF] hover:text-[#00D2FF] transition-all"
              href="#contacto"
            >
              PEDIR COTIZACIÓN →
            </a>
          </div>
        </div>

        {/* E-Commerce Callout Strip */}
        <div className="mt-16 p-8 border border-[#1E2230] bg-[#0C0E14] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-[#00D2FF] uppercase font-bold tracking-wider">
              ¿BUSCAS TIENDA ONLINE EXCLUSIVA?
            </span>
            <h3 className="font-display font-black text-2xl uppercase text-white mt-1">
              E-Commerce &amp; Catálogo Digital de Alta Conversión
            </h3>
            <p className="text-xs text-[#8A90A6] mt-1 max-w-xl">
              Desde $1,890 USD con carrito en 1 clic, pasarelas Stripe/MercadoPago y sincronización de inventario en tiempo real.
            </p>
          </div>
          <a
            className="px-6 py-3 border border-[#00D2FF] text-[#00D2FF] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#00D2FF] hover:text-black transition-all shrink-0"
            href="#contacto"
          >
            COTIZAR TIENDA →
          </a>
        </div>
      </div>
    </section>
  );
}
