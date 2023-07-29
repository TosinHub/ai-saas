import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import React from 'react'

interface Props  {
    title: string,
    description: string,
    icon: LucideIcon,
    iconColor?: string,
    bgColor?: string

}


const Heading = ({
    title,
    description,
    icon : Icon,
    iconColor,
    bgColor

} : Props) => {
  return (

    <div className="px-3 lg:px-4 flex items-center gap-x-3 mb-8 pt-3">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
            <Icon className={cn("w-10 h-10", iconColor)} />
        </div> 

        <div>
         <h2 className="text-3xl font-bold">
            {title}
        </h2>
        <p className="text-sm text-muted-foreground">
            {description}
        </p>
    </div>
    </div>

  )
}

export default Heading