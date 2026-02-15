import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { NextResponse } from 'next/server';


export async function GET() {

  const syllabus = await prisma.syllabus.findMany();



  return Response.json(syllabus)
}
export async function POST(request: NextRequest){
    const data  =await request.json()
    const {name } = data ;
    console.log(data)
    const newSyllabus = await prisma.syllabus.create({
      data: {name: name }
})
    return NextResponse.json({message:"Created a new Syllabus Successfully: ",newSyllabus},{status: 200})
}
export async function DELETE(request: NextRequest){
    const data  =await request.json()
    const {id } = data ;
    console.log(data)
    const deletedSyllabus = await prisma.syllabus.delete({
      where: {id: id }
})
    return NextResponse.json({message:"Deleted a Syllabus Successfully: ",deletedSyllabus},{status: 200})
}
export async function PATCH(request: NextRequest){
    const data  =await request.json()
    const {id ,newName} = data ;
    
    console.log(data)
    const editedSyllabus = await prisma.syllabus.updateMany({
      where: {id: Number(id) },data:{
        name:newName
      }
})
    return NextResponse.json({message:"Edited a Syllabus Successfully: ",editedSyllabus},{status: 200})
}
