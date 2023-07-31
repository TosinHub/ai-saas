import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { LucideIcon } from 'lucide-react'

  interface Props {
    icon: React.ReactNode,
    items: {
        name: string,
        icon: React.ReactNode
    }[]
  }
  

const Dropdown = ({icon, items } : Props) => {

  return (
    <DropdownMenu>
  <DropdownMenuTrigger>{icon}</DropdownMenuTrigger>
  <DropdownMenuContent className="z-[100]">
    {
        items.map((item : any, index: any) => (
            <DropdownMenuItem key={index}>{item.icon}{item.name}</DropdownMenuItem>
        )) 
    }
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default Dropdown