import React from "react";
import ButtonComp from "../shared/Button";
import { visionButton } from "@/data/compData/data";

const Vision = () => {
  return (
    <div className="text-white h-screen flex flex-col items-center justify-center gap-10">
      <div className="absolute h-screen w-full overflow-hidden z-[-1] opacity-35">
        <video
          className="object-cover z-50 w-full h-screen"
          src="/videos/vision.mp4"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline
        />
      </div>
      <div className="container text-white h-screen flex flex-col items-center justify-center gap-10">
        <h1 className="text-[30px] md:text-[60px] md:leading-[65px] leading-[35px] text-center md:text-start ">
          Our Vision
        </h1>
        <p className="text-center w-[80%] font-inter text">
          The vision of 3dotlink is to be a transformative force at the
          intersection of culture, art, and technology within the Web3
          landscape. We envision a digital realm where the rich tapestry of
          cultural traditions, especially the intricate artistry of masks from
          diverse ethnic groups, is seamlessly woven into the fabric of the
          digital age. Our vision extends far beyond mere NFTs; it's about the
          preservation and celebration of cultural heritage in a dynamic,
          ever-evolving digital space. We strive to empower artists and
          creators, offering them a unique canvas to bring their cultural art to
          life while harnessing the capabilities of AI technology. We see
          3dotlink as a bridge between the past and the future, where ancient
          rituals and modern innovation converge, enriching our collective human
          experience and fostering a global community united by a shared
          appreciation for the art, history, and culture that defines us. In
          essence, our vision is to unlock the immense potential of cultural art
          within Web3, inviting the world to explore, create, and treasure the
          beauty of diverse traditions through the digital realm.
        </p>
        <ButtonComp
          text={"Read More"}
          className="font-inter bg-[var(--themeColor)] w-[154px] h-[46px] rounded-[8px] "
        />
      </div>
    </div>
  );
};

export default Vision;
