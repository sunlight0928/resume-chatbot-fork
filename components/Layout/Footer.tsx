import { FC } from "react";

export const Footer: FC = () => {
  return (
    <>
      <p className="my-10 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://resume.karzus.com/dashboard/jobs" className="hover:underline">
        RecruitGenie
        </a>
        . All rights reserved.
      </p>
    </>
  ); 
};
