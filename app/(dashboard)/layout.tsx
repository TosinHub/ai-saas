import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const DashboardLayout = ({children}: {children : React.ReactNode}) => {
  return (
    <>
  
    

             <Header />

   


        <div className='relative'>
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:top-16 md:bottom-0 left-0 md:fixed z-[80]">
        <Sidebar />
        </div>
        <main className='relative md:pl-72'>
            <NavBar />
               {children}
        </main>
        </div>
       
    </>
  )
}

export default DashboardLayout