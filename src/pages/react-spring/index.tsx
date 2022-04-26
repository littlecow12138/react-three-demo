import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import RotateBox from "./rotateBox";

const ReactSpringPage = () => {
  return (
    <Canvas camera={{ position: [-10, 10, 10], fov: 35 }}>
      <Suspense fallback={null}>
        <ambientLight />
        <directionalLight />
        <RotateBox />
      </Suspense>
    </Canvas>
  );
};

export default ReactSpringPage;
