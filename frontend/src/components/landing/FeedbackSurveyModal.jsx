import { useEffect, useRef, useState } from "react";
import {
  X,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
  GraduationCap,
  ClipboardList,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

/**
 * FeedbackSurveyModal
 * Multi-step pre-launch feedback survey.
 * Submission handled via @formspree/react useForm hook (form ID: mbdevnwr).
 */

const FORMSPREE_FORM_ID = "mbdevnwr";
const TOTAL_STEPS = 5; // Step 1 .. Step 5 (intro is step 0, not counted in progress)

const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

const PillGroup = ({ name, options, value, onChange, testIdPrefix }) => (
  <div role="radiogroup" aria-label={name} className="flex flex-wrap gap-2">
    {options.map((opt) => {
      const selected = value === opt.value;
      return (
        <button
          key={opt.value}
          type="button"
          role="radio"
          aria-checked={selected}
          data-testid={`${testIdPrefix}-${opt.value}`}
          onClick={() => onChange(opt.value)}
          className={`px-4 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
            selected
              ? "bg-gradient-to-r from-emerald-600 to-lime-500 text-white border-transparent shadow-[0_10px_24px_-12px_rgba(5,150,105,0.65)]"
              : "bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/60"
          }`}
        >
          {opt.label}
        </button>
      );
    })}
  </div>
);

const ProgressBar = ({ step }) => {
  if (step === 0) return null;
  const pct = (step / TOTAL_STEPS) * 100;
  return (
    <div
      data-testid="survey-progress"
      className="absolute top-0 inset-x-0 h-1 bg-slate-100 rounded-t-3xl overflow-hidden"
    >
      <div
        className="h-full bg-gradient-to-r from-emerald-600 to-lime-400 transition-[width] duration-500 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};

const FeedbackSurveyModal = ({ open, onClose }) => {
  const [step, setStep] = useState(0);

  // form state
  const [role, setRole] = useState(""); // 'student' | 'admin'
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [validation, setValidation] = useState("");
  const [frustration, setFrustration] = useState("");
  const [frustrationOther, setFrustrationOther] = useState("");
  const [pricing, setPricing] = useState("");
  const [openFeedback, setOpenFeedback] = useState("");

  const [state, handleSubmit, reset] = useForm(FORMSPREE_FORM_ID);

  const dialogRef = useRef(null);

  // Reset everything when closed
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStep(0);
        setRole("");
        setName("");
        setEmail("");
        setEmailError("");
        setValidation("");
        setFrustration("");
        setFrustrationOther("");
        setPricing("");
        setOpenFeedback("");
        if (reset) reset();
      }, 220);
      return () => clearTimeout(t);
    }
  }, [open, reset]);

  // Body scroll lock + Escape close
  useEffect(() => {
    if (!open) return;
    document.body.classList.add("modal-open");
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const goNext = () => setStep((s) => Math.min(s + 1, 5));
  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  const canProceed = () => {
    if (step === 1) return role !== "";
    if (step === 2) return isValidEmail(email);
    if (step === 3) {
      if (!validation || !frustration) return false;
      if (frustration === "other" && frustrationOther.trim().length === 0)
        return false;
      return true;
    }
    if (step === 4) return pricing !== "";
    return true;
  };

  const handleNext = () => {
    if (step === 2) {
      if (!isValidEmail(email)) {
        setEmailError("Please enter a valid email address.");
        return;
      }
      setEmailError("");
    }
    goNext();
  };

  const onFinalSubmit = (e) => {
    e.preventDefault();
    // Build payload — Formspree accepts any named fields
    const frustrationLabel = (() => {
      const map = {
        manual_logging:
          role === "admin"
            ? "Manually updating menus and food data"
            : "Manually logging/searching every meal",
        unknown_macros: "Not knowing accurate calories/macros",
        forgetting: "Forgetting to track consistently",
        too_much_admin: "Too much admin/manual work overall",
        other: `Other — ${frustrationOther}`,
      };
      return map[frustration] || frustration;
    })();

    // useForm handleSubmit accepts plain SubmissionData objects.
    const payload = {
      role: role === "admin" ? "Mess Manager / Admin" : "Student / User",
      name: name || "(not provided)",
      email,
      validation,
      frustration: frustrationLabel,
      pricing_per_month: pricing,
      open_feedback: openFeedback || "(none)",
      source: "mealypal-landing-survey",
    };

    handleSubmit(payload);
  };

  // ----- Success state -----
  if (state.succeeded) {
    return (
      <ModalShell onClose={onClose} step={0}>
        <div data-testid="survey-success" className="text-center py-4">
          <div className="mx-auto inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-lime-400 text-white shadow-[0_18px_40px_-12px_rgba(5,150,105,0.6)]">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h3 className="mt-5 text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
            Thank you!
          </h3>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Your input is shaping what we build.
          </p>
          <button
            data-testid="survey-success-close"
            onClick={onClose}
            className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full btn-outline font-semibold text-sm"
          >
            Close
          </button>
        </div>
      </ModalShell>
    );
  }

  // ----- Step renderers -----
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div data-testid="survey-step-intro">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {"Mealypal isn't live yet — help us build it right."}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              2 minutes. Your answers directly shape what we build.
            </p>
            <button
              data-testid="survey-intro-start"
              onClick={goNext}
              className="btn-primary mt-7 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-base font-bold"
            >
              {"Let's go"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        );

      case 1:
        return (
          <StepLayout
            stepLabel="Step 1 of 5"
            heading="Who are you?"
            sub="Pick the one that fits best — we'll tailor a couple of questions."
            testId="survey-step-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <RoleCard
                testId="survey-role-student"
                icon={GraduationCap}
                label="Student / User"
                selected={role === "student"}
                onClick={() => setRole("student")}
              />
              <RoleCard
                testId="survey-role-admin"
                icon={ClipboardList}
                label="Mess Manager / Admin"
                selected={role === "admin"}
                onClick={() => setRole("admin")}
              />
            </div>
          </StepLayout>
        );

      case 2:
        return (
          <StepLayout
            stepLabel="Step 2 of 5"
            heading="How can we reach you?"
            sub="We'll only email you when Mealypal launches."
            testId="survey-step-2"
          >
            <label className="block text-xs font-bold tracking-wider uppercase text-slate-500">
              Name <span className="text-slate-400 normal-case font-semibold">(optional)</span>
            </label>
            <input
              data-testid="survey-name-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Aman Verma"
              className="mt-2 w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 text-base transition-all"
            />

            <label className="block mt-5 text-xs font-bold tracking-wider uppercase text-slate-500">
              Email <span className="text-rose-500">*</span>
            </label>
            <input
              data-testid="survey-email-input"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
              placeholder="you@college.edu"
              className="mt-2 w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 text-base transition-all"
            />
            {emailError && (
              <p data-testid="survey-email-error" className="mt-2 text-sm font-semibold text-rose-600">
                {emailError}
              </p>
            )}
          </StepLayout>
        );

      case 3: {
        const frustrationOptions = [
          {
            value: "manual_logging",
            label:
              role === "admin"
                ? "Manually updating menus and food data"
                : "Manually logging/searching every meal",
          },
          { value: "unknown_macros", label: "Not knowing accurate calories/macros" },
          { value: "forgetting", label: "Forgetting to track consistently" },
          { value: "too_much_admin", label: "Too much admin/manual work overall" },
          { value: "other", label: "Other" },
        ];

        return (
          <StepLayout
            stepLabel="Step 3 of 5"
            heading="Does Mealypal solve a real problem for you?"
            testId="survey-step-3"
          >
            <PillGroup
              name="Validation"
              testIdPrefix="survey-validation"
              value={validation}
              onChange={setValidation}
              options={[
                { value: "yes", label: "Yes, this would genuinely help" },
                { value: "somewhat", label: "Somewhat, I see the value" },
                { value: "not_really", label: "Not really" },
                { value: "not_sure", label: "Not sure" },
              ]}
            />

            <p className="mt-7 text-sm sm:text-base font-bold text-slate-900">
              {role === "admin"
                ? "What's the most frustrating part of managing mess menus today?"
                : "What's the most frustrating part of tracking nutrition today?"}
            </p>
            <div className="mt-3">
              <PillGroup
                name="Frustration"
                testIdPrefix="survey-frustration"
                value={frustration}
                onChange={setFrustration}
                options={frustrationOptions}
              />
            </div>
            {frustration === "other" && (
              <input
                data-testid="survey-frustration-other-input"
                type="text"
                value={frustrationOther}
                onChange={(e) => setFrustrationOther(e.target.value)}
                placeholder="Tell us more…"
                className="mt-3 w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 text-sm transition-all"
              />
            )}
          </StepLayout>
        );
      }

      case 4:
        return (
          <StepLayout
            stepLabel="Step 4 of 5"
            heading={
              role === "admin"
                ? "What would you be comfortable paying for this, per institution, per month?"
                : "What would you be comfortable paying for this, per month?"
            }
            testId="survey-step-4"
          >
            <PillGroup
              name="Pricing"
              testIdPrefix="survey-pricing"
              value={pricing}
              onChange={setPricing}
              options={[
                { value: "0-99", label: "₹0–99" },
                { value: "100-299", label: "₹100–299" },
                { value: "300-499", label: "₹300–499" },
                { value: "500-plus", label: "₹500+" },
              ]}
            />
          </StepLayout>
        );

      case 5:
        return (
          <StepLayout
            stepLabel="Step 5 of 5"
            heading="Anything else?"
            sub="Optional — but really useful for us."
            testId="survey-step-5"
          >
            <textarea
              data-testid="survey-open-feedback"
              rows={5}
              value={openFeedback}
              onChange={(e) => setOpenFeedback(e.target.value)}
              placeholder="Any features you'd want added or removed? Anything that feels like a pain point?"
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 text-base transition-all resize-none"
            />
            {state.errors && (
              <p
                data-testid="survey-submit-error"
                role="alert"
                className="mt-3 text-sm font-semibold text-rose-600"
              >
                Something went wrong. Please try again.
                <ValidationError errors={state.errors} className="hidden" />
              </p>
            )}
          </StepLayout>
        );

      default:
        return null;
    }
  };

  return (
    <ModalShell onClose={onClose} step={step}>
      {/* Top bar: back + close */}
      <div className="flex items-center justify-between mb-2 -mt-1">
        {step > 0 ? (
          <button
            data-testid="survey-back-button"
            onClick={goBack}
            aria-label="Back"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        ) : (
          <span />
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (step === 5) onFinalSubmit(e);
          else if (canProceed()) handleNext();
        }}
      >
        {renderStep()}

        {/* Footer controls (hidden on intro) */}
        {step >= 1 && (
          <div className="mt-7 flex flex-col sm:flex-row-reverse gap-3">
            {step < 5 ? (
              <button
                type="button"
                data-testid="survey-next-button"
                onClick={handleNext}
                disabled={!canProceed()}
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-base font-bold disabled:opacity-50 disabled:cursor-not-allowed flex-1"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                data-testid="survey-submit-button"
                onClick={onFinalSubmit}
                disabled={state.submitting}
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-base font-bold disabled:opacity-70 disabled:cursor-not-allowed flex-1"
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            )}

            {step === 5 && (
              <button
                type="button"
                data-testid="survey-skip-button"
                onClick={onFinalSubmit}
                disabled={state.submitting}
                className="btn-outline inline-flex items-center justify-center px-6 py-3.5 rounded-2xl text-sm font-semibold"
              >
                Skip & submit
              </button>
            )}
          </div>
        )}
      </form>
    </ModalShell>
  );
};

