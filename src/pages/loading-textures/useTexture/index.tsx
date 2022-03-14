import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./components/model";

const TextureJSX = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[20, 10, 0]} />
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default TextureJSX;
