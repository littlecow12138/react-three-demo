import { Canvas } from "@react-three/fiber";
import React from "react";
import Box from "./components/box";


const Demo = () => {
  return <Canvas>
    <ambientLight />
    <pointLight position={[10,10,10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>
};
export default Demo;
