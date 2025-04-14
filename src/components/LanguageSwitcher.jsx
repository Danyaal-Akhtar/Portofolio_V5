import React from "react";
import i18n from "../i18n";

const LanguageSwitcher = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("fr")}>Français</button>
      <button onClick={() => changeLanguage("en")}>English</button>
    </div>
  );
};

export default LanguageSwitcher;
