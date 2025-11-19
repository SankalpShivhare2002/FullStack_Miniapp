import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../components/LangContext.jsx";

const Hamburger = ({ onClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { language, setLanguage, translatedText } = useContext(LanguageContext);
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
    <div
      className="hamburger"
      style={{ cursor: "pointer" }}
      onClick={handleDropdown}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        width="1.5em"
        height="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
      </svg>

      <div
        className="menu-drop-down"
        style={{ height: dropdownOpen ? "325px" : "0px" }}
      >
        {dropdownOpen && (
          <div className="menu-drop-down-container">
            <a className="menu-dd-item" href="#!">
              <span className="collection-span">
                <p className="menu-name">
                  {translatedText[language]?.home || "Home"}
                </p>
              </span>
            </a>
            <a className="menu-dd-item" href="#!">
              <span className="collection-span">
                <p className="menu-name">
                  {translatedText[language]?.order || "Order"}
                </p>
              </span>
            </a>
            <a className="menu-dd-item" href="#!">
              <span className="collection-span">
                <p className="menu-name">
                  {translatedText[language]?.ourcustmr || "Our Customer"}
                </p>
              </span>
            </a>
            <a className="menu-dd-item" href="#!">
              <span className="collection-span">
                <p className="menu-name">
                  {translatedText[language]?.about || "About Us"}
                </p>
              </span>
            </a>
            <a className="menu-dd-item" href="#!">
              <span className="collection-span">
                <p className="menu-name">
                  {translatedText[language]?.contact || "Contact Us"}
                </p>
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hamburger;
