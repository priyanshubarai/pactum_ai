"use client"

import { Clockicon } from "@/public/Clockicon";

interface SidebarItemProps {
  title?: string;
  status?: string;
  time?: string;
  filename?: string;
}
export function SidebarItem({
  title,
  status,
  time,
  filename,
}: SidebarItemProps) {
  return (
    <div className=" w-70 border border-[#1b1b1b] p-2  hover:bg-[#222222] cursor-pointer rounded-sm bg-blue-700">
      <p className="truncate "> filename </p>

      <div className="flex gap-2 mt-1 items-center justify-baseline">
        <Clockicon />
        <p className="text-sm text-[#8e8e8e]">time</p>
      </div>
    </div>
  );
}
