import { lazy, Suspense } from "react";
import { LazyMotion, domAnimation } from "./lib/motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";

// Below-the-fold — load on demand
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const Features = lazy(() => import("./components/Features"));
const Showcase = lazy(() => import("./components/Showcase"));
const Pricing = lazy(() => import("./components/Pricing"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const FAQ = lazy(() => import("./components/FAQ"));
const CTA = lazy(() => import("./components/CTA"));
const Footer = lazy(() => import("./components/Footer"));
const FloatingWhatsapp = lazy(() => import("./components/FloatingWhatsapp"));

const Skeleton = ({ h = "h-96" }) => (
  <div className={`${h} w-full`} aria-hidden="true" />
);

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen w-full overflow-x-clip bg-mi-dark text-white antialiased selection:bg-mi-orange">
        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <Suspense fallback={<Skeleton />}>
            <HowItWorks />
            <Features />
            <Showcase />
            <Pricing />
            <Testimonials />
            <FAQ />
            <CTA />
          </Suspense>
        </main>
        <Suspense fallback={<Skeleton h="h-64" />}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <FloatingWhatsapp />
        </Suspense>
      </div>
    </LazyMotion>
  );
}
