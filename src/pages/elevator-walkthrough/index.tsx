import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import BlockBaked from "./block";
import Level1 from "./level1";
import Level2 from "./level2";

const ElevatorScene = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [10, 3, 10] }}>
        <axesHelper />
        <OrbitControls />
        <color attach="background" args={[0xd0cbff]} />
        <group dispose={null} position={[0, 0, 0]}>
          <Level1 />
          <Level2 />
          <BlockBaked />
        </group>
        <group></group>
        {/* <group dispose={null} position={[0, 3, -3]} scale={0.05}>
          <Level2 />
        </group> */}
      </Canvas>
    </Suspense>
  );
};

export default ElevatorScene;
