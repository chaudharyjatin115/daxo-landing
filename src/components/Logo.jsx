export default function Logo({ size = 36 }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-xl"
      style={{ width: size, height: size }}
    >
      {/* Glow blobs */}
      <div className="absolute inset-0 rounded-full bg-indigo-500 blur-md opacity-70" />
      <div className="absolute inset-1 rounded-full bg-violet-500 blur-sm opacity-80" />

      {/* Center badge */}
      <div className="relative z-10 flex items-center justify-center w-full h-full rounded-lg bg-black text-white font-semibold">
        D
      </div>
    </div>
  );
}
