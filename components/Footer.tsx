"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-16">
      <Link
        className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href=""
      >
        Github&nbsp;&#129109;
      </Link>
      <Link
        href=""
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        <span className="pr-2">Made By
</span>
        <Image src="logo-white.svg" width={20} height={20} alt="" />
        <span className="pl-1 font-medium text-slate-200">SHASHANK</span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/ushanagalla-shashank-a1a95129b/"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        Linked-In&nbsp;&#129109;
      </Link>
    </div>
  );
}

export default Footer;