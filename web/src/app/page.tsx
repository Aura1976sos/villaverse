const roles = [
  {
    title: "Super Admin",
    points: [
      "Control users, campaigns, withdrawals, and finance",
      "Manage CMS pages, settings, commissions, and gateways",
      "Review fraud alerts, audit logs, and platform analytics",
    ],
  },
  {
    title: "Advertisers",
    points: [
      "Create and fund campaigns with granular targets",
      "Monitor campaign ROI and engagement analytics",
      "Pause, complete, and export campaign reports",
    ],
  },
  {
    title: "Earners",
    points: [
      "Complete verified tasks and submit proof",
      "Track wallet balances, referrals, and withdrawals",
      "Level up with streaks, badges, and challenges",
    ],
  },
];

const modules = [
  "Authentication + 2FA + OAuth",
  "Task marketplace + proof verification",
  "Wallet, transactions, and withdrawal engine",
  "Referral system (L1/L2/L3)",
  "Fraud detection + smart flags",
  "Admin CMS + drag-and-drop content blocks",
  "Platform analytics + advertiser reports",
  "Gateway integrations (Paystack, Flutterwave, Stripe)",
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 md:gap-10 lg:px-8">
      <section className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10">
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[var(--primary)]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-[var(--secondary)]/20 blur-3xl" />
        <div className="relative flex flex-col gap-5 md:max-w-3xl">
          <span className="inline-flex w-fit rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[var(--primary)]">
            Villaverse Earning
          </span>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Modern Digital Engagement Marketplace for Africa and the World
          </h1>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            A startup-ready SaaS foundation for campaign management, verified task earning,
            automated rewards, withdrawals, analytics, fraud controls, and full Admin CMS.
          </p>
          <div className="grid gap-3 pt-2 text-sm sm:grid-cols-3">
            <div className="rounded-2xl bg-[var(--surface-solid)]/80 p-4">
              <p className="text-[var(--muted)]">Primary</p>
              <p className="font-semibold text-[var(--primary)]">#4F46E5</p>
            </div>
            <div className="rounded-2xl bg-[var(--surface-solid)]/80 p-4">
              <p className="text-[var(--muted)]">Secondary</p>
              <p className="font-semibold text-[var(--secondary)]">#10B981</p>
            </div>
            <div className="rounded-2xl bg-[var(--surface-solid)]/80 p-4">
              <p className="text-[var(--muted)]">Accent</p>
              <p className="font-semibold text-[var(--accent)]">#F59E0B</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {roles.map((role) => (
          <article key={role.title} className="glass rounded-2xl p-5">
            <h2 className="mb-3 text-xl font-semibold">{role.title}</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              {role.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="glass rounded-2xl p-5 sm:p-6">
        <h2 className="mb-4 text-2xl font-semibold">Core Platform Modules</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div key={module} className="rounded-xl bg-[var(--surface-solid)]/85 p-4 text-sm text-[var(--muted)]">
              {module}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
