import React from "react";
import ButtonComp from "../shared/Button";
import { heroButton } from "@/data/compData/data";
import YouTube from "react-youtube";

const Hero = () => {
  return (
    <div className="h-screen min-h-[600px] relative w-screen flex flex-col justify-center">
      <div className="absolute h-screen w-full overflow-hidden z-[-1] opacity-35">
        <video
          className="object-cover z-50 w-full h-screen"
          src="/videos/hero.mp4"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline
        />
      </div>
      <div className="container xl:p-5 mx-auto text-white h-full flex justify-center flex-col">
        <div className="flex gap-8 flex-col items-center md:items-start justify-center">
          <h1 className="text-[30px] md:text-[60px] md:leading-[61px] leading-[35px] text-center md:text-start ">
            Generate with AI,
            <br /> Scan, Mint, Sell <br />& Trade
          </h1>
          <p className="font-inter font-normal text-[10px] md:text-[20px] text-center md:text-start px-5 md:px-0">
            Explore 3dotlink, where Web3 meets cultural legacy, and
            <br />
            AI breathes life into NFTs
          </p>
          <div className="flex justify-center items-center">
            {" "}
            <ButtonComp
              text={"Buy NFT's"}
              className="bg-[var(--themeColor)] py-4 px-10 rounded-[8px] font-inter"
            />
          </div>
        </div>
        <div className="h-[25px] bg-[#ed213a] opacity-50 absolute bottom-0 mx-auto w-screen left-[50%] translate-x-[-50%]"></div>
      </div>
    </div>
  );
};

export default Hero;
