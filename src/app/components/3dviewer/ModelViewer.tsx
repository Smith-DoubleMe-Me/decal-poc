'use client';

import { OrbitControls, Stage, Bounds, Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import Model from './Model';

type Props = {
  id: 'deer' | 'export' | 'model2' | 'model4';
};

const ModelLoader = () => (
  <Html center>
    <div
      className="text-landing inline-block h-60 w-60 animate-spin rounded-full border-[3px] border-current border-t-transparent"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </Html>
);

export default function ModelViewer({ id }: Props) {
  return (
    <Canvas
      key={id}
      id="modelViewerCanvas"
      gl={{ preserveDrawingBuffer: true }}
      resize={{ scroll: false }}
    >
      <color attach="background" args={[196, 196, 196]} />
      <ambientLight />
      <Suspense fallback={<ModelLoader key={id} />}>
        <Stage adjustCamera environment={'sunset'}>
          <Bounds fit clip observe margin={1}>
            <Model
              url={`${process.env.NEXT_PUBLIC_URL}/media-download/${id}?size=original&fileType=model&isFlipMode=false`}
            />
          </Bounds>
        </Stage>
      </Suspense>
      <OrbitControls makeDefault />
    </Canvas>
  );
}
