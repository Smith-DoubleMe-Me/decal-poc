'use client';

import { OrbitControls, Stage, Bounds } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';

import Model from './Model';

export default function ModelViewer() {
  const [uniqueKey, setUniqueKey] = useState('');

  return (
    <Canvas
      key={uniqueKey}
      id="modelViewerCanvas"
      gl={{ preserveDrawingBuffer: true }}
      resize={{ scroll: false }}
    >
      <color attach="background" args={[196, 196, 196]} />
      <ambientLight />
      <Stage adjustCamera environment={'sunset'}>
        <Bounds fit clip observe margin={1}>
          <Model url={'export.glb'} />
        </Bounds>
      </Stage>
      <OrbitControls makeDefault />
    </Canvas>
  );
}
