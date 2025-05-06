import React, { useState } from "react";
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
    file: null,
    userType: "", // patient ou professionnel
    speciality: "", // spécialité si professionnel
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      setFormData({ ...formData, file });
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData);
    // Envoi des données au backend
    setIsSubmitting(false);
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
        />
        <label className="register-label">Nom complet</label>
        <input
          type="text"
          name="fullName"
          required
          placeholder="Ex: Bacha Salaheddine"
          onChange={handleChange}
          className="register-input"
        />
        <label className="register-label">Date de naissance</label>
        <input
          type="date"
          name="birthDate"
          required
          onChange={handleChange}
          className="register-input"
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
        />
        <label className="register-label">Téléphone</label>
        <input
          type="tel"
          name="phone"
          required
          placeholder="Ex: +212 612345678"
          onChange={handleChange}
          className="register-input"
        />
        <label className="register-label">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="Ex: exemple@domaine.com"
          onChange={handleChange}
          className="register-input"
        />
        <label className="register-label">Mot de passe</label>
        <input
          type="password"
          name="password"
          required
          placeholder="Choisissez un mot de passe sécurisé"
          onChange={handleChange}
          className="register-input"
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
            />
            <span>Homme</span>
          </label>
          <label className="gender-option">
            <input
              type="radio"
              name="gender"
              value="femme"
              onChange={handleChange}
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
                />
              </>
            )}
          </>
        )}

        <label className="register-label">Photo de profil</label>
        <div className="file-upload-wrapper">
          <label htmlFor="file-upload" className="custom-file-upload">
            Choisir une image
          </label>
          <input
            id="file-upload"
            type="file"
            name="file"
            accept="image/*"
            required
            onChange={handleChange}
          />
        </div>

        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Aperçu" />
          </div>
        )}

        <button
          type="submit"
          className="register-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi..." : "S'inscrire"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
