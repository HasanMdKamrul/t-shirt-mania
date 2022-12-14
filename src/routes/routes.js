import { createBrowserRouter } from "react-router-dom";
import Grandpa from "../components/Grandpa/Grandpa";
import Home from "../components/Home/Home";
import Orders from "../components/Orders/Orders";
import Main from "../layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch(`tshirts.json`),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch(`tshirts.json`),
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/grandpa",
        element:<Grandpa/>
      },
    ],
  },
]);

export default router;
