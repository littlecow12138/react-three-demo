import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ProgressComp from "./components/progress";

const LoaderPage = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ProgressComp />
      </Suspense>
    </Canvas>
  );
};

export default LoaderPage;
