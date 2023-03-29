'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  MeshReflectorMaterial,
  Stage,
  PresentationControls,
} from '@react-three/drei';

import Chair from './Chair';
import styles from './page.module.css';

export default function Viewer() {
  // const ref = useRef();
  return (
    <div className={styles.wrapper}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [10, 10, 10], fov: 50, zoom: 2 }}
      >
        <PresentationControls
          speed={1.5}
          global
          zoom={1.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <color attach='background' args={['#101010']} />
          <fog attach='fog' args={['#101010']} />
          <ambientLight intensity={0.5} />
          <axesHelper args={[150]} />
          <Suspense fallback={null}>
            <Stage intensity={0.6} environment='city' adjustCamera={false}>
              <Chair />
            </Stage>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
              <planeGeometry attach='geometry' args={[170, 170]} />
              <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={40}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color='#101010'
                metalness={0.5}
                mirror={0.1}
              />
            </mesh>
          </Suspense>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
