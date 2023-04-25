import { FC, useMemo, useRef } from "react";
import { Float, Line, OrbitControls, PerspectiveCamera, useScroll } from "@react-three/drei";
import * as THREE from "three";

import Background from "./Background";
import { Plane } from "./Plane";
import { Clouds } from "./Clouds";
import { useFrame } from "@react-three/fiber";

const LINE_NB_POINTS = 12000;

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

  const cameraGroup = useRef(null);
  const airplane = useRef(null);
  const scroll = useScroll();

  useFrame((_state, delta) => {
    const curPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    );
    const curPoint = linePoints[curPointIndex];
    const pointAhead = linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)];
    const xDisplacement = (pointAhead.x - curPoint.x) * 80;
    // Math.PI / 2 -> LEFT
    // -Math.PI / 2 -> RIGHT

    const angleRotation =
      (xDisplacement < 0 ? 1 : -1) * Math.min(Math.abs(xDisplacement), Math.PI / 3);

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(airplane.current.rotation.x, airplane.current.rotation.y, angleRotation)
    );
    const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(cameraGroup.current.rotation.x, angleRotation, cameraGroup.current.rotation.z)
    );

    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
    cameraGroup.current.quaternion.slerp(targetCameraQuaternion, delta * 2);

    cameraGroup.current.position.lerp(curPoint, delta * 24);
  });

  return (
    <>
      {/* <OrbitControls autoRotate={false} enableZoom={false} /> */}
      <group ref={cameraGroup}>
        <Background />
        <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault></PerspectiveCamera>
        <group ref={airplane}>
          {/* 给飞机添加上线浮动的动效 */}
          <Float floatIntensity={3} speed={2}>
            <Plane rotation-y={Math.PI / 2} scale={[0.2, 0.2, 0.2]} />
          </Float>
        </group>
      </group>
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

      <Clouds />
    </>
  );
};

export default Experience;
