import React from "react";
import "../styles/Terms.css";
import { useState, useEffect, useContext } from "react";
import { termsText } from "../utils/apis.js";
import { LanguageContext } from "../components/LangContext.jsx";

const Terms = () => {
  const { language } = useContext(LanguageContext);
  const [terms, setTerms] = useState({});

  useEffect(() => {
    const getTermsText = async () => {
      const data = await termsText();
      setTerms(data);
    };
    getTermsText();
  }, []);
  return (
    <div className="content">
      <div className="terms-page">
        <div className="background-container">
          <img
            src="https://storage.123fakturera.se/public/wallpapers/sverige43.jpg"
            alt="bg-image"
            id="background-image"
          />
        </div>
        <h1 className="terms-title">{terms[language]?.title || "Terms"}</h1>
        <button
          className="close-btn"
          style={{ marginBottom: "2em" }}
          onClick={() => {
            if (window.history.length > 1) {
              window.history.back();
            } else {
              window.close();
            }
          }}
        >
          {terms[language]?.gobackbtn || "Close and Go Back"}
        </button>

        <div className="terms-div">
          <p>
            {terms[language]?.terms || "Passage"}
          </p>
        </div>

        <button
          className="lower-close-btn close-btn"
          onClick={() => {
            if (window.history.length > 1) {
              window.history.back();
            } else {
              window.close();
            }
          }}
        >
          {terms[language]?.gobackbtn || "Close and Go Back"}
        </button>
      </div>
    </div>
  );
};

export default Terms;
