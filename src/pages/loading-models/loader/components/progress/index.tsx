import { Html, useProgress } from "@react-three/drei";

const ProgressComp = () => {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};

export default ProgressComp;
