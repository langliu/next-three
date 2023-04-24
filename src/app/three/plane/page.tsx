"use client";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";

import { Plane } from "./components/Plane";
import Experience from './components/Experience';
import styles from "./page.module.css";

export default function Viewer() {
  // const ref = useRef();
  return (
    <div className={styles.wrapper}>
      <Canvas shadows dpr={[1, 2]}>
        {/* 设置Canvas画布的背景颜色 */}
        <color attach={"background"} args={["#ececec"]} />
        <Experience />
        {/* <axesHelper args={[1500]} />
        <ambientLight intensity={0.5} /> */}
        {/* <Background /> */}
        {/* <Suspense fallback={null}> */}
        {/* <Stage
            // controls={ref}
            // preset='rembrandt'
            intensity={1}
            environment="city"
          > */}
        {/* <Plane /> */}
        {/* </Stage> */}
        {/* </Suspense> */}
        {/* <OrbitControls autoRotate={false} /> */}
      </Canvas>
    </div>
  );
}
