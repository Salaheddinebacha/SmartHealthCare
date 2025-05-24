import React from "react";
import { Link } from "react-router-dom"; // Assurez-vous d'importer Link
import { BsArrowRight } from "react-icons/bs";

const DoctorsCard = ({
  name,
  speciality,
  avgRating,
  totalRating,
  image,
  totalPatients,
  hospital,
}) => {
  return (
    <div className="p-3 lg:p-5">
      {/* Affichage de l'image du médecin */}
      <div>
        <img
          src={image || "https://via.placeholder.com/150"} // Remplacer par une image par défaut si aucune image n'est fournie
          className="w-full"
          alt={name}
        />
      </div>

      {/* Nom du médecin */}
      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
        {name}
      </h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        {/* Affichage de la spécialité */}
        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
          {speciality || "Non spécifié"}{" "}
          {/* Affiche 'Non spécifié' si aucune spécialité */}
        </span>

        <div className="flex items-center gap-[6px]">
          {/* Affichage de la note moyenne */}
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png"
              alt="Rating"
              width="16"
              height="16"
            />{" "}
            {avgRating || "N/A"}
          </span>
          {/* Affichage du nombre de votes */}
          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            ({totalRating || "0"})
          </span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          {/* Affichage du nombre de patients */}
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
            +{totalPatients || "0"} patients
          </h3>
          {/* Affichage de l'hôpital */}
          <p className="text-[14px] leading-6 font-[400]xtext-textColor">
            À {hospital || "Hôpital non spécifié"}
          </p>
        </div>

        {/* Lien vers la page de prise de rendez-vous */}
        <Link
          to="/appointment"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorsCard;
