import { Canvas } from "@react-three/fiber";
import GLTFModel from "./components/model";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const GLTFLoadingPage = () => {
  return (
    <Canvas>
      <Suspense fallback={<div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.8)",
                }}
              >
                loading
              </div>}>
        <GLTFModel />
        <OrbitControls />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  );
};

export default GLTFLoadingPage;
