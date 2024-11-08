"use client";

import { Bounded } from "@/app/components/ui/Bounded";
import Scene from "./Scene";
import { View } from "@react-three/drei";

const SkyDive = (): JSX.Element => {
  return (
    <Bounded className="h-screen">
      <h2 className="sr-only">Dive Into Better Health</h2>
      <View className="h-screen w-screen">
        <Scene
          flavor="blackCherry" 
          sentence="Dive Into Better Health" 
        />
      </View>
    </Bounded>
  );
};

export default SkyDive;
