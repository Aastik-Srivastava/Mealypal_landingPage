import { useState, useEffect } from "react";
import "@/App.css";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import WhoItsFor from "@/components/landing/WhoItsFor";
import Features from "@/components/landing/Features";
import Vision from "@/components/landing/Vision";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import FeedbackSurveyModal from "@/components/landing/FeedbackSurveyModal";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useScrollReveal();

  return (
    <div className="App min-h-screen bg-white text-slate-900 antialiased">
      <Navbar onSignup={openModal} onLogin={openModal} />
      <main>
        <Hero onSignup={openModal} onLogin={openModal} />
        <Problem />
        <HowItWorks />
        <WhoItsFor />
        <Features />
        <Vision />
        <FinalCTA onSignup={openModal} />
      </main>
      <Footer />
      <FeedbackSurveyModal open={modalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
