'use client';
import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { BakeShadows, OrbitControls, Stage } from '@react-three/drei';

import { Model } from './Chair';
import styles from './page.module.css';

export default function Viewer() {
  // const ref = useRef();
  return (
    <div className={styles.wrapper}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [10, 10, 10], fov: 50, zoom: 0.5 }}
      >
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Stage
            // controls={ref}
            // preset='rembrandt'
            intensity={1}
            environment='city'
          >
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}
