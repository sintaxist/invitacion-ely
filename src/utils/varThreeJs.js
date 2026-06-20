import * as THREE from "three";

export const MODEL_PATH = "/oscar_trophy.glb";

export const DRACO_PATH = "https://www.gstatic.com/draco/v1/decoders/";

export const MATERIALS = {
  gold: new THREE.MeshStandardMaterial({
    color: "#C99040",
    metalness: 0.9,
    roughness: 0.15,
    envMapIntensity: 2.0,
  }),
  base: new THREE.MeshStandardMaterial({
    color: "#000000",
    metalness: 0.2,
    roughness: 0.1,
    envMapIntensity: 1.0,
  }),
};
