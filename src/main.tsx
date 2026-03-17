import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import "@/index.css";

const storedPath = sessionStorage.getItem("portfolio-spa-path");

if (storedPath) {
  window.history.replaceState(null, "", storedPath);
  sessionStorage.removeItem("portfolio-spa-path");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
