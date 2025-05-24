import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/logo10.svg";
import { BiMenu } from "react-icons/bi";

const liensNavigation = [
  { path: "/home", display: "Accueil" },
  { path: "/doctors", display: "Trouver un médecin" },
  { path: "/services", display: "Services" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Initialisation et écoute de l'événement custom
  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    checkAuth(); // Au montage

    window.addEventListener("authChange", checkAuth);

    return () => {
      window.removeEventListener("authChange", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/* Menu de navigation */}
          <div className="navigation">
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
            {isAuthenticated ? (
              <>
                <Link to="/profile">
                  <button
                    className="bg-primaryColor text-white font-[600] flex items-center justify-center rounded-[50px] px-6"
                    style={{ height: "44px" }}
                  >
                    Profil
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-gray-600 text-white font-[600] flex items-center justify-center rounded-[50px] px-6"
                  style={{ height: "44px" }}
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button
                    className="bg-primaryColor text-white font-[600] flex items-center justify-center rounded-[50px] px-6"
                    style={{ height: "44px" }}
                  >
                    Connexion
                  </button>
                </Link>
                <Link to="/signup">
                  <button
                    className="bg-primaryColor text-white font-[600] flex items-center justify-center rounded-[50px] px-6"
                    style={{ height: "44px" }}
                  >
                    S'inscrire
                  </button>
                </Link>
              </>
            )}
            <span className="md:hidden">
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
