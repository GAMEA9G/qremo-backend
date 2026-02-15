
import prisma from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams
  
  const id = await params.get("id")
  const topics = await prisma.topic.findMany({
       where: { ChapterId:Number(id) },
     });
  return NextResponse.json({ topics });
}
export async function POST(request:Request) {
  const data = await request.json()
  const {id,name} = data
  const newTopic = await prisma.topic.create({
    data:{name:name ,ChapterId:id }
  })
  return NextResponse.json({ message:"New Topic Created succesfully",newTopic });
}
export async function PATCH(request:Request) {
  const data = await request.json()
  const {id,newName} = data
  const editedTopic = await prisma.topic.update({
    where:{id:id},data:{ name:newName}
  })
  return NextResponse.json({ message:"Topic Updated succesfully",editedTopic });
}
export async function DELETE(request:Request) {
  const data = await request.json()
  const {id} = data
  const topic = await prisma.topic.delete({
    where:{id:id}
  })
  return NextResponse.json({ message:"Topic Deleted succesfully",topic });
}