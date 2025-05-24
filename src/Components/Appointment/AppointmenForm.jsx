import { useState } from "react";
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

// IDs à remplacer dynamiquement dans ta vraie app
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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation basique
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
        // Essayer de parser la réponse en JSON
        try {
          const errorData = await response.json();
          // Prendre le message ou la réponse brute
          errMsg = errorData?.message || JSON.stringify(errorData) || errMsg;
        } catch {
          // Si JSON non parseable, essayer de récupérer le texte brut
          try {
            errMsg = (await response.text()) || errMsg;
          } catch {}
        }
        throw new Error(errMsg);
      }

      setSoumis(true);
      setTimeout(() => {
<<<<<<< HEAD
        navigate("/payment"); // redirige vers la page de paiement
=======
        navigate("/payment");
>>>>>>> ff423dfeb12f51c4368044be86d95edf2015a33b
      }, 1500);
    } catch (error) {
      alert(
        "Erreur lors de l'enregistrement du rendez-vous : " + error.message
      );
      console.error("Erreur réservation rdv:", error);
    }
  };

  // Date minimale = demain (format ISO)
  const todayPlusOne = new Date();
  todayPlusOne.setDate(todayPlusOne.getDate() + 1);
  const minDate = todayPlusOne.toISOString().split("T")[0];

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
        Prise de rendez-vous
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Date */}
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
        {/* Description */}
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
        {/* Horaire */}
        <div>
          <label className="block font-medium mb-1">
            Choisissez un créneau horaire :
          </label>
          <div className="grid grid-cols-3 gap-2">
            {allCreneaux.map((heure) => (
              <button
                type="button"
                key={heure}
                onClick={() => setFormData({ ...formData, horaire: heure })}
                className={`p-2 rounded text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105
                  ${
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
        {/* Submit */}
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
