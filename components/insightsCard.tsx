import React from "react";
import { insights } from "@/constants";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";

type InsightsCardProps = (typeof insights)[number] & {
  index: number;
};
export default function InsightsCard({
  index,
  imgUrl,
  title,
  subtitle,
}: InsightsCardProps) {
  return (
    <motion.div
      variants={fadeIn({
        direction: "up",
        type: "string",
        delay: index * 0.5,
        duration: 1,
      })}
      initial="hidden"
      whileInView="show"
      className="flex md:flex-row flex-col gap-4"
    >
      <Image
        src={imgUrl}
        alt={title}
        width={300}
        height={300}
        quality={95}
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md-ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            {title}
          </h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {subtitle}
          </p>
        </div>
        <button className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={40}
            height={40}
            className="w-[40%] h-[40%] object-contain"
          />
        </button>
      </div>
    </motion.div>
  );
}
