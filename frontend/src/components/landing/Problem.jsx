import { Search, X, ArrowRight, CheckCircle2 } from "lucide-react";

const Problem = () => {
  return (
    <section
      id="problem"
      data-testid="problem-section"
      className="relative py-20 md:py-32 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-emerald-700 reveal">
          The Problem
        </p>
        <h2
          data-testid="problem-heading"
          className="reveal mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
          style={{ animationDelay: "0.1s" }}
        >
          Students give up on macro tracking because{" "}
          <span className="gradient-text">manual logging is broken.</span>
        </h2>
        <p
          className="reveal mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          Search a database. Pick the closest match. Guess the portion. Repeat
          three times a day. Most students quit by week two — yet their hostel,
          mess or cafeteria already knows exactly what was served.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Today */}
          <div
            data-testid="problem-today-card"
            className="reveal relative rounded-3xl border border-slate-100 bg-slate-50/60 p-7 sm:p-8"
            style={{ animationDelay: "0.25s" }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-rose-600">
              <X className="w-4 h-4" /> Today
            </span>
            <h3 className="mt-3 text-xl sm:text-2xl font-extrabold text-slate-900">
              Student logs every meal by hand
            </h3>
            <ul className="mt-5 space-y-3 text-sm sm:text-base text-slate-600">
              <li className="flex gap-3"><Search className="w-4 h-4 mt-1 text-slate-400 shrink-0"/> {'Searches "paneer curry" in a generic app'}</li>
              <li className="flex gap-3"><Search className="w-4 h-4 mt-1 text-slate-400 shrink-0"/> Picks the closest of 20 confusing entries</li>
              <li className="flex gap-3"><Search className="w-4 h-4 mt-1 text-slate-400 shrink-0"/> Guesses grams without a kitchen scale</li>
              <li className="flex gap-3"><Search className="w-4 h-4 mt-1 text-slate-400 shrink-0"/> Quits within two weeks</li>
            </ul>
          </div>

          {/* With Mealypal */}
          <div
            data-testid="problem-mealypal-card"
            className="reveal relative rounded-3xl p-[1.5px] bg-gradient-to-br from-emerald-500 via-emerald-400 to-lime-400 shadow-[0_20px_50px_-20px_rgba(5,150,105,0.5)]"
            style={{ animationDelay: "0.35s" }}
          >
            <div className="rounded-[22px] bg-white p-7 sm:p-8 h-full">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-700">
                <CheckCircle2 className="w-4 h-4" /> With Mealypal
              </span>
              <h3 className="mt-3 text-xl sm:text-2xl font-extrabold text-slate-900">
                Institutions already know the menu.
              </h3>
              <ul className="mt-5 space-y-3 text-sm sm:text-base text-slate-700">
                <li className="flex gap-3"><ArrowRight className="w-4 h-4 mt-1 text-emerald-600 shrink-0"/> Menu uploaded once by the mess manager</li>
                <li className="flex gap-3"><ArrowRight className="w-4 h-4 mt-1 text-emerald-600 shrink-0"/> Each dish auto-matched to verified nutrition</li>
                <li className="flex gap-3"><ArrowRight className="w-4 h-4 mt-1 text-emerald-600 shrink-0"/> {'Student just taps "Ate this"'}</li>
                <li className="flex gap-3"><ArrowRight className="w-4 h-4 mt-1 text-emerald-600 shrink-0"/> Macros update instantly. Habit sticks.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
