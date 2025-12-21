"use client";
import { SidebarItem } from "@/components/sidebar/SidebarItem";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

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
    setContranctList(prev => prev.filter(item => item._id !== id));
    await fetch(`http://localhost:3000/api/contract/${id}`, {
        method: "DELETE",
      });
  };

  const user = useUser();
  const [contractList, setContranctList] = useState<sidebarProps[]>([]);

  async function getContractsList() {
    try {
      const user_id =
        process.env.NODE_ENV == "production"
          ? user?.user?.primaryEmailAddressId
          : "12345";
      const res = await fetch(
        `http://localhost:3000/api/contract/${user_id}`
      );
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
    return <div>Loading...</div>;
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
