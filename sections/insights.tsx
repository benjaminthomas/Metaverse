"use client";
import { TitleText, TypingText } from "@/components/customTextAnimation";
import InsightsCard from "@/components/insightsCard";
import { insights } from "@/constants";
import { styles } from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

export default function Insights() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer({})}
        initial="hidden"
        whileFocus="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Insights" textStyles="text-center" />
        <TitleText textStyles="text-center">
          <>Insight about metaverse</>
        </TitleText>
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => (
            <InsightsCard
              key={`insight-${index}`}
              {...insight}
              index={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
