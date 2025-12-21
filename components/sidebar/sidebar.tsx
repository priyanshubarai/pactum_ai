"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import AnimatedBadge from "../ui/animated-badge";
import SidebarList from "./sidebarList";

export function Sidebar() {
  const user = useUser();
  const fullName = user.user?.fullName;
  const email = user.user?.primaryEmailAddress?.emailAddress;

  return (
    <div className=" h-screen shrink flex flex-col bg-[#0f0f0f] border p-5 border-[#252525]">
      <div className=" flex shrink flex-col gap-4 p-2 mb-13  items-baseline  ">
        <p className="font-bold text-2xl"> Pactum Dashboard </p>
        <AnimatedBadge text="AI Ready " color="#6366f1" />
      </div>
      <SidebarList />
      <footer className="outline shrink flex flex-row justify-start px-3 py-2 gap-2 items-center w-full  rounded mt-auto">
        <UserButton />
        <div className="flex flex-col">
          {fullName}
          <div className="text-sm">{email}</div>
        </div>
      </footer>
    </div>
  );
}
