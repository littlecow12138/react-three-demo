import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const MeshComp = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [active, setActive] = useState<boolean>(false);
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  return (
    <mesh
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      ref={mesh}
    >
      <boxGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
};

export default MeshComp;
