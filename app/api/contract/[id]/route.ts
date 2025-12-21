import { connectDB } from "@/lib/connectDB";
import Contract from "@/lib/model/Model";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const {id} = await params;
  try {
    await connectDB();
    console.log(`FETCHING CONTRACTS OF USER ${id} FROM DATABASE`)
    const contract = await Contract.find({user_id: id});
    return NextResponse.json({ success: "true", contract }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: "false", message: `ERROR : ${error}` });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const user = await currentUser();
    const user_id = user?.primaryEmailAddressId;
    if (!user) {
      console.log("UNAUTHORISED")
      NextResponse.json({
        message: "Not Allowed!",
      });
    }
    if (!user_id) {
      console.log("NO USER ID RECEIVED")
      NextResponse.json({
        message: "Not found email!",
      });
    }
    const { id } = await params;
    console.log("RECEIVED ID: ",id)
    const contract = await Contract.findByIdAndDelete(new mongoose.Types.ObjectId(id));
    NextResponse.json(
      {
        message: "deletion success",
        contract: contract,
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to delete contract" },
      { status: 500 }
    );
  }
}
