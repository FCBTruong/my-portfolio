import React from "react";
import type { Language, Translations } from "../lib/i18n";
import { t } from "../lib/i18n";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  tr: Translations;
};

export const LanguageContext = React.createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  tr: t("en"),
});

export function useLanguage() {
  return React.useContext(LanguageContext);
}
