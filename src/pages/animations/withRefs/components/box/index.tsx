import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const MyAnimatedBox = () => {
  const myMesh = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = Math.sin(clock.getElapsedTime());
  });

  return (
    <mesh ref={myMesh}>
      <boxGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
};

export default MyAnimatedBox;
