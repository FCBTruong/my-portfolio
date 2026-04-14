import React from "react";
import { ClickRipples } from "./components/ClickRipples";
import { CareerPage } from "./pages/CareerPage";
import { CvPage } from "./pages/CvPage";
import { HomePage } from "./pages/HomePage";
import { useHashRoute } from "./lib/navigation";
import { getInitialTheme } from "./lib/theme";
import { styles } from "./styles/appStyles";
import type { Theme } from "./types/portfolio";

export default function App() {
  const route = useHashRoute();
  const [theme, setTheme] = React.useState<Theme>(() => getInitialTheme());

  const toggleTheme = React.useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <style>{styles}</style>
      <ClickRipples />
      {route === "cv" ? (
        <CvPage theme={theme} onToggleTheme={toggleTheme} />
      ) : route === "career" ? (
        <CareerPage theme={theme} onToggleTheme={toggleTheme} />
      ) : (
        <HomePage theme={theme} onToggleTheme={toggleTheme} />
      )}
    </>
  );
}
