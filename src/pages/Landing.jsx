import Logo from "../components/Logo";
import DarkToggle from "../components/DarkToggle";
import { useDarkMode } from "../hooks/useDarkMode";
import { Link } from "react-router-dom";

export default function Landing() {
  const [dark, setDark] = useDarkMode();

  return (
    <div
      className="
        min-h-screen
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
        from-white via-indigo-50 to-indigo-100
        dark:bg-gradient-to-br dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950
        text-neutral-900 dark:text-neutral-100
        transition-colors
      "
    >
      {/* NAVBAR */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size={36} />
          <span className="font-semibold text-lg">Daxo</span>
        </div>

        <div className="flex items-center gap-4">
          <DarkToggle dark={dark} setDark={setDark} />

          <Link
            to="/login"
            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Sign in
          </Link>
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6 py-24 grid gap-20">
        <section className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Manage your business
            <br />
            <span className="text-indigo-600 dark:text-indigo-400">
              without stress
            </span>
          </h1>

          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
            Orders, payments, branding — all in one calm, modern dashboard built
            for small businesses.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Link
              to="/signup"
              className="
                px-7 py-3 rounded-2xl
                bg-indigo-600 text-white font-medium
                hover:bg-indigo-700 transition
                shadow-lg shadow-indigo-600/25
              "
            >
              Create free account
            </Link>

            <a
              href="#features"
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:underline"
            >
              Learn more
            </a>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="grid md:grid-cols-3 gap-8"
        >
          <Feature
            title="Orders"
            desc="Track pending, sent, and completed orders effortlessly."
          />
          <Feature
            title="Payments"
            desc="Instant clarity on paid and unpaid invoices."
          />
          <Feature
            title="Branding"
            desc="Logo, colors, and identity that feel truly yours."
          />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200/60 dark:border-neutral-800/60 py-6 text-center text-sm text-neutral-500">
        © 2025 Daxo. Built with care.
      </footer>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="glass rounded-3xl border border-white/50 dark:border-neutral-800 p-6 shadow-xl">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {desc}
      </p>
    </div>
  );
}
