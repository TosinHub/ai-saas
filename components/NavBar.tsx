"use client"



import MobileSidebar from '@/components/MobileSidebar';
import { Switch } from './ui/switch';
import { MoreVertical, SearchIcon } from 'lucide-react';
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });


import React from "react";
import { cn } from '@/lib/utils';


const Header = () => {


  return (
    <div className="flex items-center  justify-between bg-white border-b border-solid h-16 border-gray-200">

        <div className="ml-3">
          <div className="flex md:pr-44">
                    <MobileSidebar />
                    <span className={cn('hidden md:flex', montserrat.className)} >
                         Home/ Workspace/ Test
                    </span>
                 
           
          </div>

        </div>

        <div className="flex-1">
          <div className=" h-10 mx-auto flex items-center bg-opacity-80 bg-gray-100 rounded-lg shadow-sm">
      
              <SearchIcon />
       
            <input
              type="text"
              placeholder="Search in Drive"
              className="w-full h-full px-2 bg-transparent focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center mx-4  md:ml-32 space-x-4">
          <Switch />
            <MoreVertical className="cursor-pointer hover:bg-gray-200 rounded-full transform scale-110" />
          </div>
      </div>
  );
};

export default Header;




