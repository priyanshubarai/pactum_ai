"use client"

import AnimatedBadge from "../ui/animated-badge";
import SidebarList from "./sidebarList";


export function Sidebar() {


  return (
    <div className=" h-screen bg-[#0f0f0f] w-85 border p-5 border-[#252525]">
      <div className=" flex flex-col gap-4 p-2 mb-13  items-baseline  ">
        <p className="font-bold text-2xl"> Pactum Dashboard </p>
        <AnimatedBadge text="AI Ready " color="#6366f1" />
      </div>
      <SidebarList />
      
    </div>
  );
}
