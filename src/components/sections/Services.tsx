"use client";
import React from "react";
import AnimatedText from "../ui/layout/AnimatedText";
import SplitText from "../ui/layout/SplitText";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Services() {
  const arr = [
    {
      svg: "/ui.png",
      title: "UI/UX",
      content:
        "Enhancing user experiences through intuitive and engaging interface designs that maximize usability and satisfaction.",
    },
    {
      svg: "/grap.png",
      title: "Graphic Design ",
      content:
        "Creating compelling visuals, branding materials, and graphic assets that elevate business identity and communication.",
    },
    {
      svg: "/web.png",
      title: "Web Design ",
      content:
        "Crafting visually stunning and highly functional websites that provide seamless user interactions and exceptional performance.",
    },
    {
      svg: "/app.png",
      title: "App Design",
      content:
        "Designing interactive and user-friendly mobile applications that enhance engagement and deliver outstanding digital experiences.",
    },
  ];
  return (
    <section
      id="services"
      className="h-full py-12 pt-20 px-4 text-white  md:max-w-[90%] lg:max-w-[75%]  mx-auto my-0 max-w-[100%]"
    >
      <AnimatedText
        text="Services"
        className="text-4xl text-white text-center font-[900]"
        duration={0.5}
      />
      <SplitText className="text-sm text-center max-w-[98%] mt-2 px-2 md:max-w-[80%] mx-auto  my-0  text-zinc-200 leading-[20px] py-2">
        I offer a range of design services to help businesses create seamless
        and visually appealing digital experiences. Whether you&apos;re looking
        for a stunning website, an engaging mobile app, or eye-catching
        graphics, I&apos;ve got you covered.
      </SplitText>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 lg:place-items-start place-items-center lg:grid-cols-4 mt-4">
        {arr.map((skill, i) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // only once, 30% of element visible
            whileHover={{ scale: 1.03 }}
            key={skill.title}
            className="max-w-[90%] md:max-w-[100%] w-full relative bg-[#1E1E1E] h-[220px] lg:h-[260px] space-y-2 p-4 rounded-[16px] text-white"
          >
            <div className="absolute bottom-0 space-y-2">
              <Image
                src={skill.svg}
                alt="svg"
                width={i === 3 ? 35 : 45}
                height={i === 3 ? 35 : 45}
              />
              <h3 className={`text-lg font-[600]    text-white `}>
                {skill.title}
              </h3>
              <p className="text-zinc-300 text-justify  pr-4 mb-4 text-sm font-normal">
                {skill.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
