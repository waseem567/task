"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IPhaseItem, List } from "./Roadmap";

const Phase = ({ phaseItem }: { phaseItem: IPhaseItem }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex mx-auto max-w-max">
      <div className="">
        <DotCircle />
        {phaseItem.id === 4 ? "" : <Line />}
      </div>
      <div className="ml-[31px] relative" data-aos={phaseItem.dataAos}>
        <div
          className={`bg-[#FD16404D] relative bottom-[9px] max-w-[200px] xl:max-w-[562px] h-[57px] text-xl flex items-center text-[#FD1640] pl-[29px] ${phaseItem.style1}`}
        >
          {phaseItem?.phase}
        </div>
        <div className="absolute -right-2 top-[5.79rem]" data-aos="fade-left">
          <img src="/images/Vector-13.png" alt="" />
        </div>
        <div
          className={`xl:w-[1200px] lg:w-[843px] sm:w-[650px]  w-[280px] h-[180px] xl:h-[140px] bg-[#FD1640] xl:p-[10px] flex items-center relative mt-[44.88px] ${phaseItem?.style2}`}
        >
          <ul
            className={`font-inter text-white text-[14px] lg:text-base xl:text-xl list-disc ${phaseItem?.style5}`}
          >
            {phaseItem?.list?.map((item: List) => {
              return <li key={item?.id}>{item?.title}</li>;
            })}
          </ul>
          <div
            className={`flex justify-center items-center relative ${phaseItem?.style3}  md:w-[484px] w-[242px] md:block hidden`}
          >
            <img
              src={phaseItem?.image}
              alt={phaseItem?.phase}
              className="z-10"
            />
            <img
              src="/images/file.png"
              alt="blue-smoke"
              className={`${phaseItem?.style4} absolute -z-10 -top-9 w-[484px] -left-[64px]`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase;

const DotCircle = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="flex flex-col justify-center hover:animate-spin z-20 relative my-1"
      data-aos="fade-up"
    >
      <div className="w-[38px] h-[38px] bg-[#FD1640] rounded-3xl flex justify-center">
        <div className="w-[28px] h-[28px] bg-[#D9D9D9] rounded-3xl"></div>
      </div>
    </div>
  );
};

const Line = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="h-[381px] w-[0px] border-[4px] ml-[15px] border-[#FD1640] border-dashed"
    ></div>
  );
};
