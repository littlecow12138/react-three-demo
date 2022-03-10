import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./components/model";

const FBXJSX = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default FBXJSX;
