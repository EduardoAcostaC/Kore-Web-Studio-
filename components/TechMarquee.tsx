export default function TechMarquee() {
  const technologies = [
    "NEXT.JS 16",
    "REACT 19",
    "TYPESCRIPT",
    "AWS CLOUD",
    "STRIPE API",
    "VERCEL EDGE",
    "POSTGRESQL",
    "TAILWIND CSS",
  ];

  return (
    <section className="py-8 bg-[#0A0C12] border-b border-[#1E2230]">
      <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
        <p className="font-mono text-[11px] text-[#636B82] uppercase tracking-[0.25em] text-center mb-6">
          MARCAS &amp; TECNOLOGÍA EN LAS QUE OPERA KORE WEB STUDIO
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 items-center justify-center font-mono text-xs text-[#8A90A6]">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="flex items-center justify-center gap-2 tracking-wider py-2.5 px-3 bg-[#0C0E14]/60 border border-[#1E2230]/60 hover:border-[#0052FF]/60 hover:text-white transition-all text-center"
            >
              <span className="text-[#00D2FF] font-bold text-xs">●</span>
              <span className="truncate">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
