import React from "react";
import "../styles/Navbar.css";
import Hamburger from "../components/Hamburger";
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../components/LangContext.jsx";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { language, setLanguage, translatedText } = useContext(LanguageContext);
  const languageData = {
    en: {
      label: "English",
      flag: "https://storage.123fakturere.no/public/flags/GB.png",
    },
    se: {
      label: "Svenska",
      flag: "https://storage.123fakturere.no/public/flags/SE.png",
    },
  };

  const handleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const clickOutside = () => setDropdownOpen(false);
    document.addEventListener("click", clickOutside);

    return () => document.removeEventListener("click", clickOutside);
  }, []);

  return (
    <nav className="nav-outer">
      <header className="nav-header">
        <section className="nav-section">
          <div className="logo">
            <a href="#">
              <img
                alt="logo"
                className="nav-logo"
                src="https://storage.123fakturera.se/public/icons/diamond.png"
              />
            </a>
          </div>
          <div className="hamburger-menu">
            <Hamburger />
          </div>

          <div className="nav-menu-bar">
            <div className="navbar-menu">
              <a className="navbar-menu-item" href="#!">
                <span className="collection-span">
                  <p className="menu-name">
                    {translatedText[language]?.home || "Home"}
                  </p>
                </span>
              </a>
              <a className="navbar-menu-item" href="#!">
                <span className="collection-span">
                  <p className="menu-name">
                    {translatedText[language]?.order || "Order"}
                  </p>
                </span>
              </a>
              <a className="navbar-menu-item" href="#!">
                <span className="collection-span">
                  <p className="menu-name">
                    {translatedText[language]?.ourcustmr || "Our Customer"}
                  </p>
                </span>
              </a>
              <a className="navbar-menu-item" href="#!">
                <span className="collection-span">
                  <p className="menu-name">
                    {translatedText[language]?.about || "About Us"}
                  </p>
                </span>
              </a>
              <a className="navbar-menu-item" href="#!">
                <span className="collection-span">
                  <p className="menu-name">
                    {translatedText[language]?.contact || "Contact Us"}
                  </p>
                </span>
              </a>
            </div>
            <div
              className="navbar-menu-item language-navbar-menu-item"
              href="#!"
              onClick={handleDropdown}
              style={{ cursor: "pointer" }}
            >
              <div className="language-title-box">
                <p className="language-name">
                  {languageData[language]?.label || "English"}
                </p>
                <img
                  src={
                    languageData[language]?.flag ||
                    "https://storage.123fakturere.no/public/flags/GB.png"
                  }
                  className="flag-icon drop-down-image"
                  alt={languageData[language]?.label || "English"}
                />
              </div>
            </div>

            <div className="lang-drop">
              <div className="lang-drop-container">
                {dropdownOpen && (
                  <div className="dropdownList">
                    <div
                      className="drop-down-element"
                      onClick={() => {
                        setLanguage("se");
                        setDropdownOpen(false);
                      }}
                    >
                      <div className="drop-down-lang-name">Svenska</div>
                      <div className="drop-down-image-div">
                        <img
                          src="https://storage.123fakturere.no/public/flags/SE.png"
                          className="drop-down-image"
                          alt="Svenska"
                        />
                      </div>
                    </div>
                    <div
                      className="drop-down-element"
                      onClick={() => {
                        setLanguage("en");
                        setDropdownOpen(false);
                      }}
                    >
                      <div className="drop-down-lang-name">English</div>
                      <div className="drop-down-image-div">
                        <img
                          src="https://storage.123fakturere.no/public/flags/GB.png"
                          className="drop-down-image"
                          alt="English"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </header>
    </nav>
  );
};

export default Navbar;
