import type { RouteObject } from "react-router-dom";
import Layout from "../layout";
import Demo from "../pages/demo";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/demo",
        element: <Demo />,
      },
    ],
  },
];

export default routes;
