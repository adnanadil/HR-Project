import React from "react";
import ReactDOM from "react-dom/client";
// Import from react router
import { RouterProvider } from "react-router-dom";
// Local Imports
import "./index.css";
import { router } from "./routes.jsx";
import ThemeProvider from "./theme";
import { HelmetProvider } from "react-helmet-async";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// -----------------------------------------------

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </LocalizationProvider>
    </HelmetProvider>
  </React.StrictMode>
);
