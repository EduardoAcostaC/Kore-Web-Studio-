import Image from "next/image";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern tech-grid opacity-60" />

      {/* Primary Top Cyan/Blue Glow */}
      <div className="absolute -top-[250px] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/25 via-cyan-400/10 to-transparent blur-[125px] rounded-full" />

      {/* Middle Left Electric Blue Glow */}
      <div className="absolute top-[35%] -left-36 w-[550px] h-[550px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent blur-[140px] rounded-full" />

      {/* Bottom Right Cyan Glow */}
      <div className="absolute top-[65%] -right-36 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/15 via-blue-600/10 to-transparent blur-[150px] rounded-full" />

      {/* App Icon Watermark - Upper Hero Center */}
      <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[520px] h-[520px] sm:w-[720px] sm:h-[720px] lg:w-[860px] lg:h-[860px] opacity-[0.055] select-none pointer-events-none">
        <Image
          src="/kore-icon.png"
          alt="Kore Web Studio Watermark"
          fill
          priority
          className="object-contain filter drop-shadow-[0_0_80px_rgba(0,102,255,0.5)]"
        />
      </div>

      {/* App Icon Watermark - Mid/Lower Accent */}
      <div className="absolute top-[52%] -right-28 w-[420px] h-[420px] sm:w-[580px] sm:h-[580px] opacity-[0.035] -rotate-12 select-none pointer-events-none">
        <Image
          src="/kore-icon.png"
          alt=""
          fill
          className="object-contain filter drop-shadow-[0_0_50px_rgba(0,210,255,0.4)]"
        />
      </div>

      {/* App Icon Watermark - Bottom Left Accent */}
      <div className="absolute top-[82%] -left-28 w-[400px] h-[400px] sm:w-[520px] sm:h-[520px] opacity-[0.03] rotate-12 select-none pointer-events-none">
        <Image
          src="/kore-icon.png"
          alt=""
          fill
          className="object-contain filter drop-shadow-[0_0_50px_rgba(0,102,255,0.3)]"
        />
      </div>
    </div>
  );
}

