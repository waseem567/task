import { NavOptions } from "@/data/types/types";
import Link from "next/link";
import React from "react";

const NavOption: React.FC<NavOptions> = ({ text, to }) => {
  return (
    <Link href={to}>
      <li className={`nav-option hover:text-[var(--themeColor)]`}>{text}</li>
    </Link>
  );
};

export default NavOption;
