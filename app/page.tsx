import AmbientBackground from "@/components/AmbientBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShowcaseCarousel from "@/components/ShowcaseCarousel";
import SolutionsSwitcher from "@/components/SolutionsSwitcher";
import CaseStudies from "@/components/CaseStudies";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      {/* Background ambient lighting and grid */}
      <AmbientBackground />

      {/* Floating navigation header */}
      <Navbar />

      {/* Main page content sections */}
      <main className="relative z-10 pt-32 lg:pt-36 flex flex-col items-center">
        <Hero />
        <ShowcaseCarousel />
        <SolutionsSwitcher />
        <CaseStudies />
        <ProcessSection />
        <Testimonials />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </>
  );
}
