import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import PropTypes from "prop-types";

const Model = ({ url, scale = 0 }) => {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} scale={[scale, scale, scale]} />;
};

const ARViewer = ({ modelUrl }) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
      <Model url={modelUrl} scale={5} />
      <OrbitControls />
    </Canvas>
  );
};
ARViewer.propTypes = {
  modelUrl: PropTypes.string.isRequired,
};
Model.prototypes = {
  url: PropTypes.string.isRequired,
};
export default ARViewer;
