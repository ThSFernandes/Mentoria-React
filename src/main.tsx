import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<p>Carregando...</p>}> 
      <App />
    </Suspense>
  </StrictMode>,
);
