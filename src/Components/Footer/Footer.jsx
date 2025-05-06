import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo10.svg";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.github.com/sanjaybaro",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
];

const quicklinks01 = [
  {
    path: "/home",
    display: "Accueil",
  },
  {
    path: "/",
    display: "À propos",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quicklinks02 = [
  {
    path: "/find-a-doctor",
    display: "Trouver un médecin",
  },
  {
    path: "/",
    display: "Prendre un rendez-vous",
  },
  {
    path: "/",
    display: "Obtenir un avis médical",
  },
];

const quicklinks03 = [
  {
    path: "/contact",
    display: "Nous contacter",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          {/* ===== Logo et réseaux ===== */}
          <div>
            <img src={logo} alt="Logo" />
            <p className="text-[16px] leading-7 font-[400] text-textColour mt-4">
              Copyright © {year} Tous droits sont réservés.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* ===== Liens rapides ===== */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Liens rapides
            </h2>
            <ul>
              {quicklinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Section objectifs ===== */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Je souhaite :
            </h2>
            <ul>
              {quicklinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Support ===== */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quicklinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
