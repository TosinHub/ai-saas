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
      <div className=" fixed
       w-full flex items-center
        px-4 h-16 bg-gray-500/10 
        rounded-b-2xl z-10">
        <div className="">Logo</div>

        <div className="flex items-center justify-end space-x-4 flex-1  w-full">
          <ModeToggle />

          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
  );
};

export default Header;
