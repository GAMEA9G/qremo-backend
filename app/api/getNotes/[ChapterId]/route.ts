import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, props: { params: Promise<{ ChapterId: string }> }) {
  const params = await props.params;
  const id = await params.ChapterId;
  const notes = await prisma.notes.findMany({
       where: { ChapterId:Number(id) },
     });
  return NextResponse.json({ notes });
}
