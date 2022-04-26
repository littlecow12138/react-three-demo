import { useGLTF, useTexture } from "@react-three/drei";

const BlockBaked = () => {
  // 楼梯和墙面
  const wallTexture = useTexture("/blockBaked.jpg");
  const { nodes: wallNodes } = useGLTF("/blockBaked.glb");
  // console.log(wallNodes);

  return (
    <group>
      <primitive object={wallNodes.block}>
        <meshBasicMaterial map={wallTexture} map-flipY={false} />
      </primitive>
      <primitive object={wallNodes.block001}>
        <meshBasicMaterial map={wallTexture} map-flipY={false} />
      </primitive>
    </group>
  );
};
export default BlockBaked;
