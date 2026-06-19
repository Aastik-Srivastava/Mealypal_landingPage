import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="border-t border-slate-100 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <a href="#top" className="inline-flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-400 text-white">
                <Leaf className="w-5 h-5" />
              </span>
              <span className="font-extrabold text-lg tracking-tight text-slate-900">
                Mealypal
              </span>
            </a>
            <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
              The nutrition operating system for institutions. Built so students
              never have to log a meal again.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-slate-400">
              Product
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li><a className="hover:text-emerald-700 transition-colors" href="#how">How it works</a></li>
              <li><a className="hover:text-emerald-700 transition-colors" href="#features">Features</a></li>
              <li><a className="hover:text-emerald-700 transition-colors" href="#audience">{"Who it's for"}</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-slate-400">
              Company
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li><a className="hover:text-emerald-700 transition-colors" data-testid="footer-about" href="#about">About</a></li>
              <li><a className="hover:text-emerald-700 transition-colors" data-testid="footer-contact" href="#contact">Contact</a></li>
              <li><a className="hover:text-emerald-700 transition-colors" data-testid="footer-privacy" href="#privacy">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Mealypal. All rights reserved.</p>
          <p>Made with care for institutions and the students they feed.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
