import prisma from "@/lib/prisma";


export async function GET() {

  const syllabus = await prisma.syllabus.findMany();



  return Response.json(syllabus)
}
