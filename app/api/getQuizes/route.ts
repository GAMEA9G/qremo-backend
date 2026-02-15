import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { NextResponse } from 'next/server';


export async function GET() {

  const quiz = await prisma.quiz.findMany();



  return Response.json(quiz)
}
export async function POST(request: NextRequest){
    const data  =await request.json()
    const {name,ChapterId } = data ;
    console.log(data)
    const newSubject = await prisma.quiz.create({
      data: {ChapterId:ChapterId,name: name }
})
    return NextResponse.json({message:"Created a new Subject Successfully: ",newSubject},{status: 200})
}
export async function DELETE(request: NextRequest){
    const data  =await request.json()
    const {id } = data ;
    console.log(data)
    const deletedSubject = await prisma.quiz.delete({
      where: {id: id }
})
    return NextResponse.json({message:"Deleted a Subject Successfully: ",deletedSubject},{status: 200})
}
export async function PATCH(request: NextRequest){
    const data  =await request.json()
    const {id ,newName} = data ;
    
    console.log(data)
    const editedSubject = await prisma.quiz.updateMany({
      where: {id: Number(id) },data:{
        name:newName
      }
})
    return NextResponse.json({message:"Edited a Subject Successfully: ",editedSubject},{status: 200})
}
