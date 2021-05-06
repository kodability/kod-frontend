import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en";
import ko from "./ko";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: {
      order: ["querystring", "navigator"],
      lookupQuerystring: "lang",
      caches: [],
    },
    fallbackLng: {
      default: ["en", "ko"],
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
      ko: {
        translation: ko,
      },
    },
  });

export default i18n;
