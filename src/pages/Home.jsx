import React from "react";
import { Link } from "react-router-dom";
import heroImg01 from "../assets/Images/hero-img01.png";
import heroImg02 from "../assets/Images/hero-img02.png";
import heroImg03 from "../assets/Images/hero-img03.png";
import icon01 from "../assets/Images/icon01.png";
import icon02 from "../assets/Images/icon02.png";
import icon03 from "../assets/Images/icon03.png";
import { BsArrowRight } from "react-icons/bs";
import About from "../Components/About/About";
import ServiceList from "../Components/Services/ServiceList";
import featureImg from "../assets/Images/feature-img.png";
import videoIcon from "../assets/Images/video-icon.png";
import avatarIcon from "../assets/Images/avatar-icon.png";
import faqImg from "../assets/Images/faq-img.png";
import Faqlist from "../Components/FAQ/Faqlist";
import Testimonial from "../Components/Testimonial/Testimonial";
import ChatWidget from '../components/ChatBot/ChatWidget';

const Home = () => {
  return (
    <>
      {/* ------------section héros----------- */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex lg:flex-row gap-[90px] justify-between">
            {/* --------contenu de la section héros-------- */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[600] md:text-[60px] md:leading-[70px]">
                  Nous vous aiderons à comprendre et résoudre le problème.
                </h1>
                <p className="text_para">
                  Chez <strong>SmartHealthCare</strong>, nous vous aidons à
                  comprendre vos préoccupations médicales et à trouver
                  rapidement des solutions fiables. Grâce à notre interface
                  intuitive et à notre chatbot intelligent, vous obtenez des
                  réponses précises à vos questions de santé, sans délai. Fini
                  les longues attentes ou les recherches incertaines — votre
                  bien-être est à portée de clic.
                </p>
                <button className="btn">
                  <Link to="/appointment">Demander un rendez-vous</Link>
                </button>
              </div>

              {/* ----------Compteurs-------- */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    80+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Pays couverts</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    892+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clients satisfaits</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    60+
                  </h2>
                  <span className="w-[100px] h-2 bg-cyan-400 rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Consultants experts</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    367+
                  </h2>
                  <span className="w-[100px] h-2 bg-fuchsia-500 rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Prix remportés</p>
                </div>
              </div>
            </div>

            {/* --------images de la section héros-------- */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------section services rapides-------- */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Nous offrons les meilleurs services médicaux
            </h2>
            <p className="text_para text-center">
              Des soins de classe mondiale pour tous. Notre système de santé
              offre des soins de santé experts inégalés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {/* Carte 1 */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Trouver un médecin
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Accédez à un large réseau de médecins, infirmiers et coachs
                  certifiés selon votre spécialité recherchée et votre région.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            {/* Carte 2 */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Accéder au chatbot médical
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Obtenez des réponses instantanées à vos questions de santé
                  générales grâce à notre assistant intelligent, disponible
                  24h/24.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            {/* Carte 3 */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Prendre un rendez-vous
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Gagnez du temps . En quelques clics, choisissez un
                  professionnel de santé selon sa spécialité, sa disponibilité.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------section À propos--------- */}
      <About />

      {/* ---------section Services--------- */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Nos services médicaux</h2>
            <p className="text_para text-center">
              Des soins accessibles, spécialisés et centrés sur le patient.
              Notre plateforme vous met en relation avec les meilleurs
              praticiens pour chaque besoin médical spécifique.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* -----------section fonctionnalités---------- */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* --------contenu--------- */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Accédez aux soins sans <br />
                attendre.
              </h2>
              <ul className="pl-4">
                <li className="text_para">
                  1. Prendre rendez-vous en ligne en quelques clics avec des
                  médecins, infirmiers ou coachs certifiés.
                </li>
                <li className="text_para">
                  2. Trouver rapidement un professionnel de santé selon votre
                  spécialité ou région.
                </li>
                <li className="text_para">
                  3. Planifier votre consultation facilement, avec une vue en
                  temps réel des disponibilités des praticiens qui acceptent de
                  nouveaux patients.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">En savoir plus</button>
              </Link>
            </div>
            <div style={{ backgroundColor: 'white', height: '100vh' }}>
              <ChatWidget /> 
             </div>
            {/* --------image-------- */}
            <div className="relative z-0 xl:w-[660px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} alt="" />
              {/* Autres éléments superposés peuvent être ajoutés ici */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
