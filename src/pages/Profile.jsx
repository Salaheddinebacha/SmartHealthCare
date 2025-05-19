import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"; // Ton fichier CSS pour le style

const Profile = () => {
  const [userData, setUserData] = useState({
    nom: "",
    email: "",
    tel: "",
    password: "", // Il est possible de laisser l'utilisateur changer son mot de passe
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Charger les données de l'utilisateur authentifié
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Si le token n'est pas présent, redirige vers login
      return;
    }

    // Récupérer les données de l'utilisateur depuis l'API
    fetch("http://localhost:8081/api/user/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data); // Remplir le state avec les données récupérées
      })
      .catch((err) => {
        setError("Impossible de récupérer les informations de l'utilisateur.");
      });
  }, [navigate]);

  // Fonction pour gérer la soumission du formulaire de modification
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    // Vérifie si le token existe
    if (!token) {
      navigate("/login");
      return;
    }

    // Préparer les données à envoyer au backend
    const updatedData = {
      nom: userData.nom,
      email: userData.email,
      tel: userData.tel,
      password: userData.password, // Si tu veux aussi modifier le mot de passe
    };

    try {
      const response = await fetch("http://localhost:8081/api/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        const errorRes = await response.json();
        setError(errorRes.message || "Erreur lors de la mise à jour.");
        return;
      }

      // Affiche une confirmation ou redirige l'utilisateur vers une autre page
      alert("Profil mis à jour avec succès!");
      navigate("/profile");
    } catch (err) {
      setError("Erreur serveur, veuillez réessayer.");
      console.error("Erreur lors de la mise à jour:", err);
    }
  };

  return (
    <div className="profile-wrapper">
      <h2>Modifier le profil</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label className="profile-label">Nom</label>
        <input
          type="text"
          name="nom"
          value={userData.nom}
          onChange={(e) => setUserData({ ...userData, nom: e.target.value })}
          required
        />

        <label className="profile-label">Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          required
        />

        <label className="profile-label">Téléphone</label>
        <input
          type="tel"
          name="tel"
          value={userData.tel}
          onChange={(e) => setUserData({ ...userData, tel: e.target.value })}
          required
        />

        <label className="profile-label">Mot de passe</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          placeholder="Laissez vide si vous ne voulez pas changer le mot de passe"
        />

        <button type="submit">Sauvegarder les modifications</button>
      </form>
    </div>
  );
};

export default Profile;
