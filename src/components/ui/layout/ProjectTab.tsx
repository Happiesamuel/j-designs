import Image from "next/image";
import React, { useState } from "react";
import {motion} from 'framer-motion'
import Link from "next/link";
export default function ProjectTab() {
  const arr = [
    {
      name: "Web Design",
      id: 1,
    },
    {
      name: "App Design",
      id: 2,
    },
    {
      name: "Graphic Design",
      id: 3,
    },
  ];

  const projects = [
    {
      name: "Real Estate Homepage Design",
      id: 1,
      slug: "Web Design",
      img: "/p-2.png",
      link: 'https://www.figma.com/design/vh4mGXM9eGxppDo4Dv2x6Y/RE-Landing-Page?m=auto&t=Q90TdgtXFqp7EsIJ-1'
    },
    {
      name: "Chatting App Design",
      id: 2,
      slug: "App Design",
      img: "/p-5.png",
      link:'https://www.figma.com/design/d81PalbTc1dwB2bpfEhiNY/Chatter?m=auto&t=Q90TdgtXFqp7EsIJ-1'
    },
    {
      name: "SalesSync Web Page Design ",
      id: 3,
      slug: "Web Design",
      img: "/p-1.png",
      link:'https://www.figma.com/design/qcB8FLRHzdiZLoHN1GxOCx/Sales-Sync?m=auto&t=Q90TdgtXFqp7EsIJ-1'
    },
    {
      name: "AI Homepage Design  ",
      id: 4,
      slug: "Web Design",
      img: "/p-3.png",
      link:'https://www.figma.com/design/3wfA5umEtmdvuE9p9xhuNT/BusioAI?m=auto&t=Q90TdgtXFqp7EsIJ-6'
    },
    {
      name: "Portfolio Design ",
      id: 5,
      slug: "Web Design",
      img: "/p-4.png",
      link:'https://www.figma.com/design/lrJ6fOHkPm1J7q00Ra4pUn/JJ-s-Portfolio?m=auto&t=Q90TdgtXFqp7EsIJ-1'
    },
  ];
  const [butId, setButId] = useState<number | null>(null);
  const name = arr.find(x => x.id === butId)?.name
  const filter = butId ? projects.filter(x => x.slug === name) : projects
  return (
    <div className="my-4">
      <div className="flex justify-center  items-center gap-3">
        {arr.map((button) => (
          <div
            className={`${
              butId === button.id
                ? "bg-red-700 border-red-700"
                : "bg-[#1E1E1E] border-[#545454]"
            }  hover:bg-red-700 hover:border-red-700  transition-all duration-500 border cursor-pointer backdrop-blur-sm  rounded-[12px] text-xs py-2.5 px-5`}
            key={button.id}
            onClick={() => setButId(butId === button.id ? null : button.id)}
          >
            {button.name}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 w-full place-items-center gap-8 mt-8">
        {filter.map((proj) => (
       <motion.div
       initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
       viewport={{ once: true, amount: 0.3 }} // only once, 30% of element visible
       whileHover={{ scale: 1.01 }}
          key={proj.id}
          className="space-y-2 w-[80%] md:w-full mx-auto  "
          
          >
            <Link className="space-y-2 w-[80%] md:w-full mx-auto  " href={proj.link || ''}
>

             <div  className="bg-[#1E1E1E] md:w-[95%] h-[250px] relative aspect-auto rounded-[12px]">
              <Image alt='proj-img'  src={proj.img} fill className="p-4 object-center object-cover hover:scale-[1.05] rounded-[20px] cursor-pointer transition-all duration-500" />
            </div>
            <div className="space-y-0.5">
              <p className="text-[#FF0000] text-xs font-[600]">{proj.slug}</p>
              <p className="text-white text-sm font-[700]">{proj.name}</p>
            </div>
  </Link> 
          </motion.div>
        ))}
      </div>
    </div>
  );
}
