import prisma from "@/app/lib/prisma";
import { NextRequest } from "next/server";
import { NextResponse } from 'next/server';

export async function DELETE(request: NextRequest){
    const data  =await request.json()
    const {id } = data ;
    console.log(data)
    const deletedUser= await prisma.user.delete({
      where: {id: id }
})
    return NextResponse.json({message:"Deleted a User Successfully: ",deletedUser},{status: 200})
}
export async function PATCH(request: NextRequest){
    const data  =await request.json()
    const {id ,newName} = data ;
    
    console.log(data)
    const editedUser = await prisma.user.update({
      where: {id: id },data:{
        name:newName
      }
})
    return NextResponse.json({message:"Edited a Subject Successfully: ",editedUser},{status: 200})
}
