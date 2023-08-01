"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {usePathname, useRouter} from "next/navigation"

import {ArrowRight, Settings, Code, Music,VideoIcon, ImageIcon, LayoutDashboard, MessageSquare, MoreVertical, Star } from "lucide-react";
import { useEffect, useState } from "react";

const tools = [
  {
    label : "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation"
  },
  {
    label : "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/conversation"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    bgColor: "bg-pink-700/10",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    bgColor: "bg-orange-200/20",
    color: "text-orange-200",
  },

  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    bgColor: "bg-green-100/50",
    color: "text-green-400",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    bgColor: "bg-pink-700/10",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    bgColor: "bg-orange-200/20",
    color: "text-orange-200",
  },

  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    bgColor: "bg-green-100/50",
    color: "text-green-400",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    bgColor: "bg-pink-700/10",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    bgColor: "bg-orange-200/20",
    color: "text-orange-200",
  },

  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    bgColor: "bg-green-100/50",
    color: "text-green-400",
  },
]


export default function DashboardPage() {

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  return (
    <div>

    <div className='mb-8 space-x-4 mt-8 '>
      <h2 className='text-2xl md:text-4xl font-bold text-center'>
       Explore the Power of AI
      </h2>
      <p className="text-muted-foreground text-sm md:text-lg text-center">Chat with the smartest AI - Experience the power of AI</p>
    </div>
    <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {
            tools.map((tool)=>(
              <Card 
                    onClick={()=> router.push(tool.href)}
                    key={tool.href}
                    className=" p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit round-md", tool.bgColor)}>
                    <tool.icon className={cn("w-8 h-8", tool.color)}/>

                  </div>

                  <div className="font-semibold">
                    {tool.label}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5"/>
              </Card>
            ))
          }
    </div>
    </div>
  )
}
