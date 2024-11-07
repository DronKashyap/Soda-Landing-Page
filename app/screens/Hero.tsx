
"use client";


import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";

import { Bounded } from "@/app/components/ui/Bounded";
import { TextSplitter } from "@/app/components/TextSplitter";
import Scene from "@/app/components/Scene";
import { Bubbles } from "@/app/components/ui/Bubbles";
import { useStore } from "@/app/components/hooks/useStore";
import { useMediaQuery } from "@/app/components/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Hero()  {
  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useGSAP(
    () => {
      if (!ready && isDesktop) return;

      const introTl = gsap.timeline();

      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8",
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .fromTo(
          "body",
          {
            backgroundColor: "#FDE047",
          },
          {
            backgroundColor: "#D9F99D",
            overwrite: "auto",
          },
          1,
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [ready, isDesktop] },
  );

  return (
    <Bounded
      className="hero opacity-0"
    >
      {isDesktop && (
        <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
          <Scene />
          <Bubbles count={300} speed={2} repeat={true} />
        </View>
      )}

<div className='grid mt-10'> 
    <div className='grid h-screen place-items-center'> 
    <div className='grid auto-rows-min place-items-center text-center'>
      <h1 className=' text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem] lg:text-[13rem]'> Live Gutsy </h1>
      <h2 className=' mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl'> Soda Perfected</h2>
      <h4 className=' text-xl font-normal text-sky-950'> 3-5g sugar. 9g fiber. 5 Delicious Flavours </h4>
      <button className='mt-12 text-white font-bold bg-orange-500 rounded-md px-5 py-2 hover:bg-orange-700 hover:scale-125'> Shop Now </button>
    </div></div>
    <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <div>
            <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl">
            <TextSplitter text="Try all five flavors" />
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
             <h1> Our soda is made with real fruit juice and a touch of cane sugar. We never use artificial sweeteners or high fructose corn syrup. Try all five flavors and find your favorite!</h1>
            </div>
          </div>
        </div>
    </div>
    </Bounded>
  );
};

export default Hero;
