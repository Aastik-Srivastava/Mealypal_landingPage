import { ArrowRight } from "lucide-react";

const FinalCTA = ({ onSignup }) => {
  return (
    <section
      data-testid="final-cta-section"
      className="relative py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] px-6 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 text-center bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-500 shadow-[0_40px_80px_-30px_rgba(2,44,34,0.55)]">
          {/* decorative blobs */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-lime-300/25 blur-3xl" />
            <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-emerald-300/20 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
                backgroundSize: "26px 26px",
              }}
            />
          </div>

          <p className="relative reveal text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-lime-200">
            Be first in line
          </p>
          <h2
            data-testid="final-cta-heading"
            className="reveal relative mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] max-w-3xl mx-auto"
            style={{ animationDelay: "0.1s" }}
          >
            Bring effortless nutrition tracking to your hostel, college or
            cafeteria.
          </h2>
          <p
            className="reveal relative mt-6 text-base sm:text-lg text-emerald-50/90 max-w-2xl mx-auto"
            style={{ animationDelay: "0.2s" }}
          >
            {"We're rolling out with a small set of pilot institutions. Drop your email — we'll get back the moment Mealypal opens its doors."}
          </p>

          <div className="relative mt-9 flex justify-center reveal" style={{ animationDelay: "0.3s" }}>
            <button
              data-testid="final-cta-signup-button"
              onClick={onSignup}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-emerald-800 font-extrabold text-base sm:text-lg shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)] hover:bg-emerald-50 hover:-translate-y-0.5 transition-all"
            >
              Sign Up
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
