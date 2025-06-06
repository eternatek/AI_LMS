import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import SideBar from "@/components/ui/sidebar";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
 useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, []);
  return (
    <div className="flex  min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } transition-all duration-300 h-screen fixed md:relative z-50 bg-violet-700 text-white`}
      >
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isSidebarOpen ? "md:ml-20" : "md:ml-10"
        } `}
      >
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-40">
          <Header toggleSidebar={toggleSidebar} />
        </div>

        {/* Content */}
        <div className="mt-16 flex-1 overflow-y-auto ">
          <main>
            <Outlet />
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
