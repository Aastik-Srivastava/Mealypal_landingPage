import { useEffect, useRef, useState } from "react";
import { X, CheckCircle2, Mail, Loader2 } from "lucide-react";

/**
 * EmailCaptureModal
 * - Self-contained, portable modal.
 * - Submits the captured email to a Formspree endpoint.
 *
 * ▼▼▼ REPLACE THIS WITH YOUR REAL FORMSPREE ENDPOINT URL ▼▼▼
 * Create a free Formspree account at https://formspree.io, create a new form,
 * grab the endpoint URL (looks like https://formspree.io/f/abcd1234) and paste
 * it into the FORMSPREE_ENDPOINT constant below.
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
// ▲▲▲ END SWAP ZONE ▲▲▲

const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

const EmailCaptureModal = ({ open, onClose, intent = "signup" }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef(null);
  const dialogRef = useRef(null);

  // Reset when closed
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setEmail("");
        setStatus("idle");
        setErrorMsg("");
      }, 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Body lock + focus
  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [open]);

  // Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (!isValidEmail(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, intent, source: "mealypal-landing" }),
      });
      if (!res.ok) throw new Error("Bad response");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong, please try again.");
    }
  };

  if (!open) return null;

  return (
    <div
      data-testid="email-modal"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-modal-title"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        aria-hidden
        data-testid="email-modal-backdrop"
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm animate-[fadeUp_0.25s_ease-out]"
      />

      {/* Sheet/Dialog */}
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-md mx-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-[0_30px_80px_-20px_rgba(2,44,34,0.45)] p-6 sm:p-8 reveal in-view"
      >
        <button
          aria-label="Close"
          data-testid="email-modal-close"
          onClick={onClose}
          className="absolute top-3 right-3 inline-flex items-center justify-center w-9 h-9 rounded-full text-slate-500 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {status !== "success" ? (
          <>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-400 text-white shadow-[0_10px_24px_-10px_rgba(5,150,105,0.6)]">
              <Mail className="w-6 h-6" />
            </div>
            <h3
              id="email-modal-title"
              data-testid="email-modal-headline"
              className="mt-5 text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-tight"
            >
              {"Mealypal isn't live yet — be first in line."}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              {"Leave your email and we'll let you know the moment we launch."}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <label htmlFor="email-input" className="sr-only">Email</label>
              <input
                id="email-input"
                ref={inputRef}
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                data-testid="email-modal-input"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") {
                    setStatus("idle");
                    setErrorMsg("");
                  }
                }}
                placeholder="you@college.edu"
                className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 text-base text-slate-900 placeholder:text-slate-400 transition-all"
              />
              <button
                type="submit"
                data-testid="email-modal-submit"
                disabled={status === "loading"}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-base font-bold disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  "Notify Me"
                )}
              </button>

              {status === "error" && (
                <p
                  data-testid="email-modal-error"
                  role="alert"
                  className="text-sm font-semibold text-rose-600"
                >
                  {errorMsg || "Something went wrong, please try again."}
                </p>
              )}
            </form>

            <p className="mt-4 text-xs text-slate-400">
              No spam. One email when we launch. Unsubscribe any time.
            </p>
          </>
        ) : (
          <div
            data-testid="email-modal-success"
            className="text-center py-2"
          >
            <div className="mx-auto inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-lime-400 text-white shadow-[0_18px_40px_-12px_rgba(5,150,105,0.6)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="mt-5 text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              {"You're on the list!"}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              {"We'll email you when Mealypal launches. Thanks for believing early."}
            </p>
            <button
              data-testid="email-modal-success-close"
              onClick={onClose}
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full btn-outline font-semibold text-sm"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailCaptureModal;
