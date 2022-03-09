import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GLTFModel = () => {
  const gltf = useLoader(GLTFLoader, "static/models/scene.gltf");
  console.log(gltf);

  return <>{/* <primitive object={gltf.scene} scale={0.4} /> */}</>;
};

export default GLTFModel;
