import { createContext, useState, useEffect } from "react";
import { textTranslate } from "../utils/apis.js";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translatedText, setTranslations] = useState({});

   useEffect(() => {
    const loadTranslation = async () => {
      try {
        const data = await textTranslate();
        setTranslations(data); 
      } catch (err) {
        console.error(err);
      }
    };
    loadTranslation();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translatedText }}>
      {children}
    </LanguageContext.Provider>
  );
};
