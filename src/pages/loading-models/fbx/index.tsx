import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Model from "./components/model"

const FBXLoaderPage = () => {
  return <Canvas>
    <Suspense fallback={null}>
      <Model />
      <OrbitControls />
    </Suspense>
  </Canvas>
}

export default FBXLoaderPage