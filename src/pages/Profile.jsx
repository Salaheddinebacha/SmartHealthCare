import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"; // Ton fichier CSS pour le style

const Profile = () => {
  const [userData, setUserData] = useState(null); // Pour stocker les données utilisateur
  const [error, setError] = useState(""); // Pour gérer les erreurs
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // Si pas de token, redirige vers login
      return;
    }

    // Faire la requête API pour récupérer les données de l'utilisateur
    fetch("http://localhost:8081/api/user/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Ajouter le token dans l'en-tête de la requête
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data); // Mettre à jour l'état avec les données utilisateur
      })
      .catch((err) => {
        setError("Impossible de récupérer les informations de l'utilisateur.");
        console.error("Erreur : ", err);
      });
  }, [navigate]);

  // Si des erreurs se produisent, afficher un message d'erreur
  if (error) {
    return <p>{error}</p>;
  }

  // Si les données sont en cours de récupération, afficher un message de chargement
  if (!userData) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="profile-wrapper">
      <p id="titre">Profil de {userData.nom}</p>
      <div className="profile-details">
        <p>
          <strong>Nom complet:</strong> {userData.nom}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Username:</strong> {userData.username}
        </p>
        <p>
          <strong>Date de naissance:</strong>{" "}
          {userData.dateNaissance ? userData.dateNaissance : "Non spécifié"}
        </p>
        <p>
          <strong>Âge:</strong> {userData.age ? userData.age : "Non spécifié"}
        </p>
        <p>
          <strong>Téléphone:</strong>{" "}
          {userData.tel ? userData.tel : "Non spécifié"}
        </p>
        <p>
          <strong>Sexe:</strong>{" "}
          {userData.sexe ? userData.sexe : "Non spécifié"}
        </p>
        <p>
          <strong>Type de compte:</strong> {userData.role}
        </p>

        {/* Affichage conditionnel de la spécialité si l'utilisateur est un professionnel */}
        {userData.role === "ROLE_PROFESSIONNEL" && (
          <p>
            <strong>Spécialité:</strong> {userData.specialite || "Non spécifié"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
