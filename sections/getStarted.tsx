"use client";

import { TitleText, TypingText } from "@/components/customTextAnimation";
import StartSteps from "@/components/startSteps";
import { startingFeatures } from "@/constants";
import { styles } from "@/styles";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function GetStarted() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer({})}
        initial="hidden"
        whileFocus="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          initial="hidden"
          whileInView="show"
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src="/get-started.png"
            alt="get started"
            width={500}
            height={500}
            quality={95}
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0.2,
            duration: 1,
          })}
          initial="hidden"
          whileInView="show"
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| How Metaversus work" />
          <TitleText>
            <>Getstarted with just few click.</>
          </TitleText>
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
