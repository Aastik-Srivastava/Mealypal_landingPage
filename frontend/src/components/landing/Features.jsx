import {
  Cpu,
  Target,
  Layers,
  Hand,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Smart Food Matching Engine",
    text:
      "Each menu item is automatically connected to verified nutrition data — no manual mapping required.",
  },
  {
    icon: Target,
    title: "Personalized Goals",
    text:
      "BMR/TDEE-based calorie and macro targets per student. Choose bulk, cut or maintain.",
  },
  {
    icon: Layers,
    title: "Organization Workspaces",
    text:
      "Every institution gets its own private space — students, menus and analytics fully isolated.",
  },
  {
    icon: Hand,
    title: "Zero-Effort Logging",
    text:
      "Tap 'Ate this' instead of searching food databases. Habit-friendly by design.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    text:
      "Admins see consumption trends, popular meals and protein averages across the mess.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Nutrition Database",
    text:
      "Reviewed food data with support for custom local foods unique to your institution.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="relative py-20 md:py-32 bg-slate-50/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl reveal">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-emerald-700">
            Key Features
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Built like a serious{" "}
            <span className="gradient-text">nutrition OS</span> — not another
            food diary.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-testid={`feature-card-${i}`}
              className="reveal group relative bg-white border border-slate-100 rounded-3xl p-7 hover:-translate-y-1 hover:shadow-[0_24px_50px_-25px_rgba(2,44,34,0.3)] hover:border-emerald-100 transition-all duration-300"
              style={{ animationDelay: `${0.1 + i * 0.07}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-50 to-lime-100 border border-emerald-100 text-emerald-700 group-hover:from-emerald-600 group-hover:to-lime-500 group-hover:text-white transition-colors duration-300">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                {f.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
