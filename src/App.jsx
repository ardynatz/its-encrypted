import Index from "./pages/Index";
import EncryptApp from "./pages/Encrypt";
import DecryptApp from "./pages/Decrypt";
import NotFound from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
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

  return <RouterProvider router={router} />;
}
