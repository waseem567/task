import React from "react";
import Marquee from "react-fast-marquee";
const Wrapper = () => {
  return (
    <div className="h-[500px] relative">
      {/* ribbon */}
      <div className="flex justify-center items-center absolute left-0 top-[50%] translate-y-[-50%] text-[60px] h-[70px] shadow-lg rotate-[5deg] w-[120vw] translate-x-[-50px] bg-[var(--themeColor)] text-white z-[1]">
        <Marquee direction="left" speed={300} autoFill={false}>
          Creations - Rewards - Collections
        </Marquee>
      </div>
      <div className="flex justify-center items-center text-black absolute left-0 top-[50%] translate-y-[-50%] text-[60px] h-[70px] shadow-lg rotate-[-5deg] w-[120vw] translate-x-[-50px] bg-[var(--themeColor)]">
        <Marquee direction="right" speed={300} autoFill={false}>
          Unique - Limited - Valueable
        </Marquee>
      </div>
    </div>
  );
};

export default Wrapper;