/* ---------- Sub-components ---------- */

const ModalShell = ({ children, onClose, step }) => {
  return (
    <div
      data-testid="survey-modal"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        aria-hidden
        data-testid="survey-modal-backdrop"
        className="absolute inset-0 bg-slate-900/55 backdrop-blur-sm animate-[fadeUp_0.25s_ease-out]"
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-lg mx-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-[0_30px_80px_-20px_rgba(2,44,34,0.45)] p-6 sm:p-8 max-h-[92vh] overflow-y-auto reveal in-view"
      >
        <ProgressBar step={step} />
        <button
          aria-label="Close"
          data-testid="survey-modal-close"
          onClick={onClose}
          className="absolute top-3 right-3 inline-flex items-center justify-center w-9 h-9 rounded-full text-slate-500 hover:bg-slate-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
};

const StepLayout = ({ stepLabel, heading, sub, children, testId }) => (
  <div data-testid={testId}>
    <p className="text-xs font-bold tracking-[0.18em] uppercase text-emerald-700">
      {stepLabel}
    </p>
    <h3 className="mt-2 text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">
      {heading}
    </h3>
    {sub && (
      <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
        {sub}
      </p>
    )}
    <div className="mt-5">{children}</div>
  </div>
);

const RoleCard = ({ icon: Icon, label, selected, onClick, testId }) => (
  <button
    type="button"
    data-testid={testId}
    role="radio"
    aria-checked={selected}
    onClick={onClick}
    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center gap-3 ${
      selected
        ? "border-transparent bg-gradient-to-br from-emerald-50 to-lime-50 ring-2 ring-emerald-500 shadow-[0_10px_24px_-12px_rgba(5,150,105,0.55)]"
        : "border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/40"
    }`}
  >
    <span
      className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${
        selected
          ? "bg-gradient-to-br from-emerald-600 to-lime-500 text-white"
          : "bg-slate-100 text-slate-600"
      }`}
    >
      <Icon className="w-5 h-5" />
    </span>
    <span className="font-extrabold text-slate-900 text-base">{label}</span>
  </button>
);

export default FeedbackSurveyModal;
