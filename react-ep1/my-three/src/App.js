
import React, { useRef, useEffect, useState, Suspense } from "react";
import "./App.scss";
//Components
import Header from "./components/header";
import { Section } from "./components/section";

// Page State
import state from "./components/state";

// R3F
import { Mesh } from 'three';
import { Html, Preload, useProgress, useGLTFLoader } from "@react-three/drei";
import { Canvas, useFrame, useThree } from '@react-three/fiber'

// React Spring
import { a, useTransition } from "@react-spring/web";
//Intersection Observer
import { useInView } from "react-intersection-observer";

const HTMLContent = () => {
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 250, 0]}>
        <Html fullscreen>
          <div className="container">
            <h1 className="title">Hello</h1>
          </div>
        </Html>
      </group>
    </Section>
  )
};

function App() {
  return (
    <>
      <Header />
      <Canvas
        colormanagement = "true"
        camera={{position:[0, 0, 120], fov:70}}
        >
        <HTMLContent />
      </Canvas>
    </>
  );
}

export default App;
