import React from "react";
import Link from "next/link";

const Footer = (props) => {
  return (
    <div className="lg:hidden fixed bottom-0 right-0 w-full flex bg-[#343534] border border-zin-600 py-4 rounded-t-2xl items-center justify-center opacity-90">
      <div className="flex gap-5">
        <Link href="/">
          <p className={`${props.heading == "About me" && "text-[#FDCE69]"}`}>
            About
          </p>
        </Link>
        <Link href="/resume">
          <p className={`${props.heading == "Resume" && "text-[#FDCE69]"}`}>
            Resume
          </p>
        </Link>
        <Link href="/portfolio">
          <p className={`${props.heading == "Portfolio" && "text-[#FDCE69]"}`}>
            Portfolio
          </p>
        </Link>
        <Link href="/links">
          <p className={`${props.heading == "Links" && "text-[#FDCE69]"}`}>
            Links
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
