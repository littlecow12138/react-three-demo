import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import Tint from "./Tint";
import Controls from "./Controls";
import Level from "./Level";
import Sudo from "./Sudo";
import Camera from "./Camera";
import Cactus from "./Cactus";

const FirstLevel = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        flat
        dpr={[1, 2]}
        camera={{ fov: 25, position: [5, 1, 5] }}
        style={{ touchAction: "none" }}
      >
        <color attach="background" args={[0xd0cbff]} />
        {/* <Tint /> */}
        <Controls />
        <group dispose={null} position-y={-0.75}>
          {/* 场景模型 */}
          <Level />
          {/* 场景中右下角的动物模型 */}
          <Sudo />
          {/* 场景中的摄像机模型 */}
          <Camera />
          {/* 场景中晃动的仙人掌模型 */}
          <Cactus />
        </group>
      </Canvas>
    </Suspense>
  );
};
export default FirstLevel;
