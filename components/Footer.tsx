import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#05070d] relative z-10 py-10">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center bg-white/5 border border-white/10 p-0.5">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKGl8fusZknl4uvCHmzkjMADQ08oK4PTGyfq1bemPEBr66RR3aJpClNffMuRSfjUXiT3SRbNHNox-1nmypIuYek60XZFAynnDARsDQwZkGOe9hRJWk_48JbtSYypX-AtRdo2N-_duCUvNJEOPYMkRamzqbHVgilKG3lbw83XULlku7iAzxi5Ma8PCXao93M5GLF8HMNWtT7aItlB4svnZJfzag_XLMmM9xbU5E2Dp1Ty-bj38YWiSSA71PKThyIgIVTZY"
              alt="Kore Web Studio"
              width={28}
              height={28}
              className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(0,102,255,0.7)]"
              unoptimized
            />
          </div>
          <div>
            <span className="font-display font-bold text-sm text-white">
              Kore Web Studio
            </span>
            <span className="text-xs text-neutral-400 ml-2 hidden sm:inline">
              Diseño Web Premium &amp; Soluciones de Crecimiento
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-neutral-400">
          <a href="#portafolio" className="hover:text-white transition-colors">
            Portafolio
          </a>
          <a href="#soluciones" className="hover:text-white transition-colors">
            Soluciones por Sector
          </a>
          <a href="#casos" className="hover:text-white transition-colors">
            Casos de Éxito
          </a>
          <a href="#proceso" className="hover:text-white transition-colors">
            Cómo Trabajamos
          </a>
          <a href="#contacto" className="hover:text-white transition-colors">
            Contacto
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-neutral-500 font-mono text-center md:text-right">
          © 2025 Kore Web Studio. Hecho para hacer crecer tu marca.
        </div>
      </div>
    </footer>
  );
}
