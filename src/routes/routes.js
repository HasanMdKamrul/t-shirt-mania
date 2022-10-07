import { createBrowserRouter } from "react-router-dom";
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
      },
      {
        path:'/home',
        element: <Home />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
]);

export default router;
