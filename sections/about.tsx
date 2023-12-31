"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "@/components/customTextAnimation";

import { styles } from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { delay } from "framer-motion/dom";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className={`${styles.paddings} relative z-10`} id="about">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer({})}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| About Metaversus" textStyles="text-center" />
        <motion.p
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0.2,
            duration: 1,
          })}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it's really real, you can feel what you feel in this metaverse
          world, because this is really the{" "}
          <span className="font-extrabold text-white">
            madness of the metaverse{" "}
          </span>
          of today, using only{" "}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily <span className="font-extrabold text-white">explore</span> the
          metaverse world you want, turn your dreams into reality. Let's explore
          the madness of the metaverse by scrolling down
        </motion.p>
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0.3,
            duration: 1,
          })}
        >
          <Link href="#explore">
            <Image
              src="/arrow-down.svg"
              width={18}
              height={28}
              alt="arrow down"
              className="w-[18px] h-[28px] object-contain mt-[28px]"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
