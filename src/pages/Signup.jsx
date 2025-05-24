import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
    birthDate: "",
    age: "",
    phone: "",
    gender: "",
    userType: "", // patient ou professionnel
    speciality: "",
    specialityOther: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Pour la redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Préparer l'objet avec TOUTES les données nécessaires au backend
    const userData = {
      nom: formData.fullName,
      email: formData.email,
      password: formData.password,
      typeCompte: formData.userType,
      username: formData.username,
      dateNaissance: formData.birthDate,
      age: parseInt(formData.age, 10) || 0,
      tel: formData.phone,
      sexe: formData.gender,
      specialite:
        formData.userType === "professionnel"
          ? formData.speciality === "Autre"
            ? formData.specialityOther
            : formData.speciality
          : null,
    };

    console.log("Données envoyées au backend:", userData);

    try {
      const response = await fetch("http://localhost:8081/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorRes = await response.json();
        setError(errorRes.message || "Erreur lors de l’inscription.");
        setIsSubmitting(false);
        return;
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);

      // Redirection vers la page de connexion après inscription réussie
      navigate("/login");
    } catch (error) {
      setError("Erreur serveur, veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-wrapper">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1 className="register-title">
          <strong>Créer un compte</strong>
        </h1>

        <label className="register-label">Nom d'utilisateur</label>
        <input
          type="text"
          name="username"
          required
          placeholder="Ex: BahadNaouar123"
          onChange={handleChange}
          className="register-input"
          value={formData.username}
        />

        <label className="register-label">Nom complet</label>
        <input
          type="text"
          name="fullName"
          required
          placeholder="Ex: Bacha Salaheddine"
          onChange={handleChange}
          className="register-input"
          value={formData.fullName}
        />

        <label className="register-label">Date de naissance</label>
        <input
          type="date"
          name="birthDate"
          required
          onChange={handleChange}
          className="register-input"
          value={formData.birthDate}
        />

        <label className="register-label">Âge</label>
        <input
          type="number"
          name="age"
          required
          placeholder="Ex: 30"
          min="0"
          onChange={handleChange}
          className="register-input"
          value={formData.age}
        />

        <label className="register-label">Téléphone</label>
        <input
          type="tel"
          name="phone"
          required
          placeholder="Ex: +212 612345678"
          onChange={handleChange}
          className="register-input"
          value={formData.phone}
        />

        <label className="register-label">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="Ex: exemple@domaine.com"
          onChange={handleChange}
          className="register-input"
          value={formData.email}
        />

        <label className="register-label">Mot de passe</label>
        <input
          type="password"
          name="password"
          required
          placeholder="Choisissez un mot de passe sécurisé"
          onChange={handleChange}
          className="register-input"
          value={formData.password}
        />

        <label className="register-label">Genre</label>
        <div className="register-gender-options">
          <label className="gender-option">
            <input
              type="radio"
              name="gender"
              value="homme"
              required
              onChange={handleChange}
              checked={formData.gender === "homme"}
            />
            <span>Homme</span>
          </label>
          <label className="gender-option">
            <input
              type="radio"
              name="gender"
              value="femme"
              onChange={handleChange}
              checked={formData.gender === "femme"}
            />
            <span>Femme</span>
          </label>
        </div>

        <label className="register-label">Type d'utilisateur</label>
        <select
          name="userType"
          required
          onChange={handleChange}
          className="register-input"
          value={formData.userType}
        >
          <option value="">-- Sélectionnez --</option>
          <option value="patient">Patient</option>
          <option value="professionnel">Professionnel de santé</option>
        </select>

        {formData.userType === "professionnel" && (
          <>
            <label className="register-label">Spécialité</label>
            <select
              name="speciality"
              required
              onChange={handleChange}
              className="register-input"
              value={formData.speciality}
            >
              <option value="">-- Sélectionnez une spécialité --</option>
              <option value="Cardiologue">Cardiologue</option>
              <option value="Dentiste">Dentiste</option>
              <option value="Dermatologue">Dermatologue</option>
              <option value="Médecin généraliste">Médecin généraliste</option>
              <option value="Gynécologue">Gynécologue</option>
              <option value="Ophtalmologue">Ophtalmologue</option>
              <option value="Pédiatre">Pédiatre</option>
              <option value="Radiologue">Radiologue</option>
              <option value="Neurologue">Neurologue</option>
              <option value="Orthopédiste">Orthopédiste</option>
              <option value="Chirurgien">Chirurgien</option>
              <option value="Anesthésiste">Anesthésiste</option>
              <option value="Psychiatre">Psychiatre</option>
              <option value="Infectiologue">Infectiologue</option>
              <option value="Médecin du travail">Médecin du travail</option>
              <option value="Autre">Autre</option>
            </select>
            {formData.speciality === "Autre" && (
              <>
                <label className="register-label">
                  Veuillez entrer votre spécialité
                </label>
                <input
                  type="text"
                  name="specialityOther"
                  placeholder="Ta Spécialité"
                  onChange={handleChange}
                  className="register-input"
                  value={formData.specialityOther}
                />
              </>
            )}
          </>
        )}

        <button
          type="submit"
          className="register-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi..." : "S'inscrire"}
        </button>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
