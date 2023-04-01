'use client'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { BakeShadows, OrbitControls, Stage } from '@react-three/drei'

import { useShoeStore } from '~/app/three/shoe/store'
import Shoe from './components/Shoe'
import styles from './page.module.css'

export default function Viewer () {
  const { vampColor, vampWingColor } = useShoeStore()

  return (
    <div className={styles.wrapper}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 150], fov: 40 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Shoe
              color={vampColor}
              position={[0, 0, 0]}
              color2={vampWingColor}
            />
            <Shoe
              color={vampColor}
              color2={vampWingColor}
              scale={-1}
              rotation={[0, 0.5, Math.PI]}
              position={[0, 0, -2]}
            />
          </Stage>
          <BakeShadows />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  )
}
