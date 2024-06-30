import Image from "next/image";
import React from "react";
import navbarLogo from "@/public/images/navbar_logo.png";
import NavOption from "./NavOption";
import Button from "../shared/Button";
import ButtonComp from "../shared/Button";
import { button, navbarOptions } from "@/data/compData/data";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="z-[300] absolute left-0 top-0 w-screen bg-none p-3">
      <div className="flex max-h-[103px] xl:p-5 justify-between items-center font-inter container mx-auto">
        {/* navbar logo */}
        <div className="">
          <Image
            className="block object-cover h-[50px] w-[60px] 2xl:w-[111px] 2xl:h-[103px]"
            src={navbarLogo}
            alt="navbar-logo"
          />
        </div>
        {/* navbar options */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-5 xl:gap-10">
            {navbarOptions.map((option) => (
              <NavOption text={option.text} to={option.to} key={option.id} />
            ))}
            <ButtonComp
              className="flex justify-center items-center bg-[var(--themeColor)] block lg:h-[40px] xl:w-max px-4 font-normal font-inter text-[20px] text-white rounded-[8px]"
              text={"Connect Wallet"}
            />
          </ul>
        </div>
        <div className="lg:hidden h-[50px] w-[50px] text-white flex justify-center bg-[var(--themeColor)] items-center rounded-xl">
          <GiHamburgerMenu className="text-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
