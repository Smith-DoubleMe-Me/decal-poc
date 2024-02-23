import { LoadingManager, REVISION } from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/Addons.js';
import { KTX2Loader } from 'three/examples/jsm/Addons.js';

const manager = new LoadingManager();

const getGltf = (glb: Uint8Array, gl: THREE.WebGLRenderer): Promise<GLTF> =>
  new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.manager = manager;
    const THREE_PATH = `https://unpkg.com/three@0.${REVISION}.x`;
    const ktx2Loader = new KTX2Loader(manager).setTranscoderPath(
      `${THREE_PATH}/examples/jsm/libs/basis/`,
    );
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl));

    loader.parse(
      glb.buffer,
      '',
      (gltf) => {
        resolve(gltf);
      },
      (error) => {
        reject(error);
      },
    );
  });

export default getGltf;
