import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Curve007_1: THREE.Mesh;
    Curve007_2: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

const Model = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/scene.gltf") as GLTFResult;  

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007_2.geometry}
        material={materials["Material.002"]}
      />
    </group>
  );
};

useGLTF.preload("/scene.gltf");

export default Model;
