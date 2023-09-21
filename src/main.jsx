import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router/Routes";
import { RouterProvider } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
