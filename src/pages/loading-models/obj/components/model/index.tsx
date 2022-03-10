import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Model = () => {
  const obj = useLoader(OBJLoader, '/Poimandres.obj')
  return <primitive object={obj} scale={0.4} />;
};

export default Model;
