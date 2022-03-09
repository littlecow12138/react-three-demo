import { Canvas } from "@react-three/fiber";
import GLTFModel from "./components/model";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const GLTFLoadingPage = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <GLTFModel />
        <OrbitControls />
        {/* <Environment preset="sunset" background /> */}
      </Suspense>
    </Canvas>
  );
};

export default GLTFLoadingPage;
