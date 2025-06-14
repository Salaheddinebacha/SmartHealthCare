import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const allCreneaux = [
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

// Ici idéalement tu passes doctorId et patientId dynamiquement
const doctorId = 8;
const patientId = 1;

export default function FormulaireRendezVous() {
  const [formData, setFormData] = useState({
    dateRdv: "",
    description: "",
    horaire: "",
  });
  const [soumis, setSoumis] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const today = new Date();
    const selectedDate = new Date(formData.dateRdv + "T00:00:00");
    if (selectedDate <= today) {
      alert(
        "Veuillez sélectionner une date strictement supérieure à aujourd'hui."
      );
      return;
    }
    if (!formData.dateRdv || !formData.horaire || !formData.description) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8081/api/rdv/book?patientId=${patientId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            doctorId,
            date: formData.dateRdv,
            heure: formData.horaire,
            description: formData.description,
          }),
        }
      );

      if (!response.ok) {
        let errMsg = "Erreur inconnue du serveur.";
        try {
          const errorData = await response.json();
          errMsg = errorData?.message || JSON.stringify(errorData) || errMsg;
        } catch {
          try {
            errMsg = (await response.text()) || errMsg;
          } catch {}
        }
        throw new Error(errMsg);
      }

      setSoumis(true);
      setTimeout(() => {
        navigate("/payment"); // redirige vers la page paiement
      }, 1500);
    } catch (error) {
      alert(
        "Erreur lors de l'enregistrement du rendez-vous : " + error.message
      );
      console.error("Erreur réservation rdv:", error);
    }
  };

  const todayPlusOne = new Date();
  todayPlusOne.setDate(todayPlusOne.getDate() + 1);
  const minDate = todayPlusOne.toISOString().split("T")[0];

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
        Prise de rendez-vous
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">
            Sélectionnez la date :
          </label>
          <input
            required
            type="date"
            name="dateRdv"
            value={formData.dateRdv}
            onChange={handleChange}
            className="w-full input"
            min={minDate}
          />
        </div>
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
        <div>
          <label className="block font-medium mb-1">
            Choisissez un créneau horaire :
          </label>
          <div className="grid grid-cols-3 gap-2">
            {allCreneaux.map((heure) => (
              <button
                type="button"
                key={heure}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, horaire: heure }))
                }
                className={`p-2 rounded text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105 ${
                  formData.horaire === heure
                    ? "bg-green-600"
                    : "bg-purple-500 hover:bg-green-600"
                }`}
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
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Envoyer
        </button>
      </form>
      {soumis && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          <p>Merci ! Votre demande de rendez-vous a été envoyée avec succès.</p>
        </div>
      )}
    </div>
  );
}
