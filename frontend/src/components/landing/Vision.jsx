import { Compass } from "lucide-react";

const Vision = () => {
  return (
    <section
      id="vision"
      data-testid="vision-section"
      className="relative py-20 md:py-32 bg-emerald-50/40 overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-emerald-200/40 to-lime-200/30 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          data-testid="vision-eyebrow"
          className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-emerald-100 text-emerald-700 text-xs font-semibold tracking-wide"
        >
          <Compass className="w-3.5 h-3.5" />
          Our Vision
        </span>

        <h2
          data-testid="vision-heading"
          className="reveal mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]"
          style={{ animationDelay: "0.1s" }}
        >
          Built for the future of{" "}
          <span className="gradient-text">institutional nutrition.</span>
        </h2>

        <p
          className="reveal mt-7 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          {"We're starting with hostels — where one good system can change the daily nutrition of thousands. From there, Mealypal grows into a full "}
          <strong className="text-slate-900 font-extrabold">
            university-wide nutrition OS
          </strong>{" "}
          — connecting menus, students, athletes, dieticians and analytics into
          one quiet, reliable layer behind every meal served.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
          {[
            "Hostels",
            "Colleges",
            "Sports academies",
            "Corporate cafeterias",
            "Universities",
          ].map((t) => (
            <span
              key={t}
              className="reveal px-4 py-2 rounded-full bg-white border border-slate-100 text-slate-700 font-semibold shadow-[0_4px_14px_-8px_rgba(15,23,42,0.15)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
