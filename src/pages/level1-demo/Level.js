import { useSpring } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Level = () => {
  const { nodes } = useGLTF("/level.glb");
  const { camera } = useThree();
  console.log(nodes);

  // Intro camera animation
  useSpring({
    from: {
      y: camera.position.y + 5,
    },
    to: {
      y: camera.position.y,
    },
    delay: 300,
    config: {
      friction: 100,
    },
    onChange({ value }) {
      const { y } = value;
      camera.position.y = y;
      camera.lookAt(0, 0, 0);
    },
  });

  return <primitive object={nodes.Level} />
};

export default Level;
