import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/erreurs/erreur-404";
import Home from "./pages/home";
import FicheLogement from "./pages/fiche-logement";
import APropos from "./pages/a-propos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", index: true, element: <Home /> },
      { path: "/logement/:id", element: <FicheLogement /> },
      { path: "/apropos", element: <APropos /> },
    ],
  },
]);
