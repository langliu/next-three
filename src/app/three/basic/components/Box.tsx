import { useRef, useState } from 'react'
import { Mesh } from 'three'
import { useFrame, ThreeElements } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'

export function Box (props: ThreeElements['mesh']) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))

  const { scale } = useSpring({ scale: clicked ? 1.5 : 1 })

  return (
    <animated.mesh
      ref={ref}
      scale={scale}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      position={props.position}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </animated.mesh>
  )
}
