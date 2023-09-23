"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = (props) => {
  return (
    <div className="card-block p-4 flex relative">
      <h1 className="font-semibold text-3xl">{props.heading}</h1>
      <div className="absolute top-0 right-0 gap-10 px-5 py-3 bg-[#343534] border border-zinc-600 rounded-se-lg rounded-es-lg hidden lg:flex">
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

export default Header;
