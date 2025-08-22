import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import React from "react";
import { BsGithub } from "react-icons/bs";

interface ToolKitContainerProps {
  children: React.ReactNode;

  content: string;
}

const ToolKitContainer = ({ children, content }: ToolKitContainerProps) => {
  return (
    <Tooltip>
      <TooltipTrigger
        aria-label={content}
        className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
      >
        {children}
      </TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ToolKitContainer;
