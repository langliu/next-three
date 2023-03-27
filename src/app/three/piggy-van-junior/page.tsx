'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { BakeShadows, Stage, ScrollControls } from '@react-three/drei';

import { Model } from './PiggyVanJunior';
import styles from './page.module.css';

export default function Viewer() {
  return (
    <div className={styles.wrapper}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [300, 300, 300], fov: 40, zoom: 0.5 }}
      >
        <Suspense fallback={null}>
          <Stage environment='city' intensity={0.6}>
            <ScrollControls pages={2}>
              <Model position={[0, 0, 0]} scale={0.2} />
            </ScrollControls>
          </Stage>
          <BakeShadows />
        </Suspense>
      </Canvas>
    </div>
  );
}
