import React from "react";
import AnimatedText from "../ui/layout/AnimatedText";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <section id='contact' className="h-full py-12 md:py-28 px-4 flex items-center flex-col gap-12 justify-center text-white  md:max-w-[90%] lg:max-w-[75%]  mx-auto my-0 max-w-[100%]">
      <AnimatedText
        text="Lets Work Together"
        className="text-4xl text-white text-center font-[900]"
        duration={0.5}
      />
      <Link href="https://linktr.ee/jayjay_004">
        <Button className="rounded-[14px] bg-[#FF0000] cursor-pointer hover:bg-red-500">
          Contact Me
        </Button>
      </Link>
    </section>
  );
}
