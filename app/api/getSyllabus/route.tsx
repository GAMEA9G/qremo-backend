import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET() {

  const syllabus = await prisma.syllabus.findMany();



  return Response.json(syllabus)
}
