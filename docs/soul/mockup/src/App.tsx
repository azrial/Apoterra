import { Navbar, Hero, Features, Pillars, HowItWorks, Testimonials, CTA, Footer } from "./components";

export default function App() {
  return (
    <div className="min-h-screen bg-kapur">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pillars />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
