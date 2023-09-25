import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CharacterDetail from "../components/CharacterDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    },
  {
    path: "/character-detail/:id",
    element: <CharacterDetail />,
  },
]);

export default router;
