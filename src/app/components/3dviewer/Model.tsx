'use client';

import { useAnimations, useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { LoadingManager, REVISION } from 'three';
import { GLTFLoader, KTX2Loader } from 'three-stdlib';
import { GLTF } from 'three/examples/jsm/Addons.js';

import { loadModelWithTransform } from '@/app/utils/gltfConvert';

const manager = new LoadingManager();

type Props = {
  url: string;
};

export default function Model({ url }: Props) {
  const [transformModel, setTransformModel] = useState<GLTF>();
  const ref = useRef<THREE.Group>(null);
  const { gl } = useThree();

  const myLoader = (loader: GLTFLoader) => {
    loader.manager = manager;
    loader.manager.onError = () => {
      console.error('error');
      alert('Invalid file. Please try with a new 3D glb file.');
      window.location.reload();
    };
    const THREE_PATH = `https://unpkg.com/three@0.${REVISION}.x`;
    const ktx2Loader = new KTX2Loader(manager).setTranscoderPath(
      `${THREE_PATH}/examples/jsm/libs/basis/`,
    );
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
  };

  const gltf = useGLTF(url, true, false, myLoader);
  gltf.scene.updateMatrixWorld(true);

  // useEffect(() => {
  //   const transform = (url: string) => {
  //     loadModelWithTransform(url, gl)
  //       .then((gltf) => {
  //         gltf.scene.updateMatrixWorld();
  //         setTransformModel(gltf);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setTransformModel(undefined);
  //       });
  //   };

  // const usedKHRMaterialsPbrSpecularGlossiness = () => {
  //   // `extensionsUsed`에서 확장의 사용 여부 확인
  //   const usesExtension =
  //     gltf.parser.json.extensionsUsed?.includes(
  //       'KHR_materials_pbrSpecularGlossiness',
  //     ) ?? false;

  //   // 각 재질을 확인하여 확장 사용 여부 검사
  //   const materialUsesExtension =
  //     gltf.parser.json.materials?.some(
  //       (material: any) =>
  //         material.extensions?.KHR_materials_pbrSpecularGlossiness !==
  //         undefined,
  //     ) ?? false;

  //   return usesExtension || materialUsesExtension;
  // };

  if (!gltf) {
    setTransformModel(undefined);
    return;
  }

  //   // KHR_materials_pbrSpecularGlossiness를 사용할 경우 변환
  //   if (usedKHRMaterialsPbrSpecularGlossiness()) {
  //     transform(url);
  //   }
  // }, [gl, gltf, url]);

  return (
    <group ref={ref}>
      <primitive object={transformModel?.scene || gltf.scene} />
    </group>
  );
}
