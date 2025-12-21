import Contract from "./model/Model";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function saveUserData(filename : string,text:string , analysis:object) {
    try{
        const user = await currentUser();
        const user_id = user?.primaryEmailAddressId || "12345";
        console.log("USERID : ",user_id);
        const newUser = new Contract({user_id,filename,text,analysis})
        await newUser.save();
        console.log("Save Successfull")
        return newUser
    }catch(err){
        console.log("ERROR in CONtroller : ",err)
    }
}

export async function getContractsById(user_id:string){
    try{
        const data = await Contract.find({user_id});
        console.log("DATA : ",data)
        return data;
    }catch(err){
        console.error("ERROR in Fecthing contracts:",err)
    }
}

export async function getAnalysis()