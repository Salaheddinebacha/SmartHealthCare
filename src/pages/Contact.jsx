import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    file: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.subject || !formData.message) {
      alert("Veuillez remplir tous les champs requis.");
      return;
    }

    // TODO: send form data to backend API
    setSubmitted(true);
    alert("Votre message a été envoyé au support.");
    setFormData({ subject: "", message: "", file: null });
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
            >
              <option value="">-- Sélectionner un sujet --</option>
              <option value="bug">Problème technique</option>
              <option value="billing">Problème de paiement</option>
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
              Message envoyé avec succès !
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
