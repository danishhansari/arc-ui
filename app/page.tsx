import { CTA } from "@/components/landing-page/cta";
import { Features } from "@/components/landing-page/features";
import { Footer } from "@/components/landing-page/footer";
import { Hero } from "@/components/landing-page/hero";
import { LogoStrip } from "@/components/landing-page/logo-strip";
import { Navbar } from "@/components/landing-page/navbar";
import { Stats } from "@/components/landing-page/stats";
import { Testimonial } from "@/components/landing-page/testimonial";
import { WorkflowSection } from "@/components/landing-page/workflow";


export const revalidate = 360000;
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
