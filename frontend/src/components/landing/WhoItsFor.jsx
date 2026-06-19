import { Building2, GraduationCap, ClipboardList } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    tag: "Institutions",
    title: "Hostels, colleges, PGs, sports academies & corporate cafeterias.",
    bullets: [
      "Upload menus once, reuse weekly",
      "Manage students & cohorts in a private workspace",
      "Get consumption analytics across your mess",
    ],
  },
  {
    icon: GraduationCap,
    tag: "Students",
    title: "Track macros effortlessly — without ever opening a food database.",
    bullets: [
      "Personalized calorie & macro goals (bulk, cut, maintain)",
      "Tap once to log a served meal",
      "See progress, streaks and weekly averages",
    ],
  },
  {
    icon: ClipboardList,
    tag: "Mess Managers / Admins",
    title: "A simple dashboard for the people actually running the kitchen.",
    bullets: [
      "Plan menus and approve dish matches",
      "See popular meals, protein averages and trends",
      "Add custom local foods unique to your mess",
    ],
  },
];

const WhoItsFor = () => {
  return (
    <section
      id="audience"
      data-testid="audience-section"
      className="relative py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl reveal">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-emerald-700">
            Who it's for
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            One platform, <span className="gradient-text">three perspectives.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600">
            {"Mealypal is designed so every role gets exactly what they need — and nothing they don't."}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {audiences.map((a, i) => (
            <article
              key={a.tag}
              data-testid={`audience-card-${a.tag.toLowerCase().replace(/[^a-z]/g, "-")}`}
              className="reveal group relative bg-slate-50/70 hover:bg-white border border-slate-100 hover:border-emerald-100 rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(2,44,34,0.25)]"
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-500 text-white shadow-[0_10px_24px_-10px_rgba(5,150,105,0.55)]">
                <a.icon className="w-6 h-6" />
              </div>
              <p className="mt-6 text-[11px] font-bold tracking-[0.18em] uppercase text-emerald-700">
                {a.tag}
              </p>
              <h3 className="mt-2 text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                {a.title}
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm sm:text-base text-slate-600">
                {a.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
