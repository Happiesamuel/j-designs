import React from "react";
import AnimatedText from "../ui/layout/AnimatedText";
import SplitText from "../ui/layout/SplitText";
import ProjectTab from "../ui/layout/ProjectTab";

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-full py-12 pt-20 px-4 text-white  md:max-w-[90%] lg:max-w-[85%]  mx-auto my-0 max-w-[100%]"
    >
      <AnimatedText
        text="My Projects"
        className="text-4xl text-white text-center font-[900]"
        duration={0.5}
      />
      <SplitText className="text-sm text-center max-w-[98%] mt-2 px-2 md:max-w-[80%] mx-auto  my-0  text-zinc-200 leading-[20px] py-2">
        Here are some of my latest projects, where I blend creativity with
        functionality to deliver impactful digital experiences. Each design is
        tailored to meet client needs, ensuring user-friendly and visually
        compelling solutions.
      </SplitText>
      <ProjectTab />
    </section>
  );
}
