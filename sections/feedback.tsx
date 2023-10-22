"use client";
import { styles } from "@/styles";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Feedback() {
  return (
    <section>
      <motion.div
        variants={staggerContainer({})}
        initial="hidden"
        whileFocus="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn({
            direction: "right",
            type: "tween",
            delay: 0.2,
            duration: 1,
          })}
          initial="hidden"
          whileInView="show"
          className="flex-[0.5] lg:max-x-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
              Samantha
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[18px] text-white">
              Founder | Metaversus
            </p>
          </div>
          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            “With the development of today's technology, metaverse is very
            useful for today's work, or can be called web 3.0. by using
            metaverse you can use it as anything”
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn({
            direction: "left",
            type: "tween",
            delay: 0.2,
            duration: 1,
          })}
          initial="hidden"
          whileInView="show"
          className="relative flex-1 flex justify-center items-center"
        >
          <Image
            src="/planet-09.png"
            width={500}
            height={500}
            alt="Planet-09"
            className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          />
          <motion.div
            variants={zoomIn({ delay: 0.1, duration: 1 })}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
            <Image
              src="/stamp.png"
              width={200}
              height={200}
              alt="Planet-09"
              className="w-[155px] h-[155px] object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
