"use client";

import { Bounded } from "@/app/components/ui/Bounded";
import { View } from "@react-three/drei";
import Scene from "./Scene";


const AlternatingText = (): JSX.Element => {
  return (
    <Bounded className="alternating-text-container relative bg-yellow-300 text-sky-950">
      <div>
        <div className="relative z-[100] grid">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>

              {/* First Section */}
        <div className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2">
          <div className="rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30">
            <h2 className="text-balance text-6xl font-bold">
              Gut-Friendly Goodness
            </h2>
            <div className="mt-4 text-xl">
              Our Soda is packed with prebiotics and 1 billion probiotics,
              giving your gut the love it deserves. Say goodbye to bloating and
              hello to a happy, healthy digestive system with every sip.
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2">
          <div className="md:col-start-2 rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30">
            <h2 className="text-balance text-6xl font-bold">
              Light Calories, Big Flavour
            </h2>
            <div className="mt-4 text-xl">
              Indulge in bold, refreshing taste without the guilt. At just 20
              calories per can, you can enjoy all the flavour you crave with
              none of the compromise.
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2">
          <div className="rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30">
            <h2 className="text-balance text-6xl font-bold">
              Naturally Refreshing
            </h2>
            <div className="mt-4 text-xl">
              Made with only the best natural ingredients, our soda is free
              from artificial flavours. It's a crisp, clean taste that feels
              as good as it tastes.
            </div>
          </div>
        </div>

        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;
