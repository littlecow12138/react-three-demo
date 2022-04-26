import { useGLTF, useTexture } from "@react-three/drei";

const Level2 = (props: any) => {
  const bakedTexture = useTexture("/baked2.jpg");
  const { nodes } = useGLTF("/baked2.glb");
  // console.log(nodes);

  return (
    <group dispose={null}>
      <mesh
        // object={nodes.floorAndWalls002}
        geometry={(nodes.floorAndWalls002.children[0] as any).geometry}
        position={(nodes.floorAndWalls002 as any).position}
        rotation={(nodes.floorAndWalls002 as any).rotation}
        scale={(nodes.floorAndWalls002 as any).scale}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
    </group>
  );
};

export default Level2;
