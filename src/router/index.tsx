import type { RouteObject } from "react-router-dom";
import Layout from "../layout";
import Demo from "../pages/demo";
import UserInteractions from "../pages/events-and-interactions/user-interaction";
import GLTFLoadingPage from "../pages/loading-models/gltf";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/demo",
        element: <Demo />,
      },
      {
        path: "/event-and-interactions",
        children: [
          {
            path: "/event-and-interactions/user-interactions",
            element: <UserInteractions />
          }
        ]
      },
      {
        path: "/loading-models",
        children: [
          {
            path: "/loading-models/gltf",
            element: <GLTFLoadingPage />
          }
        ]
      },
    ],
  },
];

export default routes;
