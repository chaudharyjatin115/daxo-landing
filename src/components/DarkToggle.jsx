export default function DarkToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="px-3 py-1 rounded-lg border text-sm"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
