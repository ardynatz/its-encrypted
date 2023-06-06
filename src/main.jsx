import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import EncryptApp from "./pages/Encrypt.jsx";
import DecryptApp from "./pages/Decrypt.jsx";
import NotFound from "./pages/404.Jsx";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/encrypt",
    element: <EncryptApp />,
  },
  {
    path: "/decrypt",
    element: <DecryptApp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </RouterProvider>
  </React.StrictMode>
);
