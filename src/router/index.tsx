import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Demo } from "../pages/Demo";
import { About } from "../pages/About";
import Quiz from "../pages/Quiz";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "demo",
        element: <Demo />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
