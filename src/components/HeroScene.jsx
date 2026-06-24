import { OrbitControls, Sparkles, Text, useTexture } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

function AvatarPortal() {
  const avatar = useTexture('/assets/sachin-hero-avatar-v2.png');

  return (
    <group position={[0, 0.28, 0]} rotation={[0.02, -0.08, 0]}>
      <mesh position={[0, 0, -0.14]}>
        <circleGeometry args={[1.74, 96]} />
        <meshBasicMaterial color="#071026" transparent opacity={0.34} />
      </mesh>
      <mesh position={[0, 0, -0.08]}>
        <torusGeometry args={[1.62, 0.045, 18, 92]} />
        <meshStandardMaterial color="#b8fbff" emissive="#00e5ff" emissiveIntensity={1.55} metalness={0.35} roughness={0.22} />
      </mesh>
      <mesh position={[0, 0, -0.1]} rotation={[0, 0, -Math.PI / 7]}>
        <torusGeometry args={[1.82, 0.022, 14, 92]} />
        <meshStandardMaterial color="#ff69b4" emissive="#ff4f88" emissiveIntensity={1.25} metalness={0.35} roughness={0.18} />
      </mesh>
      <mesh>
        <circleGeometry args={[1.36, 96]} />
        <meshBasicMaterial map={avatar} toneMapped={false} />
      </mesh>
    </group>
  );
}

function Crystal({ position, color, scale = 1 }) {
  return (
    <mesh position={position} scale={scale} rotation={[0.5, 0.75, 0.18]}>
      <octahedronGeometry args={[0.28, 0]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.75} metalness={0.2} roughness={0.22} />
    </mesh>
  );
}

function ParticleField() {
  const fieldRef = useRef(null);
  const particles = useMemo(() => {
    return Array.from({ length: 28 }, () => [
      THREE.MathUtils.randFloatSpread(7.5),
      THREE.MathUtils.randFloatSpread(4.8),
      THREE.MathUtils.randFloat(-2.5, 1.8)
    ]);
  }, []);

  useFrame(({ clock }) => {
    if (!fieldRef.current) return;
    const time = clock.getElapsedTime();
    fieldRef.current.rotation.z = Math.sin(time * 0.12) * 0.08;
    fieldRef.current.rotation.y = time * 0.035;
  });

  return (
    <>
      <Sparkles count={34} speed={0.18} size={1.9} scale={[7.5, 5.2, 3.2]} color="#b8fbff" />
      <group ref={fieldRef}>
        {particles.map((position, index) => (
          <mesh key={index} position={position}>
            <sphereGeometry args={[0.018 + (index % 4) * 0.008, 10, 10]} />
            <meshBasicMaterial color={index % 3 === 0 ? '#ff4f88' : index % 3 === 1 ? '#ffd166' : '#9b5cff'} />
          </mesh>
        ))}
      </group>
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.35} />
      <pointLight position={[-3, 2.2, 3]} intensity={13} color="#00e5ff" />
      <pointLight position={[3, 1.4, 2.2]} intensity={12} color="#ff4f88" />
      <spotLight position={[0, 4, 3]} intensity={10} angle={0.42} penumbra={0.8} color="#ffd166" />
      <ParticleField />
      <AvatarPortal />
      <Crystal position={[-2.6, 1.2, -0.4]} color="#9b5cff" />
      <Crystal position={[2.45, 1.05, -0.2]} color="#00e5ff" scale={0.8} />
      <Crystal position={[1.9, -0.95, 0.4]} color="#ff4f88" scale={0.65} />
      <Text
        position={[0, -2.16, 0.15]}
        fontSize={0.18}
        color="#dce9ff"
        anchorX="center"
        anchorY="middle"
        maxWidth={3.6}
      >
        React • Node • AI
      </Text>
      <OrbitControls enableDamping={false} enableZoom={false} enablePan={false} rotateSpeed={0.34} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2.8} />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas frameloop="always" camera={{ position: [0, 0.12, 5.3], fov: 43 }} dpr={[0.75, 1]} gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
