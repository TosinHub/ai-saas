"use client";

import Image from "next/image";
import Link from "next/link";
import React, {useCallback} from "react";
import { Montserrat } from "next/font/google";
import {usePathname, useRouter} from "next/navigation"


import { cn } from "@/lib/utils";
import {Settings, Code, Music,VideoIcon, ImageIcon, LayoutDashboard, MessageSquare, MoreVertical, Star } from "lucide-react";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });


const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Coversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generate",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generate",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-200",
  },
  {
    label: "Music Generate",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generate",
    icon: Code,
    href: "/code",
    color: "text-green-200",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "",
  },
];

const Sidebar = () => {

  const pathname = usePathname();
  const router = useRouter();

  const handleStarClick = useCallback((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation();
    // Your star icon click logic here
    alert('star');
  }, []);

  const handleMoreVerticalClick = useCallback((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation();
    // Your more vertical icon click logic here
  }, []);
  return (
    <div className="space-y-4 py-4 flex flex-col h-full  bg-gray-900  text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>

          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Genius
          </h1>
        </Link>
        <div className="space-y-1">
            {
                routes.map((route) =>(
                    <div 
                    onClick={() => router.push(route.href)}
                    key={route.href} 
                    className={cn("text-sm flex pl-3 py-3 w-full justify-start font-medium cursor-pointer hover:text-blue-800 hover:bg-white rounded-lg transition",
                    pathname === route.href ? "text-white bg-white/10" : "text-zinc-400" 
                    
                    )}>
                  <div className="flex items-center flex-1" >

                    <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                    {route.label}
                  </div>
                  <div className=" flex justify-end space-x-0">
                     <Star fill="gold" onClick={handleStarClick}  className="hover:bg-gray-200 rounded-full p-1"/>

                  <MoreVertical onClick={handleMoreVerticalClick}  className="hover:bg-gray-200 rounded-full"/>
                  </div>
                 
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
