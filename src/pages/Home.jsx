import React from "react";
import { Link } from "react-router-dom";

// Images
import heroImg01 from "../assets/Images/hero-img01.png";
import heroImg02 from "../assets/Images/hero-img02.png";
import heroImg03 from "../assets/Images/hero-img03.png";
import icon01 from "../assets/Images/icon01.png";
import icon02 from "../assets/Images/icon02.png";
import icon03 from "../assets/Images/icon03.png";
import featureImg from "../assets/Images/feature-img.png";
import faqImg from "../assets/Images/faq-img.png";

// Icône
import { BsArrowRight } from "react-icons/bs";

// Composants internes
import About from "../Components/About/About";
import ServiceList from "../Components/Services/ServiceList";
import Faqlist from "../Components/FAQ/Faqlist";
import Testimonial from "../Components/Testimonial/Testimonial";
import ChatWidget from "../Components/ChatBot/ChatWidget";

const Home = () => {
  return (
    <>
      {/* Section Héros */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex lg:flex-row gap-[90px] justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[600] md:text-[60px] md:leading-[70px]">
                  Nous vous aiderons à comprendre et résoudre le problème.
                </h1>
                <p className="text_para">
                  Chez <strong>SmartHealthCare</strong>, nous vous aidons à
                  comprendre vos préoccupations médicales et à trouver
                  rapidement des solutions fiables.
                </p>
                <button className="btn mt-6">
                  <Link to="/appointment">Demander un rendez-vous</Link>
                </button>
              </div>

              {/* Compteurs */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                {[
                  {
                    label: "Pays couverts",
                    value: "80+",
                    color: "bg-yellowColor",
                  },
                  {
                    label: "Clients satisfaits",
                    value: "892+",
                    color: "bg-purpleColor",
                  },
                  {
                    label: "Consultants experts",
                    value: "60+",
                    color: "bg-cyan-400",
                  },
                  {
                    label: "Prix remportés",
                    value: "367+",
                    color: "bg-fuchsia-500",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <h2 className="text-[36px] lg:text-[44px] font-[700] text-headingColor">
                      {item.value}
                    </h2>
                    <span
                      className={`w-[100px] h-2 ${item.color} rounded-full block mt-[-14px]`}
                    ></span>
                    <p className="text_para">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Images Héros */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="hero1" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="hero2" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="hero3" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services rapides */}
      <section className="py-[60px]">
        <div className="container">
          <div className="lg:w-[470px] mx-auto text-center">
            <h2 className="heading">
              Nous offrons les meilleurs services médicaux
            </h2>
            <p className="text_para">
              Des soins de classe mondiale pour tous. Notre système de santé
              offre des soins experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[55px]">
            {[
              {
                icon: icon01,
                title: "Trouver un médecin",
                text: "Accédez à un large réseau de médecins certifiés selon votre spécialité et région.",
              },
              {
                icon: icon02,
                title: "Accéder au chatbot médical",
                text: "Obtenez des réponses instantanées grâce à notre assistant intelligent, 24h/24.",
              },
              {
                icon: icon03,
                title: "Prendre un rendez-vous",
                text: "Choisissez un professionnel selon sa spécialité et disponibilité.",
              },
            ].map((card, index) => (
              <div
                className="py-[30px] px-5 border rounded-lg shadow-sm"
                key={index}
              >
                <div className="flex items-center justify-center">
                  <img src={card.icon} alt={card.title} />
                </div>
                <div className="mt-[30px] text-center">
                  <h2 className="text-[26px] text-headingColor font-[700]">
                    {card.title}
                  </h2>
                  <p className="text-[16px] mt-4">{card.text}</p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <About />

      {/* Nos Services */}
      <section className="py-[60px]">
        <div className="container">
          <div className="xl:w-[470px] mx-auto text-center">
            <h2 className="heading">Nos services médicaux</h2>
            <p className="text_para">
              Une plateforme de mise en relation avec les meilleurs praticiens
              selon chaque besoin médical spécifique.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-[60px]">
        <div className="container">
          <div className="flex items-center flex-col lg:flex-row justify-between">
            <div className="xl:w-[670px] mb-10 lg:mb-0">
              <h2 className="heading mb-4">Accédez aux soins sans attendre</h2>
              <ul className="list-disc pl-6 space-y-2 text_para">
                <li>
                  Rendez-vous en ligne avec des médecins, infirmiers ou coachs
                  certifiés.
                </li>
                <li>Recherche rapide par spécialité ou région.</li>
                <li>Accès instantané aux informations via le chatbot.</li>
              </ul>
            </div>
            <div>
              <img
                src={featureImg}
                alt="feature"
                className="w-full max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-[60px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2">
              <img src={faqImg} alt="faq" className="w-full" />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="heading mb-6">Questions fréquentes</h2>
              <Faqlist />
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-[60px]">
        <div className="container">
          <h2 className="heading text-center mb-10">
            Ce que disent nos patients
          </h2>
          <Testimonial />
        </div>
      </section>

      {/* ChatBot */}
      <ChatWidget />
    </>
  );
};

export default Home;
