import {
  HomeOutlined,
  PlayCircleOutlined,
  HighlightOutlined,
  UploadOutlined,
  CarOutlined
} from "@ant-design/icons";
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
    icon: <PlayCircleOutlined />,
  },
  {
    key: "event-and-interactions/user-interactions",
    name: "User Interactions(交互)",
    link: "/event-and-interactions/user-interactions",
    icon: <HighlightOutlined />,
  },
  {
    key: "loading-models",
    name: "Model Loaders(模型加载器)",
    link: "/loading-models",
    icon: <UploadOutlined />,
    children: [
      {
        key: "loading-models/gltf",
        name: "GLTF Loader",
        link: "/loading-models/gltf",
        icon: <CarOutlined />,
      },
      {
        key: "loading-models/gltf-jsx",
        name: "GLTF JSX Loader",
        link: "/loading-models/gltf-jsx",
        icon: <CarOutlined />,
      },
      {
        key: "loading-models/obj",
        name: "OBJ Loader",
        link: "/loading-models/obj",
        icon: <CarOutlined />,
      },
      {
        key: "loading-models/fbx",
        name: "FBX Loader",
        link: "/loading-models/fbx",
        icon: <CarOutlined />,
      },
      {
        key: "loading-models/fbx-jsx",
        name: "FBX JSX Loader",
        link: "/loading-models/fbx",
        icon: <CarOutlined />,
      },
      {
        key: "loading-models/loader",
        name: "Loader Progress",
        link: "/loading-models/loader",
        icon: <CarOutlined />,
      },
    ],
  },
];
