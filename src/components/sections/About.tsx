import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import SplitText from "../ui/layout/SplitText";
import Skills from "./Skills";
import AnimatedText from "../ui/layout/AnimatedText";

export default function About() {
  return (
    <section id="about" className="back h-full pt-16 md:pt-20 py-16 px-6">
      <div className="flex flex-col md:flex-row items-center x-auto  md:max-w-[90%] lg:max-w-[75%]  mx-auto my-0 max-w-[100%] gap-8 justify-between">
        <motion.div
          style={{
            // padding: "6px",
            background: "linear-gradient(180deg,  #D9D9D9 0%, #ff8233 100%)",
            borderRadius: "3000",
            display: "inline-block",
          }}
          className="rounded-full p-0 lg:p-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative hidden lg:block z-10 size-[300px] rounded-full  border-[6px] border-white">
            <Image
              placeholder="blur"
              blurDataURL="/img.png"
              src="/img.png"
              alt="Profile"
              fill
              className="w-full  h-full object-center  object-cover "
            />
          </div>
        </motion.div>
        <div className="flex gap-2 flex-col w-full lg:w-[50%]">
          <AnimatedText
            text="About Me"
            className="text-4xl text-white font-[900]"
            duration={0.5}
          />

          <SplitText className="text-sm text-zinc-200 leading-[20px] py-2">
            I am a creative UI/UX Designer with a strong passion for building
            user-friendly and aesthetically pleasing digital experiences. With
            expertise in website design, app development, and graphic design, I
            focus on creating visually appealing and functional designs that
            enhance user interaction. My goal is to bring ideas to life with
            innovative and user-centered designs.
          </SplitText>
          <Skills />
        </div>
      </div>
    </section>
  );
}
