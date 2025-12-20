import AnimatedBadge from "./ui/animated-badge";
import SidebarList from "./sidebarList";
import { currentUser } from "@clerk/nextjs/server";
import ContractsOfUser from "@/sample_getContractsOfUser";

export async function Sidebar() {

    let ContractsList = ContractsOfUser.contract;
    if(process.env.NODE_ENV=="production"){
        try{
            const user = await currentUser();
            const user_id = process.env.NODE_ENV=="production" ? user?.primaryEmailAddressId : "12345";
            const res = await fetch(`http://localhost:3000/api/contract/${user_id}`)
            const data = await res.json();
            ContractsList = data?.contract;
        }catch(error){
            console.error("ERROR : CANT fetch User Contracts",error)
        }
    }


  return (
    <div className=" h-screen bg-[#0f0f0f] w-85 border p-5 border-[#252525] fixed ">
      <div className=" flex flex-col gap-4 p-2 mb-13  items-baseline  ">
        <p className="font-bold text-2xl"> Pactum Dashboard </p>
        <AnimatedBadge text="AI Ready " color="#6366f1" />
      </div>

      <SidebarList ContractsList={ContractsList} />
      
    </div>
  );
}
