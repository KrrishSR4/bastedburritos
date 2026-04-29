import { lazy, Suspense } from "react";
import { Navbar } from "@/components/site/Navbar";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Footer } from "@/components/site/Footer";
import { SectionSkeleton } from "@/components/site/SectionSkeleton";

const Hero = lazy(() => import("@/components/site/Hero").then(m => ({ default: m.Hero })));
const About = lazy(() => import("@/components/site/About").then(m => ({ default: m.About })));
const Menu = lazy(() => import("@/components/site/Menu").then(m => ({ default: m.Menu })));
const Gallery = lazy(() => import("@/components/site/Gallery").then(m => ({ default: m.Gallery })));
const WhyUs = lazy(() => import("@/components/site/WhyUs").then(m => ({ default: m.WhyUs })));
const Reviews = lazy(() => import("@/components/site/Reviews").then(m => ({ default: m.Reviews })));
const Contact = lazy(() => import("@/components/site/Contact").then(m => ({ default: m.Contact })));

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Suspense fallback={<SectionSkeleton />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Menu />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <WhyUs />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Reviews />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
