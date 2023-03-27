'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Box } from './components/Box';

export default function App() {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <ambientLight intensity={1} color='red' />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <OrbitControls />
      <axesHelper args={[5]} />
    </Canvas>
  );
}
