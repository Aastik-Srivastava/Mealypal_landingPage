import { UploadCloud, Sparkles, Utensils, Hand } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: UploadCloud,
    title: "Upload the menu once",
    text:
      "Mess managers paste or upload the weekly menu in seconds. No spreadsheets, no per-meal data entry.",
  },
  {
    id: 2,
    icon: Sparkles,
    title: "We auto-match nutrition",
    text:
      "Each dish is matched to a verified nutrition database. Local foods get reviewed and added per institution.",
  },
  {
    id: 3,
    icon: Utensils,
    title: "Students see today's meals",
    text:
      "Calories, protein, carbs and fat already calculated. Just open the app and see what's being served.",
  },
  {
    id: 4,
    icon: Hand,
    title: "Tap 'Ate this'",
    text:
      "One tap to log. Macros update instantly. Goal progress updates. Zero searching, zero guessing.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how"
      data-testid="how-it-works-section"
      className="relative py-20 md:py-32 bg-gradient-to-b from-white to-emerald-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-emerald-700 reveal">
            How it works
          </p>
          <h2
            className="reveal mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
            style={{ animationDelay: "0.1s" }}
          >
            Four steps. <span className="gradient-text">Zero friction.</span>
          </h2>
          <p
            className="reveal mt-5 text-base sm:text-lg text-slate-600"
            style={{ animationDelay: "0.2s" }}
          >
            From menu upload to instant macro tracking — the whole pipeline runs
            quietly in the background.
          </p>
        </div>

        <div className="mt-14 md:mt-20 relative">
          {/* connector line on desktop */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] dashed-connector"
          />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((s, i) => (
              <li
                key={s.id}
                data-testid={`how-step-${s.id}`}
                className="reveal relative bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(2,44,34,0.25)] transition-all duration-300"
                style={{ animationDelay: `${0.15 + i * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-lime-100 border border-emerald-100">
                    <s.icon className="w-6 h-6 text-emerald-700" />
                    <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-500 text-white text-xs font-extrabold shadow-md">
                      {s.id}
                    </span>
                  </div>
                </div>
                <h3 className="mt-5 text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
