import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router/Routes";
import { RouterProvider } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext";
import { FetchDataContextProvider } from "./context/FetchData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <FetchDataContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </FetchDataContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
