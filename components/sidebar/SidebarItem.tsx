// "use client";

import { Clockicon } from "@/public/Clockicon";
import { Trash } from "lucide-react";
import { toast } from "sonner"

interface SidebarItemProps {
  id : string,
  time: string,
  filename?: string,
  onDelete : (id : string)=>void
}
export function SidebarItem({id, time, filename , onDelete }: SidebarItemProps) {

  

  const formatted = new Date(time).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  return (
    <div className=" w-70 border border-[#1b1b1b] p-2  hover:bg-[#222222] cursor-pointer rounded">
      <p className="truncate "> {filename} </p>

      <div className="flex gap-2 mt-1 items-center justify-between">
        <div className="flex flex-row justify-center items-center gap-1">
          <Clockicon />
          <p className="text-sm text-[#8e8e8e]">{formatted}</p>
        </div>
        <button onClick={()=>onDelete(id)} className="cursor-pointer outline rounded p-1">
          <Trash className="hover:text-red-800" size={"18"} />
        </button>
      </div>
    </div>
  );
}
