import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, props: { params: Promise<{ ChapterId: string }> }) {
  const params = await props.params;
  const id = await params.ChapterId;
  const quiz = await prisma.quiz.findMany({
       where: { ChapterId:Number(id) },
     });
  return NextResponse.json({ quiz });
}
