import { useFrame } from "@react-three/fiber";

const MyAnimatedBox = () => {
  // useFrame(() => {
  //   console.log("Hey, i'm executing every frame!");
  // });
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    console.log(a); // 这个值将会在场景初始化时为0，并随着每一帧增加
  });
  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial color="royalblue" />
    </mesh>
  );
};

export default MyAnimatedBox;
