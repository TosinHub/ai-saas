import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="grid min-h-screen grid-rows-header bg-zinc-100">
        <Header />
      
        <div className="grid md:grid-cols-sidebar">
      <div className="hidden md:flex md:w-72 md:flex-col md:top-16 md:bottom-0 left-0 md:fixed z-[80]">
          <Sidebar />
        </div>
        <div className="md:pl-72 w-full mt-16 overflow-y-auto mb-7 bg-white">
          <main>
          <NavBar />
            {children}</main> {/* Add overflow-y-auto */}
        </div>
      </div>
      </div>
    </>
  );
};

export default DashboardLayout;