import { WebIO } from '@gltf-transform/core';
import { KHRONOS_EXTENSIONS } from '@gltf-transform/extensions';
import { metalRough } from '@gltf-transform/functions';

import getGltf from './getGltf';

export const loadModelWithTransform = async (
  url: string,
  gl: THREE.WebGLRenderer,
): Promise<void> => {
  new Promise(async (resolve, reject) => {
    try {
      // Load model in glTF Transform.
      const io = new WebIO().registerExtensions(KHRONOS_EXTENSIONS);
      const document = await io.read(url);
      const extensionsUsed = document.getRoot().listExtensionsUsed();

      const hasKHRMaterialPBRSpecularGlossiness = extensionsUsed.some(
        (extension) =>
          extension.extensionName === 'KHR_materials_pbrSpecularGlossiness',
      );

      if (hasKHRMaterialPBRSpecularGlossiness) {
        console.warn(
          'Requires spec/gloss materials (KHR_materials_pbrSpecularGlossiness), which this viewer cannot display. Materials will be converted to metal/rough.',
        );

        // Convert materials.
        await document.transform(metalRough());
      }

      // Write back to GLB.
      const binary = await io.writeBinary(document);
      const gltf = await getGltf(binary, gl);
      resolve(gltf);
    } catch (error) {
      reject(error);
    }
  });
};
