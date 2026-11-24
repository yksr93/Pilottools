
"use client";

import { useState } from "react";

type Section = "Dashboard" | "Mes outils" | "Abonnement" | "Paramètres";

type Tool = {
  name: string;
  description: string;
  icon: string;
  status: string;
};

const tools: Tool[] = [
  {
    name: "ClientPilot",
    description: "Gérez vos contacts, prospects, clients et suivis.",
    icon: "👥",
    status: "En développement",
  },
  {
    name: "FreelancePilot",
    description: "Projets, revenus, dépenses et factures.",
    icon: "💼",
    status: "En développement",
  },
  {
    name: "ContentPilot",
    description: "Planifiez et organisez vos contenus.",
    icon: "📅",
    status: "En développement",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] =
    useState<Section>("Dashboard");

  const [selectedTool, setSelectedTool] =
    useState<Tool | null>(null);

  const menuItems: { name: Section; icon: string }[] = [
    { name: "Dashboard", icon: "▦" },
    { name: "Mes outils", icon: "🧩" },
    { name: "Abonnement", icon: "💳" },
    { name: "Paramètres", icon: "⚙️" },
  ];

  function navigate(section: Section) {
    setActiveSection(section);
    setSelectedTool(null);
  }

  function openTool(tool: Tool) {
    setActiveSection("Mes outils");
    setSelectedTool(tool);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 flex-col border-r border-gray-200 bg-white md:flex">
          <div className="border-b border-gray-100 p-6">
            <div className="text-2xl font-bold text-gray-900">
              Pilot<span className="text-blue-600">Tools</span>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              One platform. Multiple tools.
            </p>
          </div>

          <nav className="flex-1 p-4">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Navigation
            </p>

            {menuItems.map((item) => {
              const isActive =
                activeSection === item.name && !selectedTool;

              return (
                <button
                  key={item.name}
                  onClick={() => navigate(item.name)}
                  className={`mb-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
                </button>
              );
            })}
          </nav>

          <div className="border-t border-gray-100 p-4">
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm font-semibold text-gray-800">
                PilotTools
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Votre espace professionnel
              </p>
            </div>
          </div>
        </aside>

        {/* Main area */}
        <div className="flex-1">
          {/* Header */}
          <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 md:px-8">
            <div>
              <p className="text-sm text-gray-500">
                PilotTools / {selectedTool?.name || activeSection}
              </p>
              <h1 className="mt-1 text-lg font-semibold text-gray-900">
                {selectedTool?.name || activeSection}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold text-gray-800">
                  Mon espace
                </p>
                <p className="text-xs text-gray-500">
                  Administrateur
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                P
              </div>
            </div>
          </header>

          {/* Dashboard */}
          {activeSection === "Dashboard" && (
            <div className="p-6 md:p-8">
              <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 p-8 text-white shadow-lg">
                <p className="mb-2 text-sm font-medium text-blue-100">
                  Bienvenue sur PilotTools
                </p>

                <h2 className="mb-3 text-3xl font-bold">
                  Votre espace de travail
                </h2>

                <p className="max-w-2xl text-blue-100">
                  Une plateforme, plusieurs outils.
                  Organisez votre activité et développez
                  votre business depuis un seul endroit.
                </p>

                <button
                  onClick={() => navigate("Mes outils")}
                  className="mt-6 rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
                >
                  Découvrir mes outils →
                </button>
              </div>

              {/* Stats */}
              <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-gray-500">
                    Outil existant
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    1
                  </p>
                  <p className="mt-1 text-sm text-green-600">
                    StockPilot
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-gray-500">
                    Nouveaux modules
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    3
                  </p>
                  <p className="mt-1 text-sm text-blue-600">
                    PilotTools
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-gray-500">
                    Votre espace
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    Personnel
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Configuration initiale
                  </p>
                </div>
              </div>

              {/* Tools */}
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Vos outils
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Découvrez les modules PilotTools.
                  </p>
                </div>

                <button
                  onClick={() => navigate("Mes outils")}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Voir tous →
                </button>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                        {tool.icon}
                      </div>

                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                        {tool.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900">
                      {tool.name}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      {tool.description}
                    </p>

                    <button
                      onClick={() => openTool(tool)}
                      className="mt-5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Voir le module →
                    </button>
                  </div>
                ))}
              </div>

              {/* StockPilot */}
              <div className="mt-8 rounded-2xl bg-gray-900 p-6 text-white">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h2 className="text-xl font-bold">
                      📦 StockPilot
                    </h2>
                    <p className="mt-2 text-sm text-gray-300">
                      Votre solution de gestion de stock.
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      alert(
                        "StockPilot sera connecté à PilotTools dans une prochaine étape."
                      )
                    }
                    className="rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500"
                  >
                    Accéder à StockPilot →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Mes outils */}
          {activeSection === "Mes outils" && (
            <div className="p-6 md:p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Mes outils
                </h2>
                <p className="mt-2 text-gray-500">
                  Tous vos outils professionnels réunis.
                </p>
              </div>

              {selectedTool && (
                <div className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-blue-600">
                        Module sélectionné
                      </p>

                      <h3 className="mt-1 text-xl font-bold text-gray-900">
                        {selectedTool.icon} {selectedTool.name}
                      </h3>

                      <p className="mt-2 text-sm text-gray-600">
                        {selectedTool.description}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedTool(null)}
                      className="rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
                    >
                      Fermer
                    </button>
                  </div>

                  <div className="mt-4 rounded-xl bg-white p-4">
                    <p className="font-semibold text-gray-800">
                      Ce module est actuellement en préparation.
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Ses fonctionnalités seront développées
                      progressivement.
                    </p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                        {tool.icon}
                      </div>

                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
                        En préparation
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-gray-900">
                      {tool.name}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      {tool.description}
                    </p>

                    <button
                      onClick={() => openTool(tool)}
                      className="mt-5 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      Ouvrir →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Abonnement */}
          {activeSection === "Abonnement" && (
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Abonnement
              </h2>

              <p className="mt-2 text-gray-500">
                Gérez votre abonnement PilotTools.
              </p>

              <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  Offre de lancement
                </span>

                <h3 className="mt-4 text-2xl font-bold text-gray-900">
                  PilotTools
                </h3>

                <p className="mt-3 text-gray-500">
                  Votre espace est actuellement en mode développement.
                </p>

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <p className="text-sm text-gray-500">
                    Abonnement
                  </p>
                  <p className="mt-1 font-semibold text-gray-900">
                    Aucun abonnement actif
                  </p>
                </div>

                <button
                  disabled
                  className="mt-6 cursor-not-allowed rounded-xl bg-gray-100 px-5 py-3 font-semibold text-gray-400"
                >
                  Les offres seront bientôt disponibles
                </button>
              </div>
            </div>
          )}

          {/* Paramètres */}
          {activeSection === "Paramètres" && (
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Paramètres
              </h2>

              <p className="mt-2 text-gray-500">
                Personnalisez votre espace PilotTools.
              </p>

              <div className="mt-8 space-y-5">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900">
                    Profil
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Les paramètres du profil seront disponibles prochainement.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900">
                    Organisation
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Gestion des organisations et des espaces de travail.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900">
                    Personnalisation
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Logo, couleurs et configuration White Label
                    seront intégrés ultérieurement.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <footer className="mt-10 border-t border-gray-200 px-6 py-6 text-center text-sm text-gray-400 md:px-8">
            PilotTools © 2026 — One platform. Multiple tools.
            One subscription.
          </footer>
        </div>
      </div>
    </main>
  );
}
