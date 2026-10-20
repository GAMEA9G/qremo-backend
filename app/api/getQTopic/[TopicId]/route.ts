import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(props: { params: Promise<{ TopicId: string }> }) {
  const params = await props.params;
  const id = await params.TopicId;
  const qandA = await prisma.qandA.findMany({
       where: { TopicId:Number(id) },
     });
  return NextResponse.json({ qandA });
}
