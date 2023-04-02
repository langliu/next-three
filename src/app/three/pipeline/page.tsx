'use client'
import { Suspense, } from 'react'
import { Canvas, } from '@react-three/fiber'
import { BakeShadows, OrbitControls, Stage, } from '@react-three/drei'
import styles from './page.module.css'
import Pipeline from '~/app/three/pipeline/Pipeline'

export default function Viewer () {

  return (
    <div className={styles.wrapper}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [150, 150, 150], fov: 90, zoom: 0.4 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={1}>
            <Pipeline />
          </Stage>
          <BakeShadows />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  )
}
