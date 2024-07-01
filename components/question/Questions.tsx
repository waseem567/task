import Image from "next/image";
import React from "react";
import qImg from "@/public/images/question_img.png";
const Questions = () => {
  return (
    <div className="bg-img mx-auto bg-no-repeat bg-cover w-screen max-w-screen overflow-x-hidden py-5 px-3">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:p-2">
          <div className="lg:w-[600px] gap-3 flex justify-center items-start flex-col">
            <div className="text-[30px] md:text-[48px] md:leading-[30px] leading-[35px] text-center text-white w-full">
              Have any question?
            </div>
            <div className="text-center font-inter my-5 text-white">
              Curious about 3dotlink? Explore our frequently asked questions to
              find answers
            </div>

            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 max-w-[300px] dark:border-gray-700 w-full">
              <ul className="flex -mb-px justify-between">
                <li className="me-2">
                  <button
                    className="inline-block p-4 text-[var(--themeColor)] border-b-2 border-[var(--themeColor)] rounded-t-lg active  dark:border-[var(--themeColor)]"
                    aria-current="page"
                  >
                    General
                  </button>
                </li>
                <li className="me-2">
                  <button
                    className="inline-block p-4 text-[white] rounded-t-lg active dark:text-white"
                    aria-current="page"
                  >
                    Pre Ice
                  </button>
                </li>
                <li className="me-2">
                  <a
                    href="#"
                    className="inline-block p-4 text-white rounded-t-lg active dark:text-white"
                    aria-current="page"
                  >
                    Token
                  </a>
                </li>
                <li className="me-2">
                  <a
                    href="#"
                    className="inline-block p-4 text-white rounded-t-lg active dark:text-white"
                    aria-current="page"
                  >
                    Client
                  </a>
                </li>
                <li className="me-2">
                  <a
                    href="#"
                    className="inline-block p-4 text-white rounded-t-lg active dark:text-white"
                    aria-current="page"
                  >
                    Legal
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col w-full gap-5">
              <div className="text-white bg-[#FD164080] rounded-[8px] p-3 w-full cursor-pointer">
                <div className="my-5 text-[#FD1640]">
                  {" "}
                  What kind of art does 3dotlink support?
                </div>
                <div className="font-inter text-[18px] font-light">
                  Artists and creators can use our AI-integrated platform to
                  generate NFTs by providing specific inputs, such as the
                  desired features and elements for their digital artwork.
                </div>
              </div>
              <div className="text-white bg-[#FD164080] rounded-[8px] p-3 w-full cursor-pointer">
                <div className="my-5 text-white">
                  {" "}
                  What kind of art does 3dotlink support?
                </div>
              </div>
              <div className="text-white bg-[#FD164080] rounded-[8px] p-3 w-full cursor-pointer">
                <div className="my-5 text-white">
                  {" "}
                  How are digital artworks verified for authenticity?
                </div>
              </div>
              <div className="text-white bg-[#FD164080] rounded-[8px] p-3 w-full cursor-pointer">
                <div className="my-5 text-white">
                  {" "}
                  Can artists access and manage their collections on 3dotlink?
                </div>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="h-full hidden lg:flex">
            <Image className="object-cover" src={qImg} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
