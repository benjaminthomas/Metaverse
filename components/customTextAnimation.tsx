"use client";

import React from "react";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";

interface TypingTextProps {
  title: string;
  textStyles?: string;
}

interface TitleTextProps {
  children?: React.ReactNode;
  textStyles?: string;
}

export const TypingText = ({ title, textStyles }: TypingTextProps) => (
  <motion.p
    variants={textContainer}
    initial="hidden"
    whileInView="show"
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span key={index} variants={textVariant2}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ children, textStyles }: TitleTextProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {children}
  </motion.h2>
);
