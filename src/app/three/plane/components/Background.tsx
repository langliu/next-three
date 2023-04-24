import { Environment, Sphere } from "@react-three/drei";
import { LayerMaterial, Gradient } from "lamina";
import { BackSide } from "three";
import type { FC } from "react";

const Background: FC = () => {
  return (
    <>
      <Environment preset="sunset" />
      <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
        <LayerMaterial color="#ffffff" lighting="physical" transmission={1} side={BackSide}>
          <Gradient colorA="#357ca1" colorB="#ffffff" axes="y" start={0} end={-0.5} />
        </LayerMaterial>
      </Sphere>
    </>
  );
};

export default Background;
