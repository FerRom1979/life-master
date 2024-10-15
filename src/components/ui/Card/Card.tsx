import { getPriorityStyles } from "@/utils/getPriorityStyles";
import React from "react";

import { ICardProps } from "./types";

const Card = ({ id, title, subTitle, priority }: ICardProps) => {
  return (
    <div className="relative h-36 w-96 rounded-lg bg-[#EEF7FB] p-5" onClick={() => console.log(id)}>
      <p>{title}</p>
      <p className="mt-4 text-gray-400">{subTitle}</p>
      <p className={`absolute bottom-2 right-2 h-2 w-20 rounded-full ${getPriorityStyles(priority)}`}></p>
    </div>
  );
};

export default Card;
