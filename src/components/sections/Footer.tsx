import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  const footLink = [
    {
      name: "Home",
      route: "#home",
    },
    {
      name: "About Me",
      route: "#about",
    },
    {
      name: "Services",
      route: "#services",
    },
    {
      name: "Projects",
      route: "#projects",
    },
    {
      name: "Testimonials",
      route: "#testimonials",
    },
    {
      name: "Contact",
      route: "#contact",
    },
  ];
  return (
    <div className="relative">
      <div className="bg-[#1E1E1E] py-8 md:py-12 relative gap-6 md:gap-12 flex flex-col items-center justify-center w-full">
        <div className="flex items-center gap-2  relative">
          <h2 className="text-xl md:text-3xl text-[#8F8E8D]  text-center font-[900]">
            J-DESIGNS
          </h2>
          <div className="absolute inset-0 w-[45px] h-full rounded-full blur-xl left-[80%] bg-[#FD6F00] opacity-50 scale-150 z-0" />
          <div className="relative z-10 size-[35px] md:size-[45px] rounded-full overflow-hidden border border-white">
            <Image
              src="/avatar.png"
              alt="Profile"
              fill
              className="w-full h-full object-center object-cover "
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-5 md:gap-8">
          {footLink.map((nav) => (
            <Link href={nav.route}
              key={nav.name}
              className="hover:text-red-600 transition-all cursor-pointer duration-500 text-white text-xs md:text-sm"
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2  text-center justify-center ">
          <Link href="http://twitter.com/jayjayy_004">
            <FaXTwitter className="hover:text-red-600 transition-all duration-500 text-white text-lg cursor-pointer" />
          </Link>
          <Link href="http://instagram.com/justjayjay_4">
          <FaInstagram className="hover:text-red-600 transition-all  duration-500 text-white text-lg cursor-pointer" />
          </Link>
        </div>
      </div>
      <p className="font-normal text-xs py-4 text-white text-center">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#FF0000] font-[800]"> JayJay</span> All Rights
        Reserved , Inc.
      </p>
    </div>
  );
}
