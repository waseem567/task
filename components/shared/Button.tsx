import { Button } from "@/data/types/types";
import React from "react";

const ButtonComp: React.FC<any> = (props) => {
  return <button className={props.className}>{props.text}</button>;
};

export default ButtonComp;
