import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AppThemeProvider from "./theme/AppThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>
);
