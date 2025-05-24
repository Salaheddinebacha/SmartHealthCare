import React from "react";
import aboutImg from "../../assets/Images/about.png";
import aboutCardImg from "../../assets/Images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ===== Image de présentation ===== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img
              src={aboutImg}
              alt="À propos de nous"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img
                src={aboutCardImg}
                alt="Carte d'information"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>

          {/* ===== Contenu de la section ===== */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Fiers de faire la différence</h2>

            <p className="text_para text-gray-700 mb-4">
              Nous mettons un point d’honneur à offrir des soins médicaux de
              haute qualité, reposant sur l’expertise de nos praticiens et
              l’écoute attentive de chaque patient.
            </p>
            <p className="text_para text-gray-700 mb-6">
              Grâce à une équipe expérimentée et des outils technologiques
              modernes, nous garantissons une prise en charge personnalisée,
              sécurisée et respectueuse du bien-être de chacun. Chaque
              consultation est pensée pour répondre au mieux à vos besoins, en
              toute confiance.
            </p>
            <Link to="/">
              <button className="btn">En savoir plus</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
