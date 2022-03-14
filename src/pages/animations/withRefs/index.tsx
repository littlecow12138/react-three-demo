import { Canvas } from "@react-three/fiber";
import MyAnimatedBox from "./components/box";

const AnimationWithRef = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight />
      <MyAnimatedBox />
    </Canvas>
  );
};

export default AnimationWithRef;
