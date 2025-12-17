import Contract from "./model/Model";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function saveUserData(text:string , analysis:object) {
    try{
        const user = await currentUser();
        const user_id = user?.primaryEmailAddressId || "12345";
        console.log("USERID : ",user_id);
        const newUser = new Contract({user_id,text,analysis})
        await newUser.save();
        console.log("Save Successfull")
        return NextResponse.json({newUser},{status: 201})
    }catch(err){
        console.log("ERROR in CONtroller : ",err)
    }
}