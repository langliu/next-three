'use client'
import { FC, Suspense, } from 'react'
import { Canvas, } from '@react-three/fiber'
import { BakeShadows, OrbitControls, Stage, } from '@react-three/drei'

import Pipeline from '~/app/three/pipeline/Pipeline'
import styles from './page.module.css'

const PipelinePage: FC = () => {

  return (
    <div className={styles.wrapper}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 100, 300], fov: 90, }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={1} adjustCamera={true}>
            <Pipeline />
          </Stage>
          <BakeShadows />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default PipelinePage
