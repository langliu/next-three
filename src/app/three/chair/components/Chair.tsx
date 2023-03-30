/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\chair.gltf -t
*/

import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import type { FC } from 'react'
import { useCustomization } from '~/app/three/chair/context/Customization'

type GLTFResult = GLTF & {
  nodes: {
    Chair: THREE.Mesh;
    Cushion: THREE.Mesh;
    Legs1: THREE.Mesh;
    Legs2: THREE.Mesh;
  };
  materials: {
    Chair: THREE.MeshStandardMaterial;
    Cushion: THREE.MeshStandardMaterial;
    Legs: THREE.MeshStandardMaterial;
  };
};

const Chair: FC<JSX.IntrinsicElements['group']> = (props) => {
  const { nodes, materials } = useGLTF('/models/chair.gltf') as GLTFResult
  const { material, leg, chairColor, cushionColor } = useCustomization()

  const leatherTextureProps = useTexture({
    // map: '/textures/leather/Leather_008_Base_Color.jpg',
    // displacementMap: '/textures/leather/Leather_008_Height.png',
    normalMap: '/textures/leather/Leather_008_Normal.jpg',
    roughnessMap: '/textures/leather/Leather_008_Roughness.jpg',
    aoMap: '/textures/leather/Leather_008_Ambient Occlusion.jpg',
  })

  leatherTextureProps.aoMap.repeat.set(3, 3)
  // leatherTextureProps.map.repeat.set(3, 3)
  leatherTextureProps.normalMap.repeat.set(3, 3)
  leatherTextureProps.roughnessMap.repeat.set(3, 3)
  leatherTextureProps.aoMap.wrapS =
    leatherTextureProps.aoMap.wrapT =
      // leatherTextureProps.map.wrapS =
      //   leatherTextureProps.map.wrapT =
          leatherTextureProps.normalMap.wrapS =
            leatherTextureProps.normalMap.wrapT =
              leatherTextureProps.roughnessMap.wrapS =
                leatherTextureProps.roughnessMap.wrapT =
                  THREE.RepeatWrapping

  const fabricTextureProps = useTexture({
    // map: '/textures/fabric/Fabric_Knitted_006_basecolor.jpg',
    normalMap: '/textures/fabric/Fabric_Knitted_006_normal.jpg',
    roughnessMap: '/textures/fabric/Fabric_Knitted_006_roughness.jpg',
    aoMap: '/textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg',
  })

  fabricTextureProps.aoMap.repeat.set(3, 3)
  // fabricTextureProps.map.repeat.set(3, 3)
  fabricTextureProps.normalMap.repeat.set(3, 3)
  fabricTextureProps.roughnessMap.repeat.set(3, 3)
  fabricTextureProps.aoMap.wrapS =
    fabricTextureProps.aoMap.wrapT =
      // fabricTextureProps.map.wrapS =
      //   fabricTextureProps.map.wrapT =
          fabricTextureProps.normalMap.wrapS =
            fabricTextureProps.normalMap.wrapT =
              fabricTextureProps.roughnessMap.wrapS =
                fabricTextureProps.roughnessMap.wrapT =
                  THREE.RepeatWrapping

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry}>
        <meshStandardMaterial
          {...(material === 'leather' ? leatherTextureProps : fabricTextureProps)}
          color={chairColor}
        />
      </mesh>
      <mesh
        geometry={nodes.Cushion.geometry}
        // material={materials.Cushion}
        position={[0, 0.06, 0.04]}
      >
        <meshStandardMaterial {...fabricTextureProps} color={cushionColor}/>
      </mesh>
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} visible={leg === 'modern'}/>
      <mesh
        geometry={nodes.Legs2.geometry}
        material={materials.Legs}
        visible={leg === 'classic'}
      />
    </group>
  )
}

useGLTF.preload('/models/chair.gltf')

export default Chair
