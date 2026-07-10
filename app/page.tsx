import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LogoStrip } from "@/components/logo-strip";
import { Navbar } from "@/components/navbar";
import { Stats } from "@/components/stats";
import { Testimonial } from "@/components/testimonial";
import { WorkflowSection } from "@/components/workflow";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoStrip />
      <Features />
      <WorkflowSection />
      <Stats />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
}
