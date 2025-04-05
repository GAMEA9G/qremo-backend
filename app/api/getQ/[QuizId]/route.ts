import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, props: { params: Promise<{ QuizId: string }> }) {
  const params = await props.params;
  const id = await params.QuizId;
  const qandA = await prisma.qandA_quiz.findMany({
       where: { QuizId:Number(id) },
     });
  return NextResponse.json({ qandA });
}
