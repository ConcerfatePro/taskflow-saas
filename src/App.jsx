import { useState } from "react";
import DashboardMock from "./components/DashboardMock.jsx";

const faqs = [
  {
    q: "Is TaskFlow a real product?",
    a: "No. TaskFlow is a fictional SaaS for this portfolio landing page. There is no backend, auth, or billing.",
  },
  {
    q: "What does the pricing toggle do?",
    a: "It only changes displayed numbers on the frontend to mimic monthly vs yearly billing. No payments are processed.",
  },
  {
    q: "Can I reuse this layout?",
    a: "Yes — swap gradients, fonts, and copy to match your client. The dashboard mock is pure CSS in `DashboardMock.jsx`.",
  },
  {
    q: "Integrations shown — are they live?",
    a: "Logos are text badges for demo purposes. Wire real OAuth flows only when you have API keys and legal review.",
  },
];

const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    desc: "For solo makers testing the workflow.",
    features: ["3 projects", "Basic automations", "Email digests"],
  },
  {
    name: "Team",
    monthly: 29,
    yearly: 24,
    desc: "Shared boards with roles (mock).",
    features: ["Unlimited projects", "Slack-style alerts (UI)", "Timeline exports"],
    featured: true,
  },
  {
    name: "Scale",
    monthly: 79,
    yearly: 64,
    desc: "Pretend enterprise controls for the demo.",
    features: ["Audit log placeholder", "SSO copy block", "Priority support badge"],
  },
];

