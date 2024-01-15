import React, { useEffect } from "react";
import global_ar from "./ar/global.json";
import global_en from "./en/global.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { I18nextProvider } from "react-i18next";
import { api } from "../utils/api";

i18n
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        global: global_en,
      },
      ar: {
        global: global_ar,
      },
    },
  });
export default function TranslationProvider({ children }) {
  useEffect(() => {
    document.dir = i18n.language === "en" ? "ltr" : "rtl";
    document.lang = i18n.language;
    // api.defaults.headers.common["Accept-Language"] =
    // i18n.language === "en" ? "American" : "Arabic";
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
