import { exploreWorlds } from "@/constants";
import { styles } from "@/styles";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type ExploreCardProps = (typeof exploreWorlds)[number] & {
  index: number;
  active: string;
  handleClick: (id: string) => void;
};

export default function ExploreCard({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}: ExploreCardProps) {
  return (
    <motion.div
      variants={fadeIn({
        direction: "right",
        type: "spring",
        delay: 0.5 * index,
        duration: 0.75,
      })}
      className={`relative ${
        active === id ? "lg-flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt={title}
        width={170}
        height={700}
        quality={95}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <h3 className="font-semibold text-[26px] sm:text-[18px] text-white absolute z-0 lg:bottom-20 lg:-rotate-90">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <Image
              src="/headset.svg"
              alt="headset"
              width={40}
              height={40}
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
            Enter the metaverse
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
}
