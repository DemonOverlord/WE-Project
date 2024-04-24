import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import { OrbitControls, useDetectGPU } from '@react-three/drei'
import Device from '../three/Device'
import HomeContent from '../components/HomeContent'

// Enforce SSG and SSR where necessary

// DONE (Maybe): Optimize Curve for rendering
// DONE: Add responsiveness to the whole site
// DONE: Work out some way to use useDetectGPU for lower end devices.


export default function Home() {  
  // const canvas = useRef()
  const [focus, setFocus] = useState(false)

  const tryIt = () => {
    // canvas.current.children[1].classList.remove('-z-[1]')
    // canvas.current.children[1].classList.add('z-10')
    // canvas.current.children[0].classList.add('blur-sm')
    setFocus(true);
  }

  const leaveIt = () => {
    // canvas.current.children[1].classList.remove('z-10')
    // canvas.current.children[1].classList.add('-z-[1]')
    // canvas.current.children[0].classList.remove('blur-sm')
    setFocus(false);
  }

  return (
    <div className='w-full h-full dark:selection:bg-pink-700 selection:bg-red-500'>
      <Head>
        <title>Rudiment.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContent styles={focus ? "blur-sm" : ""} tryIt={tryIt}/>

      {/* <Suspense fallback={null}> */}
      {/* !useDetectGPU().isMobile ? */}
      {useDetectGPU().tier > 1 ?
      <Canvas className={`fixed ${focus ? "z-10" : "-z-[1]"}`}> 
        <pointLight intensity={0.7} position={[-2, 3, -4]} />
        <OrbitControls maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} enableZoom={false} enablePan={false} />
        <Device leaveIt={leaveIt}/>
      </Canvas> :
      <Canvas className='fixed -z-[1]'></Canvas>
      }
      {/* </Suspense> */}
    </div>
  )
}
