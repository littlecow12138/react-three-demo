import type { RouteObject } from "react-router-dom";
import Layout from "../layout";
import Demo from "../pages/demo";
import UserInteractions from "../pages/events-and-interactions/user-interaction";
import GLTFLoadingPage from "../pages/loading-models/gltf";
import GLTFJSX from "../pages/loading-models/gltf-jsx";
import ObjLoaderPage from "../pages/loading-models/obj";

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
          },
          {
            path: "/loading-models/gltf-jsx",
            element: <GLTFJSX />
          },
          {
            path: "/loading-models/obj",
            element: <ObjLoaderPage />
          }
        ]
      },
    ],
  },
];

export default routes;
