import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // debug: true,
    lng: "en",
    fallbackLng: "en",
    resources: {
      en: {
        translation: {},
      },
      tr: {
        translation: {},
      },
    },
    // detection: {
    // Optional language detection settings
    // order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    // caches: ['localStorage', 'cookie'],
    // },
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });
