import { useGLTF, useTexture } from "@react-three/drei";
import Dog from "./dog";

const Level1 = (props: any) => {
  const bakedTexture = useTexture("/baked1.jpg");
  const { nodes } = useGLTF("/baked1.glb");
  // console.log(nodes);
  
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={(nodes.white013 as any).geometry}
        position={(nodes.white013 as any).position}
        rotation={(nodes.white013 as any).rotation}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <Dog />
    </group>
  );
};

export default Level1;
