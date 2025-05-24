import { useState, useEffect } from "react";
import DoctorsCard from "./DoctorsCard";

const DoctorsList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  // Liste statique d'hôpitaux marocains
  const hospitals = [
    "Hôpital Cheikh Zaid, Rabat",
    "Hôpital Avicenne, Rabat",
    "Hôpital Ibn Sina, Rabat",
    "Centre Hospitalier Universitaire Hassan II, Fès",
    "Hôpital Moulay Youssef, Casablanca",
    "Hôpital Ibn Rochd, Casablanca",
    "Centre Hospitalier Universitaire Mohammed VI, Marrakech",
    "Hôpital Provincial, Agadir",
    "Centre Hospitalier Régional, Tanger",
  ];

  // Générer un rating aléatoire entre 4.00 et 5.00
  const getRandomRating = () => {
    return (Math.random() * (5 - 4) + 4).toFixed(2);
  };

  // Générer un nombre aléatoire entier entre min et max inclus
  const getRandomPatients = (min = 400, max = 2000) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Générer un nombre aléatoire entier entre min et max inclus
  const getRandomRatPatients = (min = 100, max = 390) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Récupération des médecins
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
        throw new Error("Erreur lors de la récupération des médecins");
      }

      const json = await res.json();
      setData(json);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {data.map((doctor, index) => (
            <DoctorsCard
              key={doctor.id}
              name={doctor.nom}
              speciality={doctor.specialite || "Non spécifié"}
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
