import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { NextResponse } from 'next/server';


export async function GET() {

  const subjects = await prisma.subjects.findMany();



  return Response.json(subjects)
}
export async function POST(request: NextRequest){
    const data  =await request.json()
    const {name,SyllabusId } = data ;
    console.log(data)
    const newSubject = await prisma.subjects.create({
      data: {SyllabusId:SyllabusId,name: name }
})
    return NextResponse.json({message:"Created a new Subject Successfully: ",newSubject},{status: 200})
}
export async function DELETE(request: NextRequest){
    const data  =await request.json()
    const {id } = data ;
    console.log(data)
    const deletedSubject = await prisma.subjects.delete({
      where: {id: id }
})
    return NextResponse.json({message:"Deleted a Subject Successfully: ",deletedSubject},{status: 200})
}
export async function PATCH(request: NextRequest){
    const data  =await request.json()
    const {id ,newName} = data ;
    
    console.log(data)
    const editedSubject = await prisma.subjects.updateMany({
      where: {id: Number(id) },data:{
        name:newName
      }
})
    return NextResponse.json({message:"Edited a Subject Successfully: ",editedSubject},{status: 200})
}
