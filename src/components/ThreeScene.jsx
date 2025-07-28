import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Box, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

// 움직이는 박스
function AnimatedBox({ position, color = '#ffffff' }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[0.4, 0.4, 0.4]}>
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.6}
        wireframe
      />
    </Box>
  );
}

// 움직이는 구체
function AnimatedSphere({ position, color = '#ffffff' }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.6;
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.6) * 0.8;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.3, 16, 16]}>
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.5}
        wireframe
      />
    </Sphere>
  );
}

// 움직이는 토러스
function AnimatedTorus({ position, color = '#ffffff' }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.7;
      meshRef.current.position.z = position[2] + Math.cos(state.clock.elapsedTime * 0.5) * 0.6;
    }
  });

  return (
    <Torus ref={meshRef} position={position} args={[0.5, 0.15, 16, 32]}>
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.4}
        wireframe
      />
    </Torus>
  );
}

// 메인 3D 씬
function Scene({ scrollProgress = 0 }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // 스크롤에 따른 카메라 움직임
      groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
      groupRef.current.position.y = scrollProgress * -8;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 무작위로 배치된 작은 geometry들 */}
      <AnimatedBox position={[-12, 8, 2]} color="#4facfe" />
      <AnimatedBox position={[10, -6, -1]} color="#00f2fe" />
      <AnimatedBox position={[-8, 12, 0]} color="#43e97b" />
      <AnimatedBox position={[14, 4, 3]} color="#fa709a" />
      <AnimatedBox position={[-6, -10, -2]} color="#fee140" />
      
      <AnimatedSphere position={[-15, 2, 1]} color="#a8edea" />
      <AnimatedSphere position={[8, 10, -3]} color="#667eea" />
      <AnimatedSphere position={[-4, -8, 2]} color="#764ba2" />
      <AnimatedSphere position={[12, -12, 0]} color="#f093fb" />
      <AnimatedSphere position={[-10, 6, -1]} color="#4facfe" />
      
      <AnimatedTorus position={[-8, 0, 3]} color="#00f2fe" />
      <AnimatedTorus position={[6, 8, -2]} color="#43e97b" />
      <AnimatedTorus position={[-12, -4, 1]} color="#fa709a" />
      <AnimatedTorus position={[10, 2, -3]} color="#fee140" />
      <AnimatedTorus position={[-2, 10, 0]} color="#a8edea" />
    </group>
  );
}

// 메인 컴포넌트
const ThreeScene = ({ scrollProgress = 0 }) => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 1,
      pointerEvents: 'none',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={1.0} />
        <pointLight position={[0, 0, 10]} intensity={1.2} />
        
        <Scene scrollProgress={scrollProgress} />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene; 