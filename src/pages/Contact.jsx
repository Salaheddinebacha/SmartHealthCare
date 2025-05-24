import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Vérifier l'authentification à l'accès de la page
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // redirige vers connexion si pas authentifié
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!formData.subject || !formData.message) {
      setError("Veuillez remplir tous les champs requis.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8081/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message");
      }

      setSubmitted(true);
      setFormData({ subject: "", message: "" });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-6">
        <h1 className="text-3xl font-bold text-black-800 text-center mb-4">
          Nous Contacter
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Besoin d’aide ? Envoyez-nous un message et notre équipe vous répondra
          rapidement.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Sujet *</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">-- Sélectionner un sujet --</option>
              <option value="Problème technique">Problème technique</option>
              <option value="Problème de paiement">Problème de paiement</option>
              <option value="suggestion">Suggestion</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message *</label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Décrivez votre problème ici..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Envoyer
          </button>

          {submitted && (
            <p className="text-green-600 text-center mt-4">
              Votre message est envoyé ! Notre support vous répondra bientôt.
            </p>
          )}

          {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
