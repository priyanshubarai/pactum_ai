import { Clockicon } from "@/public/Clockicon"

interface SidebarItemProps { 
    title? : string , 
    status? : string , 
    time? : string 
}
export function SidebarItem({title , status , time } : SidebarItemProps) {
    return <div
        className=" w-70 border border-[#1b1b1b] p-2  hover:bg-[#222222] cursor-pointer rounded-sm">
        <p className="truncate "> Employement Agreement - John Do pdf </p>

        <div className="flex gap-2 mt-1 items-center justify-baseline">
            <Clockicon/>
            <p className="text-sm text-[#8e8e8e]">2024-1-24</p>
        </div> 
    </div>
}