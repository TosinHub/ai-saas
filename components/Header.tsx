"use client"
import { UserButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import ModeToggle from "./ThemeToggle";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <header className="top-0">
      <div className=" flex flex-row items-center pt-3 md:h-16 md:p-5 bg-gray-500/10 pb-3 pr-3 rounded-b-2xl">
        <div className="absolute 
        top-0 left-0 w-full h-96 
        bg-gradient-to-br
        from-gray-300
        to-[#00bcd1]
        rounded-md
        filter
        blur-3xl
        opacity-50
        -z-50
        
        "
        />
        <div className="">Logo</div>

        <div className="flex items-center justify-end space-x-4 flex-1  w-full">
          <ModeToggle />

          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
};

export default Header;
