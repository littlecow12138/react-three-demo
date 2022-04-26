import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/three";

const RotateBox = () => {
  const myMesh = useRef();
  const [active, setActive] = useState<any>(0);

  // const springs = useSpring({ scale: active ? 1.5 : 1 });

  const styles = useSpring(
    {
      opacity: active ? 1 : 0,
      // config: config.wobbly,
    },
    [active]
  );

  // useFrame(({ clock }) => {
  //   const a = clock.getElapsedTime();
  //   (myMesh.current as any).rotation.x = a;
  // });

  return (
    <animated.mesh
      {...styles}
      onClick={() => {
        setActive(!active);
        console.log("Click!");
      }}
      ref={myMesh}
    >
      <boxGeometry />
      <meshPhongMaterial color={"royalblue"} />
    </animated.mesh>
  );
};

export default RotateBox;
