import type { RouteObject } from "react-router-dom";
import Layout from "../layout";
import FrameJSX from "../pages/animations/useFrame";
import AnimationWithRef from "../pages/animations/withRefs";
import Demo from "../pages/demo";
import UserInteractions from "../pages/events-and-interactions/user-interaction";
import FBXLoaderPage from "../pages/loading-models/fbx";
import FBXJSX from "../pages/loading-models/fbx-jsx";
import GLTFLoadingPage from "../pages/loading-models/gltf";
import GLTFJSX from "../pages/loading-models/gltf-jsx";
import LoaderPage from "../pages/loading-models/loader";
import ObjLoaderPage from "../pages/loading-models/obj";
import TextureLoaderPage from "../pages/loading-textures/TextureLoader";
import TextureJSX from "../pages/loading-textures/useTexture";

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
            element: <UserInteractions />,
          },
        ],
      },
      {
        path: "/loading-models",
        children: [
          {
            path: "/loading-models/gltf",
            element: <GLTFLoadingPage />,
          },
          {
            path: "/loading-models/gltf-jsx",
            element: <GLTFJSX />,
          },
          {
            path: "/loading-models/obj",
            element: <ObjLoaderPage />,
          },
          {
            path: "/loading-models/fbx",
            element: <FBXLoaderPage />,
          },
          {
            path: "/loading-models/fbx-jsx",
            element: <FBXJSX />,
          },
          {
            path: "/loading-models/loader",
            element: <LoaderPage />,
          },
        ],
      },
      {
        path: "/loading-textures",
        children: [
          {
            path: "/loading-textures/texture-loader",
            element: <TextureLoaderPage />,
          },
          {
            path: "/loading-textures/texture-jsx",
            element: <TextureJSX />,
          },
        ],
      },
      {
        path: "/animations",
        children: [
          {
            path: "/animations/animation-jsx",
            element: <FrameJSX />,
          },
          {
            path: "/animations/animation-with-ref",
            element: <AnimationWithRef />,
          },
        ],
      },
    ],
  },
];

export default routes;
