import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

const Navbar = ({ onSignup, onLogin }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#top" data-testid="brand-logo" className="flex items-center gap-2 group">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-400 text-white shadow-[0_8px_20px_-6px_rgba(5,150,105,0.55)]">
              <Leaf className="w-5 h-5" />
            </span>
            <span className="font-extrabold text-lg tracking-tight text-slate-900">
              Mealypal
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#how" className="hover:text-emerald-700 transition-colors">How it works</a>
            <a href="#audience" className="hover:text-emerald-700 transition-colors">{"Who it's for"}</a>
            <a href="#features" className="hover:text-emerald-700 transition-colors">Features</a>
            <a href="#vision" className="hover:text-emerald-700 transition-colors">Vision</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              data-testid="nav-login-button"
              onClick={onLogin}
              className="btn-outline px-4 sm:px-5 py-2 rounded-full text-sm font-semibold"
            >
              Login
            </button>
            <button
              data-testid="nav-signup-button"
              onClick={onSignup}
              className="btn-primary px-4 sm:px-5 py-2 rounded-full text-sm font-semibold"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
