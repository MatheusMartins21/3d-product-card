import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "./style.css";

import Facebook from "../Facebook";

const Card = () => {
  return (
    <>
      <Canvas className="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <OrbitControls autoRotate />
        <Suspense fallback={null}>
            <Facebook />
        </Suspense>
      </Canvas>
    </>
  )
}

export default Card;