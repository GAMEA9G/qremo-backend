import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, props: { params: Promise<{ SubjectId: string }> }) {
  const params = await props.params;
  const id = await params.SubjectId;
  const chapters = await prisma.chapter.findMany({
       where: { SubjectId:Number(id) },
     });
  return NextResponse.json({ chapters });
}
