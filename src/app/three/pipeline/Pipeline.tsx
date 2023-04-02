import { FC, useMemo, useLayoutEffect } from 'react'
import { Tube, useTexture } from '@react-three/drei'
import { Curve, Vector3, RepeatWrapping } from 'three'
import gsap from 'gsap'

const Pipeline: FC = () => {
  const path = useMemo(() => {
    class CustomSinCurve extends Curve<Vector3> {
      private readonly scale: number

      constructor (scale = 1) {
        super()
        this.scale = scale
      }

      getPoint (t: number) {
        const tx = t * 3 - 1.5
        const ty = Math.sin(2 * Math.PI * t)
        const tz = 0

        return new Vector3(tx, ty, tz).multiplyScalar(this.scale)
      }
    }

    return new CustomSinCurve(10)
  }, [])

  const arrowTexture = useTexture({
    map: '/R-C.jpg',
  }, (texture) => {
    // if (texture) {texture.wrapS = RepeatWrapping}
    if (Array.isArray(texture)) {
      for (const item of texture) {
        item.wrapS = item.wrapT = RepeatWrapping
        item.repeat.set(30, 5)
      }
    }
    console.log(texture)
  })

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(arrowTexture.map.offset, {
        x: 1,
        duration: 0.4,
        repeat: -1,
        ease: 'none'
      })
    })
    return () => ctx.revert()
  }, [arrowTexture])

  return (
    <mesh>
      <Tube args={[path, 100]}>
        {/*<meshPhongMaterial color="#3c3c3c" wireframe={false} wireframeLinewidth={5} />*/}
        <meshStandardMaterial
          {...arrowTexture}
        />
      </Tube>
    </mesh>
  )
}

export default Pipeline
