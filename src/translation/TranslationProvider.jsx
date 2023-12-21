import React from "react";
import global_ar from "./ar/global.json";
import global_en from "./en/global.json";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";

i18n.init({
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
  lng: "ar",
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
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
