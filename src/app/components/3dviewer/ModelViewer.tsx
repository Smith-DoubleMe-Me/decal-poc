'use client';

import { OrbitControls, Stage, Bounds } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { uuid } from '@gltf-transform/core';

import Model from './Model';

export default function ModelViewer() {
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
          <Model url={'model2.glb'} />
        </Bounds>
      </Stage>
      <OrbitControls makeDefault />
    </Canvas>
  );
}
