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
    </div>
  );
}
