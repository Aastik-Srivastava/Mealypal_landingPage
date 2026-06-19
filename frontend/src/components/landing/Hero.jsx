import { Flame, Beef, Wheat, Droplet, Sparkles, ArrowRight } from "lucide-react";

const MacroPill = ({ icon: Icon, label, value, accent, className, testId }) => (
  <div
    data-testid={testId}
    className={`absolute z-20 flex items-center gap-2 sm:gap-3 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-[0_12px_30px_-10px_rgba(15,23,42,0.18)] ${className}`}
  >
    <span
      className={`inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${accent}`}
    >
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    </span>
    <div className="leading-tight">
      <p className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-slate-400">
        {label}
      </p>
      <p className="text-sm sm:text-base font-extrabold text-slate-900">{value}</p>
    </div>
  </div>
);

const Hero = ({ onSignup, onLogin }) => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-32"
    >
      {/* Background atmospheric blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-20 w-[480px] h-[480px] rounded-full bg-emerald-300/30 blur-3xl animate-blob" />
        <div className="absolute top-20 -right-24 w-[520px] h-[520px] rounded-full bg-lime-300/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-emerald-100/60 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
        {/* subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.08) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left: text */}
          <div className="lg:col-span-7 reveal">
            <span
              data-testid="hero-eyebrow"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Pre-launch · For institutions & students
            </span>

            <h1
              data-testid="hero-headline"
              className="mt-5 text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900"
            >
              The Nutrition{" "}
              <span className="gradient-text">Operating System</span>
              <br className="hidden sm:block" /> for Institutions.
            </h1>

            <p
              data-testid="hero-subheadline"
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed"
            >
              Colleges, hostels and cafeterias already know {"what's"} on the menu.{" "}
              {"Mealypal turns that menu into real nutrition data — so students track calories and macros without ever logging a single meal."}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                data-testid="hero-signup-button"
                onClick={onSignup}
                className="btn-primary group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold"
              >
                Sign Up
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                data-testid="hero-login-button"
                onClick={onLogin}
                className="btn-outline inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold"
              >
                Login
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs sm:text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Zero manual logging
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-500" />
                Verified nutrition data
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                Built for institutions
              </div>
            </div>
          </div>

          {/* Right: stylized meal card */}
          <div className="lg:col-span-5 reveal" style={{ animationDelay: "0.15s" }}>
            <div className="relative mx-auto max-w-md aspect-[4/5] sm:aspect-[5/6]">
              {/* gradient halo behind card */}
              <div className="absolute inset-0 -z-10 rounded-[42px] bg-gradient-to-br from-emerald-200/60 via-lime-200/40 to-emerald-100/0 blur-2xl" />

              {/* Card */}
              <div className="relative w-full h-full bg-white rounded-[36px] border border-slate-100 shadow-[0_30px_70px_-30px_rgba(2,44,34,0.45)] overflow-hidden">
                {/* Card header */}
                <div className="absolute top-0 inset-x-0 p-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-semibold text-emerald-700">
                      Today · Lunch
                    </p>
                    <h3 className="text-lg font-extrabold text-slate-900 leading-tight">
                      Grilled Paneer Bowl
                    </h3>
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                    Auto-matched
                  </span>
                </div>

                {/* circular illustration */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-[55%] flex items-center justify-center">
                  <div className="relative w-[68%] aspect-square rounded-full bg-gradient-to-br from-emerald-50 to-lime-100 border border-emerald-100/80 shadow-inner flex items-center justify-center overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/6978146/pexels-photo-6978146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt="Healthy bowl"
                      loading="eager"
                      className="w-full h-full object-cover"
                    />
                    {/* subtle ring overlay */}
                    <div className="absolute inset-0 rounded-full ring-1 ring-white/40" />
                  </div>
                </div>

                {/* CTA pill at bottom */}
                <div className="absolute bottom-5 inset-x-5">
                  <button
                    type="button"
                    data-testid="hero-card-ate-this"
                    aria-label="I ate this"
                    className="w-full btn-primary py-3 rounded-2xl text-sm font-bold tracking-wide"
                  >
                    I ate this — log instantly
                  </button>
                </div>
              </div>

              {/* Floating Macro Pills */}
              <MacroPill
                testId="macro-pill-calories"
                icon={Flame}
                label="Calories"
                value="540"
                accent="bg-gradient-to-br from-emerald-600 to-emerald-500"
                className="-left-3 sm:-left-8 top-1/3 animate-float"
              />
              <MacroPill
                testId="macro-pill-protein"
                icon={Beef}
                label="Protein"
                value="32g"
                accent="bg-gradient-to-br from-lime-500 to-emerald-500"
                className="-right-2 sm:-right-8 top-[44%] animate-float-delay-1"
              />
              <MacroPill
                testId="macro-pill-carbs"
                icon={Wheat}
                label="Carbs"
                value="48g"
                accent="bg-gradient-to-br from-amber-500 to-lime-500"
                className="-left-2 sm:-left-10 bottom-32 animate-float-delay-2"
              />
              <MacroPill
                testId="macro-pill-fat"
                icon={Droplet}
                label="Fat"
                value="18g"
                accent="bg-gradient-to-br from-emerald-700 to-emerald-500"
                className="-right-3 sm:-right-6 bottom-20 animate-float-delay-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
