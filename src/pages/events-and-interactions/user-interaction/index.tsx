import { Canvas } from "@react-three/fiber";
import MeshComp from "./components/mesh";

const UserInteractionPage = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MeshComp />
    </Canvas>
  );
};

export default UserInteractionPage;
