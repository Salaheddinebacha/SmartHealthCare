import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error à chaque tentative

    try {
      const response = await fetch(
        "http://localhost:8081/api/auth/authenticate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        // Tentative de récupération du message d'erreur
        let errorMsg = "Identifiants invalides";
        try {
          const errorData = await response.json();
          errorMsg = errorData.message || errorMsg;
        } catch {
          // si pas JSON, garder le message par défaut
        }
        setError(errorMsg);
        return;
      }

      // Si connexion réussie
      const data = await response.json();

      // Stocker le token dans localStorage
      localStorage.setItem("token", data.token);

      // Optionnel : déclencher un événement custom pour informer l’app
      window.dispatchEvent(new Event("authChange"));

      // Rediriger vers la page d’accueil ou tableau de bord
      navigate("/home");
    } catch (err) {
      setError("Erreur réseau ou serveur.");
      console.error("Erreur lors de la connexion:", err);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Connexion</h2>

        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />

        <label htmlFor="password" className="login-label">
          Mot de passe
        </label>
        <input
          type="password"
          id="password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

        <button type="submit" className="login-button">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
