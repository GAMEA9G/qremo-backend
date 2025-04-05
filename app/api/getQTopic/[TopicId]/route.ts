import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, props: { params: Promise<{ TopicId: string }> }) {
  const params = await props.params;
  const id = await params.TopicId;
  const qandA = await prisma.qandA.findMany({
       where: { TopicId:Number(id) },
     });
  return NextResponse.json({ qandA });
}
