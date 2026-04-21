import React from "react";
import { ClickRipples } from "./components/ClickRipples";
import { ChatBot } from "./components/ChatBot";
import { CareerPage } from "./pages/CareerPage";
import { CvPage } from "./pages/CvPage";
import { HomePage } from "./pages/HomePage";
import { useHashRoute } from "./lib/navigation";
import { getInitialTheme } from "./lib/theme";
import { getInitialLanguage, t } from "./lib/i18n";
import { LanguageContext } from "./contexts/LanguageContext";
import { styles } from "./styles/appStyles";
import type { Theme } from "./types/portfolio";
import type { Language } from "./lib/i18n";

export default function App() {
  const route = useHashRoute();
  const [theme, setTheme] = React.useState<Theme>(() => getInitialTheme());
  const [lang, setLangState] = React.useState<Language>(() => getInitialLanguage());

  const toggleTheme = React.useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const setLang = React.useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("language", newLang);
  }, []);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const langCtx = React.useMemo(() => ({ lang, setLang, tr: t(lang) }), [lang, setLang]);

  return (
    <LanguageContext.Provider value={langCtx}>
      <style>{styles}</style>
      <ClickRipples />
      <ChatBot />
      {route === "cv" ? (
        <CvPage theme={theme} onToggleTheme={toggleTheme} />
      ) : route === "career" ? (
        <CareerPage theme={theme} onToggleTheme={toggleTheme} />
      ) : (
        <HomePage theme={theme} onToggleTheme={toggleTheme} />
      )}
    </LanguageContext.Provider>
  );
}
