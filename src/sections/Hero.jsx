import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import HackerRoom from "../components/HackersRoom";
import { Canvas } from "@react-three/fiber";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

//   const x = useControls({
//     positionX:{
//         value: 2.5,
//         min:-10,
//         max:10
//     },
//     positionY:{
//         value: 2.5,
//         min:-100,
//         max:100
//     },
//     positionZ:{
//         value: 2.5,
//         min:-10,
//         max:10
//     },
//   })
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Manish Shahi <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Portfolio and web apps
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 10, 30]} />
            <HeroCamera isMobile={isMobile}>
                <HackerRoom
              
                    position={sizes.deskPosition}
                    rotation={[3.1, 0.03, 3.13]}
                    scale={sizes.deskScale}
                />
            </HeroCamera>
            
            <group>
                <Target position={sizes.targetPosition}/>
                <ReactLogo position={sizes.reactLogoPosition}/>
                <Cube position={sizes.cubePosition}/>
                {/* <Ring position={sizes.ringPosition}/> */}
                <Rings position={sizes.ringPosition}/>
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
            <a href="#about" className="w-fit">
                <Button name = "Let's work together" isBeam containerClass = "sm:w-fit w-full sm:min-w-96"/>
            </a>
      </div>
    </section>
  );
};

export default Hero;
