"use client";

import React from "react";
import { styles } from "@/styles";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer({})}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className={`${styles.heroHeading}`}
          >
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={`${styles.heroHeading}`}>Ma</h1>
            <div className={`${styles.heroDText}`}></div>
            <h1 className={`${styles.heroHeading}`}>Ness</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn({
            direction: "right",
            type: "tween",
            delay: 0.2,
            duration: 1,
          })}
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <Image
            src="/cover.png"
            alt="cover"
            width={1920}
            height={350}
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px]  z-10 relative"
          />
          <Link href="#about">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <Image
                src="/stamp.png"
                alt="stamp"
                width={155}
                height={155}
                className="sm:w-[155px] w-[100px] sm:h[155px] h-[100px] object-contain"
              />
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
