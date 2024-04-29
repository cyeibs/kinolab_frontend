import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../../App";
import Main from "../../pages/Main/Main";
import MovieCardGrid from "../../pages/Main/components/MovieCardGrid/MovieCardGrid";
import ItemPage from "../../pages/ItemPage/ItemPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: async () => redirect("/movie"),
      },
      {
        path: "movie",
        element: <Main />,
        children: [
          {
            index: true,
            element: <MovieCardGrid />,
          },
          {
            path: ":genre",
            element: <MovieCardGrid />,
          },
        ],
      },
      {
        path: "tv",
        element: <Main />,
        children: [
          {
            index: true,
            element: <MovieCardGrid />,
          },
          {
            path: ":genre",
            element: <MovieCardGrid />,
          },
        ],
      },
      {
        path: "p/:movieid",
        element: <ItemPage />,
      },
    ],
  },
]);
