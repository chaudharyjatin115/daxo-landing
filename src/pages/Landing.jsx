import DashboardPreview from "../components/DashboardPreview";
import Logo from "../components/Logo";
import DarkToggle from "../components/DarkToggle";
import { useDarkMode } from "../hooks/useDarkMode";

export default function Landing() {
  const [dark, setDark] = useDarkMode();

  return (
    <div
      className="
        relative min-h-screen overflow-hidden transition-colors
        bg-white dark:bg-neutral-950
        bg-[radial-gradient(ellipse_at_top,white,white)]
        dark:bg-[radial-gradient(ellipse_at_top,#020617,#020617)]
        text-neutral-900 dark:text-neutral-100
      "
    >
      {/* GRADIENT ORBS */}
      <div className="orb w-72 h-72 bg-indigo-400 top-[-6rem] left-[-6rem] opacity-20 dark:opacity-50" />
      <div className="orb w-96 h-96 bg-violet-400 top-[20%] right-[-8rem] opacity-20 dark:opacity-50" />
      <div className="orb w-80 h-80 bg-sky-400 bottom-[-6rem] left-[30%] opacity-20 dark:opacity-50" />

      {/* NAVBAR */}
      <header className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size={38} />
          <span className="font-semibold text-lg">Daxo</span>
        </div>

        <div className="flex items-center gap-4">
          <DarkToggle dark={dark} setDark={setDark} />
          <a
            href="https://https://daxo-dashboard-fa691.web.app/login"
            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Sign in
          </a>
        </div>
      </header>

      {/* HERO */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <section>
          <p className="mb-3 text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-400">
            Built for small businesses & creators
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Run your business
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
              without chaos
            </span>
          </h1>

          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
            Daxo helps you manage orders, track payments, and build your brand —
            all from one clean, modern dashboard.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://daxo-dashboard-fa691.web.app/signup"
              className="
                px-7 py-3 rounded-2xl
                bg-gradient-to-r from-indigo-500 to-violet-500
                text-white font-medium
                shadow-lg shadow-indigo-500/30
                hover:opacity-90 transition
              "
            >
              Get started for free
            </a>

            <a
              href="#preview"
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:underline"
            >
              Preview dashboard
            </a>
          </div>
        </section>

        {/* RIGHT */}
        <section id="preview">
          <p className="mb-4 text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-400">
            Your business at a glance
          </p>

          {/* 🔽 SAME CARD — ONLY CONTENT CHANGED */}
          <div className="glass rounded-3xl border border-white/60 dark:border-neutral-800 shadow-2xl p-4 bg-white/90 dark:bg-neutral-900/70">
            <DashboardPreview />
          </div>
        </section>
      </main>

      {/* FEATURES */}
      <section
        id="features"
        className="relative z-10 max-w-6xl mx-auto px-6 pb-24 space-y-8"
      >
        <div>
          <p className="text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-400">
            Everything in one place
          </p>
          <h2 className="mt-1 text-2xl md:text-3xl font-bold">
            Focus on work that actually grows your business
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-xl">
            Stop juggling spreadsheets, messages, and notes. Daxo keeps your
            operations simple, organized, and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Feature
            title="Orders"
            desc="Always know what’s pending, sent, or completed — no follow-ups needed."
          />
          <Feature
            title="Payments"
            desc="Instant visibility into paid and unpaid invoices."
          />
          <Feature
            title="Branding"
            desc="Present your business professionally with your own identity."
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-neutral-200/60 dark:border-neutral-800/60 py-6 text-center text-sm text-neutral-500">
        © 2025 Daxo. Built with care.
      </footer>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="glass bg-white/90 dark:bg-neutral-900/70 rounded-3xl border border-white/60 dark:border-neutral-800 p-6 shadow-xl">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {desc}
      </p>
    </div>
  );
}

