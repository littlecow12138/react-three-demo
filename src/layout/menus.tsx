import { HomeOutlined } from "@ant-design/icons";
export const MENU_LIST = [
  {
    key: "index",
    name: "主页",
    link: "/",
    icon: <HomeOutlined />,
  },
  {
    key: "demo",
    name: "示例",
    link: "/demo",
    icon: <HomeOutlined />,
  },
  {
    key: "event-and-interactions/user-interactions",
    name: "User Interactions",
    link: "/event-and-interactions/user-interactions",
    icon: <HomeOutlined />,
  },
  {
    key: "loading-models",
    name: "Model Loaders",
    link: "/loading-models",
    icon: <HomeOutlined />,
    children: [
      {
        key: "loading-models/gltf",
        name: "GLTF Loader",
        link: "/loading-models/gltf",
        icon: <HomeOutlined />,
      },
      {
        key: "loading-models/gltf-jsx",
        name: "GLTF JSX Loader",
        link: "/loading-models/gltf-jsx",
        icon: <HomeOutlined />,
      },
      {
        key: "loading-models/obj",
        name: "OBJ Loader",
        link: "/loading-models/obj",
        icon: <HomeOutlined />,
      }
    ],
  },
];
