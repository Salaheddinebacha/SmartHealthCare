import { useState, useEffect } from "react";
import DoctorsCard from "./DoctorsCard";

const DoctorsList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Images statiques
  const images = [
    "https://i.ibb.co/b6SDFTN/01.jpg",
    "https://i.ibb.co/ypmBR9k/08.jpg",
    "https://i.ibb.co/hsyxYVj/03.jpg",
    "https://i.ibb.co/gW26qY2/02.jpg",
    "https://i.ibb.co/hWD7NVx/05.jpg",
    "https://i.ibb.co/hYWtLy1/06.jpg",
    "https://i.ibb.co/dPtTnys/07.jpg",
    "https://i.ibb.co/ypmBR9k/08.jpg",
    "https://i.ibb.co/nj8qcCS/09.jpg",
  ];

  // Hôpitaux fictifs marocains
  const hospitals = [
    "Hôpital Cheikh Zaid, Rabat",
    "Hôpital Avicenne, Rabat",
    "Hôpital Ibn Sina, Rabat",
    "CHU Hassan II, Fès",
    "Hôpital Moulay Youssef, Casablanca",
    "Hôpital Ibn Rochd, Casablanca",
    "CHU Mohammed VI, Marrakech",
    "Hôpital Provincial, Agadir",
    "CH Régional, Tanger",
  ];

  // Génère un rating entre 4.00 et 5.00
  const getRandomRating = () => (Math.random() * (5 - 4) + 4).toFixed(2);

  // Patients total (400 à 2000)
  const getRandomPatients = (min = 400, max = 2000) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // Nombre de votes (100 à 390)
  const getRandomRatPatients = (min = 100, max = 390) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // Fonction d'appel API
  const fetchDoctors = async () => {
    try {
      const res = await fetch("http://localhost:8081/api/doctors", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!res.ok) {
        throw new Error("Échec de la récupération des médecins.");
      }

      const responseText = await res.text();

      try {
        const json = JSON.parse(responseText); // sécurité en cas de réponse mal formée
        setData(json);
      } catch (parseError) {
        throw new Error("Réponse JSON invalide.");
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="px-4">
      {isLoading ? (
        <p>Chargement...</p>
      ) : error ? (
        <p className="text-red-600 font-semibold">Erreur : {error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {data.map((doctor, index) => (
            <DoctorsCard
              key={doctor.id || index}
              name={doctor.nom || "Docteur inconnu"}
              speciality={doctor.specialite || "Non spécifiée"}
              avgRating={getRandomRating()}
              totalRating={getRandomRatPatients()}
              image={images[index % images.length]}
              totalPatients={getRandomPatients()}
              hospital={hospitals[index % hospitals.length]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorsList;
