export default function Home() {
  const tools = [
    {
      name: "ClientPilot",
      description: "Gérez vos contacts, clients et opportunités.",
      icon: "👥",
      color: "bg-blue-100",
      status: "Bientôt disponible",
    },
    {
      name: "FreelancePilot",
      description: "Suivez vos projets, revenus et dépenses.",
      icon: "💰",
      color: "bg-emerald-100",
      status: "Bientôt disponible",
    },
    {
      name: "ContentPilot",
      description: "Planifiez et organisez votre contenu.",
      icon: "✍️",
      color: "bg-purple-100",
      status: "Bientôt disponible",
    },
    {
      name: "JobPilot",
      description: "Organisez votre recherche d'emploi.",
      icon: "💼",
      color: "bg-orange-100",
      status: "Bientôt disponible",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-gray-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 flex-col border-r border-gray-200 bg-white p-6 md:flex">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
              P
            </div>
            <div>
              <h1 className="text-xl font-bold">PilotTools</h1>
              <p className="text-xs text-gray-500">One platform. Multiple tools.</p>
            </div>
          </div>

          <nav className="space-y-2">
            <div className="rounded-xl bg-blue-50 px-4 py-3 font-medium text-blue-700">
              🏠 Tableau de bord
            </div>
            <div className="rounded-xl px-4 py-3 text-gray-600">
              🧰 Mes outils
            </div>
            <div className="rounded-xl px-4 py-3 text-gray-600">
              ⭐ Abonnement
            </div>
            <div className="rounded-xl px-4 py-3 text-gray-600">
              ⚙️ Paramètres
            </div>
          </nav>

          <div className="mt-auto rounded-2xl bg-gray-900 p-4 text-white">
            <p className="mb-2 text-sm font-semibold">PilotTools Premium</p>
            <p className="mb-3 text-xs text-gray-300">
              Accédez à tous vos outils depuis une seule plateforme.
            </p>
            <button className="w-full rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium">
              Découvrir
            </button>
          </div>
        </aside>

        {/* Main content */}
        <section className="flex-1 p-5 md:p-10">
          {/* Header */}
          <header className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-gray-500">Bienvenue sur PilotTools 👋</p>
              <h2 className="mt-1 text-3xl font-bold tracking-tight">
                Votre espace de travail
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm">
                🔔 Notifications
              </button>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                Y
              </div>
            </div>
          </header>

          {/* Welcome card */}
          <div className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-[#111827] to-[#2563eb] p-7 text-white md:p-10">
            <p className="mb-3 text-sm font-medium text-blue-200">
              L'écosystème PilotTools
            </p>
            <h3 className="max-w-2xl text-3xl font-bold md:text-4xl">
              Tous vos outils.
              <br />
              Un seul espace.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-200">
              Simplifiez votre travail, développez votre activité et gérez vos
              projets grâce à une collection d'outils conçus pour vous.
            </p>
            <button className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100">
              Explorer les outils →
            </button>
          </div>

          {/* Stats */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["🧰", "Outils disponibles", "1"],
              ["🚀", "Outils en développement", "4"],
              ["👤", "Compte", "Personnel"],
              ["💳", "Abonnement", "Gratuit"],
            ].map((stat) => (
              <div
                key={stat[1]}
                className="rounded-2xl border border-gray-200 bg-white p-5"
              >
                <div className="mb-3 text-2xl">{stat[0]}</div>
                <p className="text-sm text-gray-500">{stat[1]}</p>
                <p className="mt-1 text-xl font-bold">{stat[2]}</p>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Nos outils</h3>
              <p className="mt-1 text-sm text-gray-500">
                Choisissez l'outil adapté à vos besoins.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tool.color} text-2xl`}
                  >
                    {tool.icon}
                  </div>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                    {tool.status}
                  </span>
                </div>

                <h4 className="mt-5 text-xl font-bold">{tool.name}</h4>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {tool.description}
                </p>

                <button className="mt-5 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold transition hover:bg-gray-50">
                  En savoir plus →
                </button>
              </div>
            ))}
          </div>

          {/* StockPilot */}
          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <div className="mb-2 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Produit existant
                </div>
                <h3 className="text-xl font-bold">📦 StockPilot</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Notre outil de gestion des stocks, déjà disponible.
                </p>
              </div>
              <button className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                Découvrir StockPilot
              </button>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-10 border-t border-gray-200 py-6 text-center text-sm text-gray-400">
            PilotTools © 2026 — One platform. Multiple tools. One subscription.
          </footer>
        </section>
      </div>
    </main>
  );
}