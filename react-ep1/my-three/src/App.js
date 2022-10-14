
import React, { useRef, useEffect, useState, Suspense } from "react";
import "./App.scss";
//Components
import Header from "./components/header";
import { Section } from "./components/section";

// Page State
import state from "./components/state";

// R3F
import { Mesh } from 'three';
import { Html, Preload, useProgress,useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// React Spring
import { a, useTransition } from "@react-spring/web";
//Intersection Observer
import { useInView } from "react-intersection-observer";

function Model() {
  const gltf = useGLTF('/armchairYellow.gltf');
  return (<primitive object={gltf.scene} />);
}

const Lights = () =>{
  return(
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10,10,5]} intensity={1} />
      <directionalLight position={[0,10,0]} intensity={1.5} />
      <spotLight intensity={1} position={[1000, 1000, 0]} />
    </>
  )
}

const HTMLContent = () => {


  {
    /*
      1. canvas를 추가하고 camera를 세팅한다
      2. 3d모델을 불러온다
      3. light를 원하는만큼 추가한다
      4.원하는 동작을 추가한다.
     */
  }

  const ref = useRef()
  useFrame( () => (ref.current.rotation.y -= 0.01) );

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 250, 0]}>
      <mesh ref={ref} position={[0, -35, 0]}>
        <Model />
      </mesh>
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
      <Suspense fallback={null}>
      <Canvas
        colormanagement = "true"
        camera={{position:[0, 0, 120], fov:70}}
        >
        <Lights />
        <HTMLContent />
  
      </Canvas>
      </Suspense>
    </>
  );
}

export default App;
