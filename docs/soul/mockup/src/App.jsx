// App root — composes all section components into the landing page.

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import Features from "./components/Features";
import Principles from "./components/Principles";
import Personas from "./components/Personas";
import VisionMission from "./components/VisionMission";
import SuccessMetrics from "./components/SuccessMetrics";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-kapur text-arang">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Features />
        <Principles />
        <Personas />
        <VisionMission />
        <SuccessMetrics />
      </main>
      <Footer />
    </div>
  );
}
