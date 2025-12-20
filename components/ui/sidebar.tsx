import AnimatedBadge from "./animated-badge"
import { SidebarItem } from "./SidebarItem"
import { Badge } from "@/components/ui/badge"



export function Sidebar() {
    return <div
        className=" h-screen bg-[#0f0f0f] w-85 border p-5 border-[#252525] fixed">
            <div className=" flex flex-col gap-4 p-2 mb-13  items-baseline  ">
                <p className="font-bold text-2xl"> Pactum Dashboard </p>
                <AnimatedBadge
            text="AI Ready "
            color="#6366f1"
        />
            </div>  

        <div className="flex flex-col gap-1 p-2 mb-15 items-baseline justify-center">
        <SidebarItem />
        <SidebarItem />
        <SidebarItem /> 
        <Badge variant="high">High</Badge>
        <Badge variant="low">Low</Badge>
        <Badge variant="medium">Medium</Badge>
        

        </div>
        
    </div>
}