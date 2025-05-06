import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/Images/logo10.svg";
import { BiMenu } from "react-icons/bi";
import imageUtilisateur from "../../assets/Images/avatar-icon.png";

const liensNavigation = [
  {
    path: "/home",
    display: "Accueil",
  },
  {
    path: "/doctors",
    display: "Trouver un médecin",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const refEnTete = useRef(null);
  const refMenu = useRef(null);

  const gererEnteteFixe = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        refEnTete.current.classList.add("sticky_header");
      } else {
        refEnTete.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    gererEnteteFixe();
    return () => window.removeEventListener("scroll", gererEnteteFixe);
  });

  const basculerMenu = () => refMenu.current.classList.toggle("show_menu");

  return (
    <header className="header flex items-center" ref={refEnTete}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/* Menu de navigation */}
          <div className="navigation" ref={refMenu} onClick={basculerMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {liensNavigation.map((lien, index) => (
                <li key={index}>
                  <NavLink
                    to={lien.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {lien.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Partie droite de la navigation */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src={imageUtilisateur}
                    className="w-full rounded-full"
                    alt="Utilisateur"
                  />
                </figure>
              </Link>
            </div>
            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Connexion
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                S'inscrire
              </button>
            </Link>
            <span className="md:hidden" onClick={basculerMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
