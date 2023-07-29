import React from 'react'
import MobileSidebar from '@/components/MobileSidebar'
import { Switch } from './ui/switch'
import { MoreVertical } from 'lucide-react'


const NavBar = () => {
  return (
    <div className='flex items-center justify-between mt-1 md:p-4 bg-blue-200 h-12 rounded-lg'>
       <div>
          <MobileSidebar />   
       <p>Beradffdfed</p>
       </div>
     <div className='flex'>
       <Switch />
     <MoreVertical  className="hover:bg-gray-200 rounded-full"/>
     </div>
    </div>
  )
}

export default NavBar