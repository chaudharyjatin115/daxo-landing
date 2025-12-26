export default function Logo({ size = 48 }) {
  return (
    <div
      className="flex items-center justify-center rounded-2xl bg-black text-white font-semibold shadow-md"
      style={{
        width: size,
        height: size,
      }}
    >
      <span className="text-lg">D</span>
    </div>
  );
}
