import AnimatedBadge from "@/components/ui/animated-badge"
export function Navbar() {
    return <div
        className="p-3 bg-[#111111] border-b border-[#252525] text-white flex justify-between items-center px-10">
        Pactum Dashboard
        <AnimatedBadge
            text="AI Ready "
            color="#6366f1"
        />
    </div>


}