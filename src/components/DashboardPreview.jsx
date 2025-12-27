export default function DashboardPreview() {
  return (
    <div className="rounded-2xl bg-white dark:bg-neutral-900 overflow-hidden">
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-200 dark:border-neutral-800">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-neutral-500 dark:text-neutral-400">
          Dashboard
        </span>
      </div>

      <div className="p-5 space-y-5">
        {/* Summary cards */}
        <div className="grid grid-cols-3 gap-3">
          <Stat
            title="Total Orders"
            value="24"
            valueClass="text-indigo-600 dark:text-indigo-400"
          />
          <Stat
            title="Pending"
            value="6"
            valueClass="text-amber-600 dark:text-amber-400"
          />
          <Stat
            title="Paid"
            value="18"
            valueClass="text-emerald-600 dark:text-emerald-400"
          />
        </div>

        {/* Orders list */}
        <div className="space-y-2">
          <OrderRow name="John" status="Pending" />
          <OrderRow name="Rohit" status="Paid" />
          <OrderRow name="Neha" status="Paid" />
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value, valueClass }) {
  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-3 bg-neutral-50 dark:bg-neutral-800">
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        {title}
      </p>
      <p className={`mt-1 text-lg font-semibold ${valueClass}`}>
        {value}
      </p>
    </div>
  );
}

function OrderRow({ name, status }) {
  const isPaid = status === "Paid";

  return (
    <div className="flex items-center justify-between rounded-lg px-3 py-2 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800">
      <span className="text-sm text-neutral-800 dark:text-neutral-200">
        {name}
      </span>

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
