import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleField() {
  const points = useRef();
  const particles = useMemo(() => {
    const positions = new Float32Array(1200 * 3);
    for (let i = 0; i < 1200; i += 1) {
      const radius = 1.8 + Math.random() * 4.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(THREE.MathUtils.randFloatSpread(2));
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((_, delta) => {
    points.current.rotation.x += delta * 0.035;
    points.current.rotation.y += delta * 0.055;
  });

  return (
    <points ref={points} frustumCulled>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        transparent
        color="#54E7FF"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={0.58}
      />
    </points>
  );
}

function NeuralCore() {
  const mesh = useRef();
  const rings = useRef();
  const halo = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * 0.25;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.18;
    rings.current.rotation.z -= delta * 0.32;
    rings.current.rotation.x += delta * 0.08;
    halo.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 1.8) * 0.045);
  });

  return (
    <group>
      <mesh ref={halo}>
        <sphereGeometry args={[1.28, 32, 32]} />
        <meshBasicMaterial color="#54E7FF" transparent opacity={0.08} wireframe />
      </mesh>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.08, 5]} />
        <meshStandardMaterial
          color="#54E7FF"
          roughness={0.18}
          metalness={0.68}
          emissive="#0B7185"
          emissiveIntensity={0.32}
        />
      </mesh>
      <group ref={rings}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.56, 0.008, 16, 160]} />
          <meshBasicMaterial color="#6EF3B5" transparent opacity={0.7} />
        </mesh>
        <mesh rotation={[0.85, 0.35, 0.2]}>
          <torusGeometry args={[1.92, 0.006, 16, 160]} />
          <meshBasicMaterial color="#FF7A90" transparent opacity={0.58} />
        </mesh>
      </group>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 4.6], fov: 55 }} dpr={[1, 1.7]}>
        <color attach="background" args={['#070812']} />
        <ambientLight intensity={0.72} />
        <pointLight position={[4, 4, 5]} intensity={55} color="#54E7FF" />
        <pointLight position={[-3, -2, 2]} intensity={35} color="#FF7A90" />
        <ParticleField />
        <group position={[1.2, 0.1, 0]}>
          <NeuralCore />
        </group>
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_45%,transparent_0,rgba(7,8,18,.38)_34%,rgba(7,8,18,.92)_78%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}
