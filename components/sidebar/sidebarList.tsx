"use client";
import { SidebarItem } from "@/components/sidebar/SidebarItem";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";

interface sidebarProps {
  _id: string;
  user_id: string;
  filename: string;
  text: string;
  analysis: object;
  createdAt: string;
  updatedAt: string;
}

const SidebarList = () => {
  const handleDelete = async (id: string) => {
    setContranctList((prev) => prev?.filter((item) => item._id !== id) ?? null);
    await fetch(`/api/contract/${id}`, {
      method: "DELETE",
    });
  };

  const user = useUser();
  const [contractList, setContranctList] = useState<sidebarProps[] | null>(
    null
  );

  async function getContractsList() {
    try {
      const user_id =
        process.env.NODE_ENV == "production"
          ? user?.user?.primaryEmailAddressId
          : "12345";
      const res = await fetch(`/api/contract/${user_id}`);
      const data = await res.json();
      setContranctList(data.contract);
    } catch (err) {
      console.error("ERROR IN SIDEBAR : ", err);
    }
  }
  useEffect(() => {
    getContractsList();
  }, []);

  if (!contractList) {
    return (
      <div className="flex flex-col">
        <div className="space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className={
                i % 2 === 0 ? "h-4 w-62.5 rounded-full" : "h-4 w-50.5 rounded-full"
              }
            />
          ))}
        </div>
      </div>
    );
  }

  if (contractList.length === 0) {
    return <div>No Contracts History</div>;
  }

  return (
    <div className="flex shrink flex-col gap-1 p-2 mb-15">
      {contractList.map((item: sidebarProps) => (
        <SidebarItem
          key={item._id}
          id={item._id}
          time={item.createdAt}
          filename={item.filename}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default SidebarList;
