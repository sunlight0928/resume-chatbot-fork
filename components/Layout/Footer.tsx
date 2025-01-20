import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="flex h-[30px] sm:h-[50px] border-t border-neutral-300 py-2 px-8 items-center justify-center">
      <div className="font-bold text-2xl flex items-center hover:opacity-50">
        AI Chatbot
      </div>
    </div>
  ); 
};
