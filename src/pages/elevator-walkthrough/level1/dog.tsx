import { useGLTF } from "@react-three/drei";

const Dog = () => {
  const { nodes } = useGLTF("/sudo.glb");
  console.log(nodes);
  // const { nodes: headNodes } = useGLTF("/sudoHead.glb");
  const headNodes = useGLTF("/sudoHead.glb");
  console.log(headNodes);

  return (
    <>
      <primitive object={nodes.sudo} position={nodes.sudo001.position}>
        <meshBasicMaterial color={"#62236B"} />
      </primitive>
    </>
  );
};

export default Dog;
