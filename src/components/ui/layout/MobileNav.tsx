import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
function MobileNav() {
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
    <div className="flex justify-between items-center lg:hidden fixed w-full left-0 px-5 py-4  backdrop-blur-md  z-[9999]">
      <div className="absolute inset-0 size-[35px] left-[3%] h-[50px] rounded-full blur-xl bg-[#FD6F00] opacity-50 scale-150 z-0" />
      <div className="relative z-10 size-[45px] rounded-full overflow-hidden border border-white">
        <Image
          src="/avatar.png"
          alt="Profile"
          fill
          className="w-full h-full object-center object-cover "
        />
      </div>
      <div className="flex gap-3 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <FaBars className="text-xl text-white cursor-pointer" />
          </SheetTrigger>
          <SheetContent
            side="right"
            style={{
              backgroundImage: "url(/g.png)",
            }}
            className="object-cover object-top rounded-bl-[20px] shadow-md backdrop-blur-lg shadow-red-950   bg-[#181818]/50  z-[9999999]  border-none flex flex-col w-[150px] h-full items-start justify-center"
          >
            <SheetTitle />
            <div className="flex flex-col gap-6 justify-start mt-8 h-full items-end w-full ">
              {navLink.map((nav) => (
                <SheetClose key={nav.name} asChild>
                  <Link
                    href={nav.route}
                    className="text-zinc-200 hover:text-red-500 transition-all  duration-500 text-xs"
                  >
                    {nav.name}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default MobileNav;
