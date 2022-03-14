import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Model = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  // const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
  //   useTexture([
  //     "PavingStones092_1K_Color.jpg",
  //     "PavingStones092_1K_Displacement.jpg",
  //     "PavingStones092_1K_Normal.jpg",
  //     "PavingStones092_1K_Roughness.jpg",
  //     "PavingStones092_1K_AmbientOcclusion.jpg",
  //   ]);
  const props = useTexture({
    map: "PavingStones092_1K_Color.jpg",
    displacementMap: "PavingStones092_1K_Displacement.jpg",
    normalMap: "PavingStones092_1K_Normal.jpg",
    roughnessMap: "PavingStones092_1K_Roughness.jpg",
    aoMap: "PavingStones092_1K_AmbientOcclusion.jpg",
  });

  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1, 100, 100]} />
      {/* <meshStandardMaterial
        displacementScale={0.2}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      /> */}
      <meshStandardMaterial displacementScale={0.2} {...props} />
    </mesh>
  );
};

export default Model;
