import React from "react";
import type { Route } from "../types/portfolio";

function getRoute(): Route {
  const h = window.location.hash || "#/";
  if (h.startsWith("#/cv")) return "cv";
  if (h.startsWith("#/career")) return "career";
  return "home";
}

export function useHashRoute() {
  const [route, setRoute] = React.useState<Route>(getRoute());

  React.useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

export function navigateTo(hash: "#/" | "#/cv" | "#/career") {
  if (window.location.hash === hash) return;
  window.location.hash = hash;
}
