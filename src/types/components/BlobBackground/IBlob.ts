import Perlin from "@/types/utils/perlin3d"

type MeshObject = THREE.Mesh<THREE.SphereGeometry, THREE.ShaderMaterial>

interface objectTemplate {
  object: MeshObject,
  noise: Perlin,
}

interface BlobBackgroundProps {
  children: JSX.Element | JSX.Element[],
}

export type {BlobBackgroundProps, objectTemplate, MeshObject}