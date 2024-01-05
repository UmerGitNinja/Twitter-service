"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoChevronBack } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-between pl-8 shadow-md bg-[#020d14]">
      <Link className="text-neutral-500 flex items-center" href={"/"}><IoChevronBack size={20}/>Back</Link>
      <div className="flex gap-2 justify-center items-center mr-8 lg:mr-[50%]">
        <Image alt="Logo" src={"/Images/logo.png"} width={25} height={25} />
        <span className="font-bold text-blue-500">Streamkick</span>
      </div>
    </nav>
  );
};

export default Navbar;
