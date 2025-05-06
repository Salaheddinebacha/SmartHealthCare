import { useState } from "react";

const creneauxDisponibles = [
  "08:00",
  "08:45",
  "09:30",
  "10:15",
  "11:00",
  "11:45",
  "14:00",
  "14:45",
  "15:30",
  "16:15",
  "17:00",
];
const creneauxIndisponibles = ["09:30", "14:45"];

export default function FormulaireRendezVous() {
  const [formData, setFormData] = useState({
    dateRdv: "",
    description: "",
    horaire: "",
  });
  const [soumis, setSoumis] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const champsVides = Object.entries(formData).filter(
      ([key, val]) => val === "" || val === null
    );
    if (champsVides.length > 0) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setSoumis(true);
    console.log(formData);
  };

  const estIndisponible = (heure) => creneauxIndisponibles.includes(heure);

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
        Prise de rendez-vous
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Date du rendez-vous */}
        <div>
          <label className="block font-medium mb-1">
            Sélectionnez la date du rendez-vous :
          </label>
          <input
            required
            name="dateRdv"
            type="date"
            value={formData.dateRdv}
            onChange={handleChange}
            className="w-full input"
          />
        </div>

        {/* Description du problème */}
        <div>
          <label className="block font-medium mb-1">
            Décrivez votre problème :
          </label>
          <textarea
            required
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Décrivez votre problème..."
            className="w-full input"
          />
        </div>

        {/* Créneaux horaires */}
        <div>
          <label className="block font-medium mb-1">
            Sélectionnez un créneau horaire :
          </label>
          <div className="grid grid-cols-3 gap-2">
            {creneauxDisponibles.map((heure) => (
              <button
                key={heure}
                type="button"
                onClick={() => {
                  if (!estIndisponible(heure)) {
                    setFormData({ ...formData, horaire: heure });
                  }
                }}
                className={`p-2 rounded text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105
                  ${
                    estIndisponible(heure)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-purple-500 hover:bg-green-600"
                  }`}
                disabled={estIndisponible(heure)}
              >
                {heure}
              </button>
            ))}
          </div>
          {formData.horaire && (
            <p className="mt-2 text-sm text-green-600">
              Créneau sélectionné : {formData.horaire}
            </p>
          )}
        </div>

        {/* Bouton d'envoi */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Envoyer
        </button>
      </form>

      {/* Message de succès après soumission */}
      {soumis && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          <p>Merci ! Votre demande de rendez-vous a été envoyée avec succès.</p>
        </div>
      )}
    </div>
  );
}
