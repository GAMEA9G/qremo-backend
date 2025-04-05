import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, props: { params: Promise<{ SyllabusId: string }> }) {
  const params = await props.params;
  const id = await params.SyllabusId;
  const subjects = await prisma.subjects.findMany({
       where: { SyllabusId:Number(id) },
     });
  return NextResponse.json({ subjects });
}
