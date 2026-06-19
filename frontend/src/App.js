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
import EmailCaptureModal from "@/components/landing/EmailCaptureModal";

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
  const [modalIntent, setModalIntent] = useState("signup"); // "signup" | "login"

  const openModal = (intent = "signup") => {
    setModalIntent(intent);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  useScrollReveal();

  return (
    <div className="App min-h-screen bg-white text-slate-900 antialiased">
      <Navbar onSignup={() => openModal("signup")} onLogin={() => openModal("login")} />
      <main>
        <Hero onSignup={() => openModal("signup")} onLogin={() => openModal("login")} />
        <Problem />
        <HowItWorks />
        <WhoItsFor />
        <Features />
        <Vision />
        <FinalCTA onSignup={() => openModal("signup")} />
      </main>
      <Footer />
      <EmailCaptureModal open={modalOpen} onClose={closeModal} intent={modalIntent} />
    </div>
  );
}

export default App;
