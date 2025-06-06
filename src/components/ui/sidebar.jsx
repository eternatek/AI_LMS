import React, { useState } from "react";
import {
  Home,
  BookOpen,
  History,
  BarChart2,
  Users,
  Gift,
  ShoppingCart,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  LayoutDashboard,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Button } from "./button";
const navItems = [
  { label: "DashBoard", icon: Home, path: "/" },
  { label: "Take Exam", icon: BookOpen, path: "/exam" },
  { label: "Learning Path", icon: BookOpen, path: "/learning" },
  { label: "History", icon: History, path: "/history" },
  { label: "Analytics", icon: BarChart2, path: "/analytics" },
  { label: "Leaderboard", icon: Users, path: "/leaderboard" },
  { label: "Community", icon: Users, path: "/community" },
  { label: "Rewards", icon: Gift, path: "/rewards" },
  { label: "Store", icon: ShoppingCart, path: "/store" },
];
const bottomItems = [
  { label: "Settings", icon: Settings, path: "/settings" },
  { label: "Support", icon: HelpCircle, path: "/support" },
  { label: "Logout", icon: LogOut, path: "/logout" },
];
const SidebarItem = ({ icon: Icon, label, path, collapsed }) => (
  <Link
    to={path}
    className="flex items-center px-4 py-2 text-xl font-sm  hover:bg-indigoh-600 dark:hover:bg-gray-900 rounded-lg space-y-2"
  >
    <Icon className="h-6 w-6 mr-3" />
    {!collapsed && <span className=" hover:text-black">{label}</span>}
  </Link>
);
const SideBar = ({isOpen,toggleSidebar}) => {
  const collapsed=!isOpen;
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-indigo-500 text-white flex flex-col transition-all duration-300 ${
        collapsed ? "w-18 md:w-20" : "w-64 md:w-72 lg:w-80"
      }`}
    >
      {/* Toggle Button for dashboard */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-violet-50-600 mt-4 mb-4">
        {!collapsed && (
          <div className=" flex items-center text-3xl font-bold px-4 py-2 mb-4  h-20">
            ExamPrep
          </div>
        )}

        <button onClick={toggleSidebar} size="icon">
          <Menu size={24} className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-3">
        {navItems.map((item) => (
          <SidebarItem key={item.label} {...item} collapsed={collapsed} />
        ))}
      </div>
      <div className="mt-20 border-t border-gray-700 pt-4 space-y-2">
        {bottomItems.map((item) => (
          <SidebarItem key={item.label} {...item} collapsed={collapsed} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
