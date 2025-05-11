"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Navbar() {
  const navLink = [
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
    <div className="fixed z-[99] mx-auto my-0 max-w-[144rem] hidden lg:block   top-0 w-full cursor-pointer">
      <div className="backdrop-blur-sm w-full fixed  ">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          className="flex items-center justify-between bg-[#1E1E1E] backdrop-blur-sm mx-auto my-2 rounded-full px-2 py-2  border border-zinc-700 w-[60%] "
        >
          <motion.div
            className="relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="absolute inset-0 w-full h-full rounded-full blur-xl bg-[#FD6F00] opacity-50 scale-150 z-0" />
            <div className="relative z-10 size-[45px] rounded-full overflow-hidden border border-white">
              <Image
                src="/avatar.png"
                alt="Profile"
                fill
                className="w-full h-full object-center object-cover "
              />
            </div>
          </motion.div>
          <div className="flex items-center gap-8">
            {navLink.map((nav) => (
              <Link href={nav.route} key={nav.name} className="hover:text-red-600 transition-all cursor-pointer duration-500 text-white text-xs">
                {nav.name}
              </Link>
            ))}
          </div>
          <div className="relative">
            <motion.div
              className="relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="absolute inset-0 w-full h-full rounded-full blur-xl bg-[#FD6F00] opacity-50 scale-150 z-0" />
              <div className="relative z-10 size-[45px] rounded-full overflow-hidden border border-white">
                <Image
                  src="/avatar.png"
                  alt="Profile"
                  fill
                  className="w-full h-full object-center object-cover "
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
