import { FC, useMemo } from "react";
import { Float, Line, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import Background from "./Background";
import { Plane } from "./Plane";
import { Clouds } from "./Clouds";

const LINE_NB_POINTS = 2000;

const Experience: FC = () => {
  const curve = useMemo(() => {
    /**
     * 绘制弧线
     * @link https://threejs.org/docs/#api/zh/extras/curves/CatmullRomCurve3
     */
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -10),
        new THREE.Vector3(-2, 0, -20),
        new THREE.Vector3(-3, 0, -30),
        new THREE.Vector3(0, 0, -40),
        new THREE.Vector3(5, 0, -50),
        new THREE.Vector3(7, 0, -60),
        new THREE.Vector3(5, 0, -70),
        new THREE.Vector3(0, 0, -80),
        new THREE.Vector3(0, 0, -90),
        new THREE.Vector3(0, 0, -100),
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);

  /** 获取绘制的弧线上的分段点 */
  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.2);
    shape.lineTo(0, 0.2);

    return shape;
  }, [curve]);

  return (
    <>
      <OrbitControls autoRotate={false} />
      <Background />
      {/* <axesHelper args={[15]} /> */}
      <group position-y={-2}>
        {/* <Line points={linePoints} color={"white"} opacity={0.7} transparent lineWidth={16} /> */}
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial color={"white"} opacity={0.7} transparent />
        </mesh>
      </group>
      {/* 给飞机添加上线浮动的动效 */}
      <Float floatIntensity={3} speed={2}>
        <Plane rotation-y={Math.PI / 2} scale={[0.3, 0.3, 0.3]} />
      </Float>
      <Clouds />
    </>
  );
};

export default Experience;
