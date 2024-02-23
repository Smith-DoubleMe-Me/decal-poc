'use client';

import { OrbitControls, Stage, Bounds } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { uuid } from '@gltf-transform/core';

import Model from './Model';

type Props = {
  id: 'deer' | 'export' | 'model2' | 'model4';
};

export default function ModelViewer({ id }: Props) {
  return (
    <Canvas
      key={uuid()}
      id="modelViewerCanvas"
      gl={{ preserveDrawingBuffer: true }}
      resize={{ scroll: false }}
    >
      <color attach="background" args={[196, 196, 196]} />
      <ambientLight />
      <Stage adjustCamera environment={'sunset'}>
        <Bounds fit clip observe margin={1}>
          <Model url={`../${id}.glb`} />
        </Bounds>
      </Stage>
      <OrbitControls makeDefault />
    </Canvas>
  );
}
