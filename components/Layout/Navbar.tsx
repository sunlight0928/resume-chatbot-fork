import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar: FC = () => {
  return (
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            {/* Logo */}
            <Link href="https://resume.karzus.com/dashboard/jobs" className="flex ml-2 md:mr-3">
              <Image
                src="/media/svg/logo2.svg"
                alt="Logo"
                width={48}
                height={40}
                priority
              />
              <span className="ml-2 self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                {/* Dashboard */}
              </span>
            </Link>

            <div className="font-bold text-xl p-1 bg-white shadow-sm" style={{ fontFamily: "sans-serif" }}>
              <a href="https://resume.karzus.com/dashboard/jobs">
                <h1>RecruitGenie</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
