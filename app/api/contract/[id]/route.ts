import { connectDB } from "@/lib/connectDB";
import Contract from "@/lib/model/Model";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: {
    params: {
        id: string
    }
}) {
    return NextResponse.json({message : "received"})

}



export async function DELETE(req: NextRequest, { params }: {
    params: {
        id: string
    }
}) {
    try {
        await connectDB()
        const user = await currentUser()
        const user_id = user?.primaryEmailAddressId
        
        if (!user) {
            NextResponse.json({
                message: "Not Allowed!"
            })
        }

        if(!user_id) { 
            NextResponse.json({
                message: "Not found email!"
            })
        }
        const { id } = params
        const contract = await Contract.findById(id)
        NextResponse.json({ 
            contract : contract
        })


    } catch (e) {
        return NextResponse.json(
            { error: "Failed to delete contract" },
            { status: 500 }
        );
    }

} 