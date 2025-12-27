export default function DashboardPreview() {
  return (
    <div className="glass bg-white/90 dark:bg-neutral-900/70 rounded-3xl border border-white/60 dark:border-neutral-800 shadow-2xl p-4">
      {/* Window bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-neutral-200 dark:border-neutral-800">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-neutral-500">Daxo Dashboard</span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Stat title="Orders" value="24" color="indigo" />
          <Stat title="Pending" value="6" color="amber" />
          <Stat title="Paid" value="18" color="emerald" />
        </div>

        {/* Orders list */}
        <div className="space-y-2">
          <OrderRow name="Peter" status="Pending" />
          <OrderRow name="Rohit" status="Paid" />
          <OrderRow name="Neha" status="Paid" />
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value, color }) {
  return (
    <div className="rounded-xl p-3 bg-neutral-100 dark:bg-neutral-800">
      <p className="text-xs text-neutral-500">{title}</p>
      <p className={`text-lg font-semibold text-${color}-600 dark:text-${color}-400`}>
        {value}
      </p>
    </div>
  );
}

function OrderRow({ name, status }) {
  const isPaid = status === "Paid";

  return (
    <div className="flex items-center justify-between rounded-lg px-3 py-2 bg-neutral-50 dark:bg-neutral-800">
      <span className="text-sm">{name}</span>
      <span
        className={`text-xs font-medium ${
          isPaid
            ? "text-emerald-600 dark:text-emerald-400"
            : "text-amber-600 dark:text-amber-400"
        }`}
      >
        {status}
      </span>
    </div>
  );
}
