"use client";

import SidebarItem from "@/components/sidebarList";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const SidebarList = ({ ContractsList }: any) => {

  if (!ContractsList) {
    return <div>Loading...</div>;
  }

  if (ContractsList.length === 0) {
    return <div>No Contracts History</div>;
  }

  return (
    <div className="flex flex-col gap-1 p-2 mb-15">
      {ContractsList.map((item: any) => (
        <SidebarItem
          key={item._id}
          title={item.title}
          status={item.status}
          time={item.createdAt}
          filename={item.filename}
        />
      ))}
    </div>
  );

//   return (
//     <div className="flex flex-col gap-1 p-2 mb-15 items-baseline justify-center">
//       {list &&
//         list.map((item: any) => (
//           <SidebarItem
//             key={item._id}
//             title={item.title}
//             status={item.status}
//             time={item.createdAt}
//             filename={item.filename}
//           />
//         ))}
//       {!list && <div>No Contract History</div>}
//       <Badge variant="high">High</Badge>
//       <Badge variant="low">Low</Badge>
//       <Badge variant="medium">Medium</Badge>
//     </div>
//   );
};

export default SidebarList;
