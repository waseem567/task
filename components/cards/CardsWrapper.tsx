import React from "react";
import box from "@/public/images/box.png";
import Image from "next/image";
const CardsWrapper = () => {
  return (
    <div className="relative flex justify-center items-center h-max py-20">
      <video
        autoPlay
        className="absolute left-[50%] translate-x-[-50%] w-screen"
        src="https://s3-figma-videos-production-sig.figma.com/video/1169272246591235850/TEAM/f1a0/008a/-146a-4f67-a57d-be615b0b4b80?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NxTPgPfcQ~X~S8w8A~H5-o8Pk43hRaNQUvrPwuEJlRRwXYwUO3TJQQktg-6tkwdJgyiEOt8IaxjeJhD4DHw7NV-BZCAvUvQqCwXTs~6eXGj1J0uZH5BXVslapMrAN-LjE~oFEx3Ea0VqubSwPuHMmio9BbRmJZtbU6qbYDCx2MluWEx9DrC0c~efbQLus-JhQyocuGjiASDkCBhUBYp~68L5ycZ-Kz0FFpWZZWvGMs-t6mV58~kbwsH1J5u8HKZVoTbpCJWtdAZ9S8qieF1lStTuZAj9TFHcuLr7K6pGJb58l~z~BSTLNjMpfDeqg9lhPxLFUuScnWofqnfwLjmhGQ__"
      ></video>
      {/* cards */}
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-[url('../public/images/box.png')] bg-no-repeat bg-cover w-[430px] h-[417px] z-[10]">
          <Image className="z-[100]" src={box} alt="" />
        </div>
        <div className="bg-[url('../public/images/box.png')] bg-no-repeat bg-cover w-[430px] h-[417px] z-[10] gap-5">
          <Image className="z-[100]" src={box} alt="" />
        </div>
        <div className="bg-[url('../public/images/box.png')] bg-no-repeat bg-cover w-[430px] h-[417px] z-[10]">
          <Image className="z-[100]" src={box} alt="" />
        </div>
        <div className="bg-[url('../public/images/box.png')] bg-no-repeat bg-cover w-[430px] h-[417px] z-[10]">
          <Image className="z-[100]" src={box} alt="" />
        </div>
        <div className="bg-[url('../public/images/box.png')] bg-no-repeat bg-cover w-[430px] h-[417px] z-[10]">
          <Image className="z-[100]" src={box} alt="" />
        </div>
        <div className="bg-[url('../public/images/box.png')] bg-no-repeat bg-cover w-[430px] h-[417px] z-[10]">
          <Image className="z-[100]" src={box} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardsWrapper;
