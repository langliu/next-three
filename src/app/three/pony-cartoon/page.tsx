'use client';
import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { BakeShadows, OrbitControls, Stage } from '@react-three/drei';

import { Model } from './components/PonyCartoon';
import styles from './page.module.css';

export default function Viewer() {
  // const ref = useRef();
  return (
    <div className={styles.wrapper}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [100, 100, 100], fov: 50 }}
      >
        <axesHelper args={[1500]} />
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