export default function App() {
  const [billing, setBilling] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(null);

  const yearly = billing === "yearly";

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b-2 border-slate-900 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-display text-lg font-black tracking-tight text-slate-900">TaskFlow</span>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.35em] text-indigo-600 sm:inline">Productivity OS · demo</span>
          </a>
          <nav className="hidden items-center gap-10 text-xs font-bold uppercase tracking-widest text-slate-500 md:flex">
            <a href="#features" className="hover:text-slate-900">
              Product
            </a>
            <a href="#workflow" className="hover:text-slate-900">
              Workflow
            </a>
            <a href="#pricing" className="hover:text-slate-900">
              Pricing
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" className="hidden border-2 border-slate-900 px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-900 hover:bg-slate-900 hover:text-white sm:inline">
              Log in
            </button>
            <a
              href="#cta"
              className="border-2 border-indigo-600 bg-indigo-600 px-4 py-2 text-xs font-black uppercase tracking-wider text-white transition hover:bg-indigo-500"
            >
              Start
            </a>
          </div>
        </div>
      </header>

      <section className="relative border-b-2 border-slate-900 bg-[linear-gradient(135deg,#eef2ff_0%,#ffffff_45%,#faf5ff_100%)]">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_70%_20%,rgba(99,102,241,0.35),transparent_55%)] lg:block" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="max-w-xl">
            <p className="inline-block border border-indigo-200 bg-white px-2 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-indigo-700">
              Release notes v0 · fictional
            </p>
            <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem]">
              One surface for tasks, docs, and the messy middle.
            </h1>
            <p className="mt-5 text-base font-medium text-slate-600">
              TaskFlow reads like a product memo: sharp type, hard edges, and a dashboard preview rendered in pure CSS —
              no screenshots to license.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#cta" className="bg-slate-900 px-8 py-3 text-xs font-black uppercase tracking-widest text-white hover:bg-slate-800">
                Book demo
              </a>
              <a href="#features" className="border-2 border-slate-900 bg-white px-8 py-3 text-xs font-black uppercase tracking-widest text-slate-900 hover:bg-slate-50">
                Read pillars
              </a>
            </div>
          </div>
          <div className="mt-14 lg:mt-0 lg:grid lg:grid-cols-12 lg:items-start lg:gap-8">
            <div className="lg:col-span-7 lg:col-start-6 lg:-mt-32">
              <DashboardMock />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-16 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="max-w-2xl font-display text-3xl font-black text-slate-900 sm:text-4xl">Product pillars — editorial layout</h2>
          <p className="mt-3 max-w-2xl text-sm font-medium text-slate-600">
            Alternating bands instead of a uniform card grid so this SaaS page doesn&apos;t look like every other template.
          </p>
          <div className="mt-12 space-y-0 border-2 border-slate-900 bg-white">
            {[
              { title: "Pulse inbox", body: "Triage tasks with keyboard-first patterns — UI only here.", k: "01" },
              { title: "Playbooks", body: "Reusable checklists for launches, hiring, and ops reviews.", k: "02" },
              { title: "Focus blocks", body: "Calendar-aware suggestions based on mock metrics.", k: "03" },
              { title: "Roles & spaces", body: "Pretend RBAC badges for enterprise storytelling.", k: "04" },
              { title: "Customer portal", body: "Placeholder for client approvals and file drops.", k: "05" },
              { title: "Insights", body: "Charts would connect to analytics — here it is typographic.", k: "06" },
            ].map((f, i) => (
              <div
                key={f.title}
                className={`grid gap-6 border-t-2 border-slate-900 p-6 sm:grid-cols-12 sm:items-center sm:p-8 ${i % 2 === 1 ? "bg-indigo-50/60" : ""}`}
              >
                <span className="font-mono text-3xl font-bold text-indigo-500 sm:col-span-2">{f.k}</span>
                <div className="sm:col-span-10">
                  <h3 className="font-display text-xl font-black text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm font-medium text-slate-600">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="scroll-mt-16 border-y-2 border-slate-900 bg-indigo-600 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="font-display text-3xl font-black">How teams adopt TaskFlow</h2>
              <p className="mt-3 text-sm font-medium text-indigo-100">A vertical spine instead of another two-column card.</p>
            </div>
            <ol className="space-y-6 lg:col-span-2">
              {["Capture from anywhere (copy)", "Prioritize with scoring (mock)", "Automate handoffs (stub)"].map((step, i) => (
                <li key={step} className="flex gap-4 border-l-4 border-white/40 pl-5">
                  <span className="font-mono text-sm font-bold text-indigo-200">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm font-medium leading-relaxed text-indigo-50">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-12 border-2 border-white/30 bg-black/20 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold uppercase tracking-widest text-indigo-100">
              <span>Automation builder</span>
              <span className="border border-white/40 px-2 py-1 text-white">Draft</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="border border-dashed border-white/50 p-4 text-sm text-white">
                When task moves to Done → notify #ship channel
              </div>
              <div className="border border-white/20 bg-white/10 p-4 text-sm text-indigo-100">
                If blocker &gt; 48h → escalate to manager (demo text)
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-16 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-black text-slate-900">Compare plans</h2>
              <p className="mt-2 text-sm font-medium text-slate-600">Table layout — toggle only affects numbers in-browser.</p>
            </div>
            <div className="flex border-2 border-slate-900 p-1 text-xs font-black uppercase tracking-widest">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`px-4 py-2 transition ${!yearly ? "bg-slate-900 text-white" : "text-slate-500"}`}
              >
                Mo
              </button>
              <button
                type="button"
                onClick={() => setBilling("yearly")}
                className={`px-4 py-2 transition ${yearly ? "bg-slate-900 text-white" : "text-slate-500"}`}
              >
                Yr −20%
              </button>
            </div>
          </div>
          <div className="mt-10 overflow-x-auto border-2 border-slate-900">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-slate-900 text-xs font-black uppercase tracking-widest text-white">
                <tr>
                  <th className="border border-slate-700 px-4 py-3">Plan</th>
                  <th className="border border-slate-700 px-4 py-3">Price / user / mo</th>
                  <th className="border border-slate-700 px-4 py-3">Highlights</th>
                  <th className="border border-slate-700 px-4 py-3 w-40" />
                </tr>
              </thead>
              <tbody>
                {plans.map((p) => {
                  const price = yearly ? p.yearly : p.monthly;
                  return (
                    <tr key={p.name} className={p.featured ? "bg-indigo-50" : "bg-white"}>
                      <td className="border border-slate-200 px-4 py-4 font-display text-base font-black text-slate-900">{p.name}</td>
                      <td className="border border-slate-200 px-4 py-4 font-mono text-lg font-bold text-slate-900">${price}</td>
                      <td className="border border-slate-200 px-4 py-4 text-slate-600">
                        <p className="font-medium text-slate-800">{p.desc}</p>
                        <ul className="mt-2 list-disc pl-4 text-xs">
                          {p.features.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="border border-slate-200 px-4 py-4">
                        <button
                          type="button"
                          className={`w-full border-2 px-3 py-2 text-xs font-black uppercase tracking-wider ${
                            p.featured ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                          }`}
                        >
                          Pick
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-slate-900 bg-slate-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-black text-slate-900">Integrations</h2>
          <p className="mt-2 max-w-xl text-sm font-medium text-slate-600">Square tiles instead of pill chips — still mock labels only.</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {["Slack", "Notion", "GitHub", "Figma", "Google", "Zapier"].map((name) => (
              <div
                key={name}
                className="flex aspect-square items-center justify-center border-2 border-slate-900 bg-white text-xs font-black uppercase tracking-widest text-slate-800 transition hover:bg-indigo-600 hover:text-white"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-16 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-black text-slate-900">FAQ</h2>
          <dl className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q}>
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-black uppercase tracking-wide text-slate-900"
                    >
                      <span className="flex items-start gap-3">
                        <span className="font-mono text-indigo-500">{String(i + 1).padStart(2, "0")}</span>
                        {item.q}
                      </span>
                      <span className="text-indigo-600">{open ? "−" : "+"}</span>
                    </button>
                  </dt>
                  {open && <dd className="pb-4 pl-10 text-sm font-medium leading-relaxed text-slate-600">{item.a}</dd>}
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      <section id="cta" className="scroll-mt-16 border-t-2 border-slate-900 bg-fuchsia-600 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-3xl font-black text-white">Ship the mock. Iterate later.</h2>
            <p className="mt-2 max-w-xl text-sm font-medium text-fuchsia-100">CTA band uses a hard split — swap in your real signup module.</p>
          </div>
          <button
            type="button"
            className="border-2 border-white bg-white px-10 py-4 text-xs font-black uppercase tracking-[0.2em] text-fuchsia-700 transition hover:bg-fuchsia-50"
          >
            Waitlist
          </button>
        </div>
      </section>

      <footer className="border-t-2 border-slate-900 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm font-medium text-slate-500 sm:flex-row sm:text-left sm:px-6">
          <p className="font-display font-black text-slate-900">TaskFlow</p>
          <p>© {new Date().getFullYear()} Fictional brand · portfolio mock.</p>
        </div>
      </footer>
    </div>
  );
}
