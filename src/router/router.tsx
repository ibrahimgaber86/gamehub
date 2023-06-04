import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.page";
import GameList from "../components/GameList";
import GamePage from "../pages/Game.page";
import ErrorElement from "../components/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <GameList />,
      },
      { path: "games/:id", element: <GamePage /> },
    ],
  },
]);

export default router;
