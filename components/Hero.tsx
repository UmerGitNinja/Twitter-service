"use client";

import React from "react";
import Navbar from "./navbar";
import SearchBar from "./search-bar";
import Image from "next/image";
import useOrderMenu from "@/hooks/useOrderMenu";
import _ from "lodash";

const Hero = () => {
  const { CreaterData } = useOrderMenu()
  return (
    <div className="max-w-[1300px] mx-auto bg-[url(/Images/background-banner.png)]">
      <Navbar />
      <div className="flex lg:flex-row flex-col relative h-auto">
        <div className="flex py-16  px-8 flex-col gap-12 lg:justify-center relative z-10 lg:h-auto">
          <div className="font-sans text-4xl sm:text-7xl flex flex-col gap-4">
            <h1 className="font-bold">
            Amplify {""}
              <span className="bg-[#3CACFE] text-transparent bg-clip-text">
              Tweets.
              </span>
            </h1>
            <h1 className="font-bold">
            Skyrocket {""}
              <span className="bg-[#3CACFE] text-transparent bg-clip-text">
              Reach.
              </span>
            </h1>
            <h1 className="font-bold">
            Enhance{" "}
              <span className="bg-[#3CACFE] text-transparent bg-clip-text">
              Influence.
              </span>
            </h1>
          </div>
          <SearchBar />
          {
       CreaterData?.name === null && (
          <div className="text-red-500">
            No user found
          </div>
        )
      }
          <div className="flex sm:flex-row flex-col items-start gap-6 sm:items-center">
            <div className="flex gap-4 text-sm sm:text-lg">
              <Image alt="Tick" src={"/tick.svg"} width={20} height={20} />
              Starting at $4.99. No contracts.
            </div>
            <div className="flex gap-4 items-center text-sm sm:text-lg">
              <Image alt="Tick" src={"/tick.svg"} width={20} height={20} />
              Performance Guaranteed or Money Back!
            </div>
          </div>
          <div className="flex h-8 items-center gap-4">
            <div className="relative h-[24px] w-[102px] min-w-[102px] md:mr-18px md:h-[34px] md:w-[159px] md:min-w-[159px]">
              <Image alt="People" className="object-contain" src={"/Images/people.png"} fill/>
            </div>
            <div className="flex gap-1 flex-[2.5] text-xs sm:text-lg font-sans">
              Exellent
              <div className="relative h-[13px] w-[67px] md:h-[23px] md:w-[120px]">
              <Image alt="Stars" className="object-contain" src={"/Images/stars.webp"} fill/>
              </div>
              4.4 out of 5
            </div>
          </div>
        </div>
        <div className="md:h-[690px] mb-8 h-[300px] w-full relative md:w-[682px] md:left-[50%] md:-translate-x-[50%] lg:translate-x-0 lg:absolute lg:right-0 lg:bottom-auto">
          <Image alt="streamkick-advantage" className="object-contain" src={"/Images/streamkick-advantage.png"} fill/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
