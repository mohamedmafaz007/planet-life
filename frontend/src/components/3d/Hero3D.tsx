import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import * as THREE from "three";

const ParticleSphere = () => {
    const meshRef = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.001;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <points ref={meshRef}>
            <sphereGeometry args={[2.5, 64, 64]} />
            <pointsMaterial
                size={0.02}
                color="#8b5cf6"
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
};

export const Hero3D = () => {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full opacity-60">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <ParticleSphere />
            </Canvas>
        </div>
    );
};
