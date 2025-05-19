import { useState, useEffect } from "react";
import DoctorsCard from "./DoctorsCard";
import { useNavigate } from "react-router-dom"; // Import pour la redirection

const DoctorsList = () => {
  const [data, setData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null au départ pour éviter l'affichage prématuré
  const navigate = useNavigate(); // Hook pour la navigation

  // Fonction pour vérifier si l'utilisateur est authentifié
  const checkAuthentication = () => {
    const token = localStorage.getItem("token"); // Vérifie si le token est dans le localStorage
    setIsAuthenticated(!!token); // Si le token existe, l'utilisateur est authentifié
  };

  // Vérifie l'authentification et charge les médecins
  useEffect(() => {
    checkAuthentication(); // Vérifie l'authentification au moment où le composant est monté

    // Si l'utilisateur n'est pas authentifié, redirige vers la page de connexion
    if (isAuthenticated === false) {
      navigate("/login");
    }

    if (isAuthenticated) {
      fetchData(); // Si l'utilisateur est authentifié, charger les médecins
    }
  }, [isAuthenticated, navigate]);

  // Fonction pour récupérer les données des médecins
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8080/doctors", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Assurer l'envoi du token
        },
      });

      if (!res.ok) {
        throw new Error("Impossible de récupérer les médecins");
      }

      const json = await res.json();
      setData(json); // Mettre à jour l'état avec les données des médecins
    } catch (error) {
      console.log(error); // Afficher l'erreur si la récupération des données échoue
    }
  };

  // Attendre la vérification de l'authentification avant de rendre la page
  if (isAuthenticated === null) {
    return <div>Chargement...</div>; // Si on attend encore le résultat de l'authentification
  }

  return (
    <div>
      {isAuthenticated ? (
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {data.map((doctor) => (
            <DoctorsCard key={doctor.id} {...doctor} />
          ))}
        </div>
      ) : (
        <p>Vous devez être connecté pour accéder à la liste des médecins.</p>
      )}
    </div>
  );
};

export default DoctorsList;
