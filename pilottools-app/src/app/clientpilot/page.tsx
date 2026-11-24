
"use client";

import { useState } from "react";

const contacts = [
  { name: "Sophie Martin", company: "Studio Design", email: "sophie@studio.com", status: "Client", lastContact: "Aujourd'hui" },
  { name: "Thomas Bernard", company: "Tech Solutions", email: "thomas@techsolutions.com", status: "Prospect", lastContact: "Hier" },
  { name: "Marie Laurent", company: "ML Consulting", email: "marie@mlconsulting.com", status: "Client", lastContact: "12 nov." },
  { name: "Alexandre Petit", company: "AP Services", email: "alexandre@apservices.com", status: "À relancer", lastContact: "8 nov." },
];

export default function ClientPilotPage() {
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    `${contact.name} ${contact.company} ${contact.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="mb-2 text-sm text-blue-600 font-medium">
              PilotTools / Mes outils
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              ClientPilot
            </h1>
            <p className="mt-2 text-gray-500">
              Gérez vos contacts, prospects et relations clients.
            </p>
          </div>

          <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700">
            + Ajouter un contact
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total contacts</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">124</h2>
            <p className="mt-2 text-sm text-green-600">+12 ce mois</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Prospects</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">38</h2>
            <p className="mt-2 text-sm text-blue-600">À convertir</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Relances à effectuer</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">7</h2>
            <p className="mt-2 text-sm text-orange-600">Actions nécessaires</p>
          </div>
        </div>

        {/* Contacts */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Mes contacts
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Retrouvez et gérez vos relations professionnelles.
                </p>
              </div>

              <input
                type="text"
                placeholder="Rechercher un contact..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 md:w-72"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-sm text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Contact</th>
                  <th className="px-6 py-4 font-medium">Entreprise</th>
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">Statut</th>
                  <th className="px-6 py-4 font-medium">Dernier contact</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredContacts.map((contact, index) => (
                  <tr key={index} className="transition hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">
                        {contact.name}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {contact.company}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {contact.email}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          contact.status === "Client"
                            ? "bg-green-100 text-green-700"
                            : contact.status === "Prospect"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {contact.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-gray-500">
                      {contact.lastContact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredContacts.length === 0 && (
              <div className="p-12 text-center text-gray-500">
                Aucun contact trouvé.
              </div>
            )}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-gray-900">📅 Prochaines relances</h3>
            <p className="mt-2 text-sm text-gray-500">
              Retrouvez ici les contacts à relancer prochainement.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-gray-900">📊 Activité récente</h3>
            <p className="mt-2 text-sm text-gray-500">
              Suivez les dernières interactions avec vos contacts.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          ClientPilot · PilotTools
        </div>
      </div>
    </main>
  );
}
