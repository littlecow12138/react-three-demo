import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./components/model";

const GLTFJSX = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  );
};

export default GLTFJSX;
