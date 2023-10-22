"use client";
import { TitleText, TypingText } from "@/components/customTextAnimation";
import { styles } from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function World() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer({})}
        initial="hidden"
        whileFocus="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People on the world" textStyles="text-center" />
        <TitleText textStyles="text-center">
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        </TitleText>
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0.3,
            duration: 1,
          })}
          initial="hidden"
          whileInView="show"
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <Image
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#fd6680]">
            <Image
              src="/people-01.png"
              alt="people"
              width={58}
              height={58}
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-20 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#fd6680]">
            <Image
              src="/people-02.png"
              alt="people"
              width={58}
              height={58}
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 w-[70px] h-[70px] p-[6px] rounded-full bg-[#fd6680]">
            <Image
              src="/people-03.png"
              alt="people"
              width={58}
              height={58}
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
