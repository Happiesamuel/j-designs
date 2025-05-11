import React from "react";
import AnimatedText from "../ui/layout/AnimatedText";
import SplitText from "../ui/layout/SplitText";
import { motion } from "framer-motion";
export default function Testimonials() {
  const arr = [
    {
      id: 1,
      name: "Bayo",
      content:
        "“John designed our marketing materials, and they turned out AMAZING! Clean, eye-catching, and perfectly aligned with our brand. Will definitely work with him again.“",
    },
    {
      id: 2,
      name: "Sales Sync",
      content:
        "“Our website was outdated, and John gave it a fresh, modern look. It's not just beautiful—it's actually converting visitors into customers. Couldn't be happier!“",
    },
    {
      id: 3,
      name: "Kingsley",
      content:
        "“I needed a sleek, modern logo, and John delivered beyond expectations. He just gets branding! My business now looks more professional than ever.“",
    },
    {
      id: 4,
      name: "Stephanie",
      content:
        "“John completely transformed our app! The new design is so smooth and intuitive—our users love it. Engagement has skyrocketed since the update!“",
    },
  ];
  return (
    <section
      id="testimonials"
      className="h-full py-12 pt-20 px-4 text-white  md:max-w-[90%] lg:max-w-[75%]  mx-auto my-0 max-w-[100%]"
    >
      <AnimatedText
        text="Testimonials"
        className="text-4xl text-white text-center font-[900]"
        duration={0.5}
      />
      <SplitText className="text-sm text-center max-w-[98%] mt-2 px-2 md:max-w-[80%] mx-auto  my-0  text-zinc-200 leading-[20px] py-2">
        Nothing speaks louder than client satisfaction! Here&apos;s what my
        clients say about working with me—highlighting my commitment to
        high-quality design, creativity, and professionalism.
      </SplitText>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        {arr.map((test) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // only once, 30% of element visible
            whileHover={{ scale: 1.01 }}
            key={test.id}
            className="bg-[#1E1E1E] rounded-[14px] p-6 space-y-2 text-white text-sm"
          >
            <p>{test.content}</p>
            <p>{test.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
