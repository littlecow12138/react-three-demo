import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const Model = () => {
  const fbx = useLoader(FBXLoader, "/Poimandres.fbx");

  return <primitive object={fbx} scale={0.01} />;
};

export default Model;
