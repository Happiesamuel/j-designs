import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SplitText from "../ui/layout/SplitText";
import { motion } from "framer-motion";
import AnimatedText from "../ui/layout/AnimatedText";
import Link from "next/link";
export default function Hero() {
  return (
    <section id='home' className="text-white  pb-16 flex  w-full">
      <div className="flex flex-col lg:flex-row items-center mt-40 justify-between mx-auto px-6 my-0 max-w-[100%] md:max-w-[90%] lg:max-w-[75%]">
        <div className="flex flex-col w-full lg:w-[50%]  ">
          <SplitText className="text-sm font-normal"> Hi I am</SplitText>
          <SplitText className="text-[#FF0000] text-base font-semibold">
            John Joseph
          </SplitText>
          <AnimatedText
            className="text-[40px] lg:text-[70px]  md:text-[60px] leading-[40px] md:leading-[60px] lg:leading-[70px] font-[900] pt-2"
            text="UI & UX"
            duration={0.5}
          />
          <AnimatedText
            className="text-[40px] lg:text-[70px]  md:text-[60px] leading-[40px] md:leading-[60px] lg:leading-[70px] font-[900] pl-[90px] lg:pl-0  w-full lg:text-right pb-4"
            text="Designer"
            duration={0.5}
          />

          <SplitText className="text-sm text-zinc-300 leading-[20px] lg:max-w-[620px] text-justify py-2">
            Hi, I am John Joseph, a passionate UI & UX Designer dedicated to
            crafting seamless and visually appealing digital experiences. I
            specialize in designing intuitive websites and apps that enhance
            user engagement. Let&apos;s create something amazing together!
          </SplitText>
          <Link href='https://linktr.ee/jayjay_004' className="w-fit"> 
          <Button className="bg-[#FF0000] w-fit mt-3 cursor-pointer text-white">
            Hire Me
          </Button>
          </Link>
        </div>

        <div className="flex flex-col lg:items-end items-end justify-center gap-3  w-full lg:w-[50%]">
          <motion.div
            style={{
              padding: "6px",
              background: "linear-gradient(180deg, #D9D9D9 0%, #ff8233 100%)",
              borderRadius: "3000",
              display: "inline-block",
            }}
            className="rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative size-[180px] z-10 lg:size-[300px] rounded-full  border-[6px] border-white">
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

          <div className="flex cursor-pointer items-center gap-2  lg:w-[50%] text-center justify-center mx-6  pr-12 lg:mx-8 ">
               <Link href="http://twitter.com/jayjayy_004">
                    <FaXTwitter className="hover:text-red-600 transition-all duration-500 text-white text-lg cursor-pointer" />
                  </Link>
                  <Link href="http://instagram.com/justjayjay_4">
                  <FaInstagram className="hover:text-red-600 transition-all  duration-500 text-white text-lg cursor-pointer" />
                  </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
