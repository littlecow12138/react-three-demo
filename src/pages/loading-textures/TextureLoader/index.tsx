import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { TextureLoader } from "three";

const Scene = () => {
  const colorMap = useLoader(TextureLoader, "/PavingStones092_1K_Color.jpg");
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh position={[-2, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
};

const TexturesScene = () => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      "PavingStones092_1K_Color.jpg",
      "PavingStones092_1K_Displacement.jpg",
      "PavingStones092_1K_Normal.jpg",
      "PavingStones092_1K_Roughness.jpg",
      "PavingStones092_1K_AmbientOcclusion.jpg",
    ]
  );

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh position={[2, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          displacementScale={0.2}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
      </mesh>
    </>
  );
};

const TextureLoaderPage = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Scene />
        <TexturesScene />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default TextureLoaderPage;
