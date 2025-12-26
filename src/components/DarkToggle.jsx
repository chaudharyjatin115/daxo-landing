export default function DarkToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="rounded-xl border border-neutral-300 dark:border-neutral-700 px-3 py-1.5 text-xs font-medium backdrop-blur bg-white/60 dark:bg-neutral-900/60 hover:bg-white/80 dark:hover:bg-neutral-900 transition"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
