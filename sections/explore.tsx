"use client";

import React, { useState } from "react";

import { exploreWorlds } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { styles } from "@/styles";
import { TitleText, TypingText } from "@/components/customTextAnimation";
import ExploreCard from "@/components/exploreCard";

export default function Explore() {
  const [active, setActive] = useState("world-2");
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer({})}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Explore Metaversus" textStyles="text-center" />
        <TitleText textStyles="text-center">
          <>
            Choose the world you want <br className="md:block hidden" /> to
            explore
          </>
        </TitleText>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
