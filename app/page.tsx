import AmbientBackground from "@/components/AmbientBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import CalloutBanner from "@/components/CalloutBanner";
import PainPointsSection from "@/components/PainPointsSection";
import WhyKoreSection from "@/components/WhyKoreSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      {/* Background ambient lighting and grid */}
      <AmbientBackground />

      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main High-Conversion Landing Flow */}
      <main className="relative z-10 w-full flex flex-col">
        {/* Hero Section with cyber waves and headline */}
        <Hero />

        {/* Tech Stack Marquee */}
        <TechMarquee />

        {/* 01 — Core Capabilities */}
        <CapabilitiesSection />

        {/* 02 — Selected Projects & Interactive Demos */}
        <ProjectsSection />

        {/* 03 — Testimonials & Social Proof */}
        <Testimonials />

        {/* 04 — Transparent Pricing */}
        <PricingSection />

        {/* 05 — Full-Width High-Impact Callout */}
        <CalloutBanner />

        {/* 06 — Customer Pain Points */}
        <PainPointsSection />

        {/* 07 — Why Kore & Brand Philosophy */}
        <WhyKoreSection />

        {/* 08 — Agile Methodology */}
        <ProcessSection />

        {/* 09 — FAQ Accordion */}
        <FAQSection />

        {/* 10 — Direct Contact Form & Facts */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </>
  );
}
