import { useFBX } from "@react-three/drei"

const Model = () => {
  const fbx = useFBX("/Poimandres.fbx")
  return <primitive object={fbx} scale={0.01} />
}

export default Model