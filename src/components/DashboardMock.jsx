/** Pure CSS “product screenshot” — squared, memo-like chrome */
export default function DashboardMock() {
  return (
    <div className="overflow-hidden border-2 border-slate-900 bg-white shadow-[12px_12px_0_0_theme(colors.indigo.500)]">
      <div className="flex items-center gap-2 border-b-2 border-slate-900 bg-slate-100 px-3 py-2">
        <span className="h-2 w-2 bg-rose-500" />
        <span className="h-2 w-2 bg-amber-500" />
        <span className="h-2 w-2 bg-emerald-500" />
        <span className="ml-2 flex-1 border border-slate-400 bg-white py-1 text-center font-mono text-[9px] font-medium text-slate-500">
          app.taskflow.demo / today
        </span>
      </div>
      <div className="grid gap-0 md:grid-cols-[160px_1fr]">
        <aside className="hidden border-r-2 border-slate-900 bg-slate-50 p-2 md:block">
          <div className="mb-3 h-7 bg-gradient-to-r from-indigo-600 to-violet-600" />
          {["Inbox", "Projects", "Calendar", "Insights"].map((label) => (
            <div key={label} className="mb-1 flex items-center gap-2 border border-transparent px-2 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-600 hover:border-slate-300 hover:bg-white">
              <span className="h-1.5 w-1.5 bg-indigo-500" />
              {label}
            </div>
          ))}
        </aside>
        <div className="p-3 sm:p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400">Today</p>
              <p className="font-display text-base font-black text-slate-900">Team velocity</p>
            </div>
            <div className="flex gap-1">
              <span className="border border-indigo-200 bg-indigo-50 px-2 py-0.5 font-mono text-[9px] font-bold uppercase text-indigo-800">
                Live
              </span>
              <span className="border border-violet-200 bg-violet-50 px-2 py-0.5 font-mono text-[9px] font-bold uppercase text-violet-800">
                Demo
              </span>
            </div>
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {[
              { label: "Focus time", val: "3h 20m", tone: "from-indigo-500 to-blue-600" },
              { label: "Tasks cleared", val: "18", tone: "from-violet-500 to-fuchsia-600" },
              { label: "Blockers", val: "2", tone: "from-slate-700 to-slate-900" },
            ].map((c) => (
              <div key={c.label} className="border border-slate-200 bg-white p-2">
                <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400">{c.label}</p>
                <p className="mt-1 font-display text-lg font-black text-slate-900">{c.val}</p>
                <div className={`mt-2 h-1 bg-gradient-to-r ${c.tone}`} />
              </div>
            ))}
          </div>
          <div className="mt-3 grid gap-2 lg:grid-cols-2">
            <div className="border border-slate-200 bg-slate-50 p-3">
              <p className="font-mono text-[10px] font-bold uppercase text-slate-600">Board · Launch</p>
              <div className="mt-2 space-y-1.5">
                {["Design QA", "Webhook mocks", "Billing copy"].map((t, i) => (
                  <div key={t} className="flex items-center gap-2 border border-slate-200 bg-white px-2 py-1.5 font-mono text-[10px] text-slate-700">
                    <span className={`h-2.5 w-2.5 border-2 ${i === 0 ? "border-indigo-600 bg-indigo-600" : "border-slate-300"}`} />
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-slate-200 bg-white p-3">
              <p className="font-mono text-[10px] font-bold uppercase text-slate-600">Timeline</p>
              <div className="mt-2 space-y-1.5">
                {[60, 40, 75].map((w, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-12 font-mono text-[9px] text-slate-400">S{i + 1}</span>
                    <div className="h-1.5 flex-1 bg-slate-100">
                      <div className="h-full bg-gradient-to-r from-indigo-600 to-violet-500" style={{ width: `${w}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
