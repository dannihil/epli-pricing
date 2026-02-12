import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    is: {
      translation: {
        selectMacBook: "Veldu MacBook",
        macBookAir: "MacBook Air",
        macBookPro: "MacBook Pro",
        upgrade: "Uppítaka",
        specs: "Tæknilýsingar",
      },
    },
    en: {
      translation: {
        selectMacBook: "Select a MacBook",
        macBookAir: "MacBook Air",
        macBookPro: "MacBook Pro",
        upgrade: "Trade-in",
        specs: "Specifications",
      },
    },
  },
  lng: "is", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
