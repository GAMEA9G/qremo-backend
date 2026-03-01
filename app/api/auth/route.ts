import prisma from "@/app/lib/prisma";
import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { NextResponse } from 'next/server';
import { createSession } from "@/app/lib/session";

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client();
async function verifyIdToken(idToken: string | undefined){
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: process.env.clientId,  
  });
  const payload = ticket.getPayload();
  
  const userId = payload['sub'];
  const userEmail = payload['email'];
  const userName = payload['name'];

  
  return {userId,userEmail,userName}
}
export async function POST(request: NextRequest) {
    const headersList =headers();
    const idToken = (await headersList).get('Authorization')?.split(' ')[1];
    const {userId,userEmail,userName}= await verifyIdToken(idToken)
    const payload ={userId,userEmail,userName}
    await createSession(userId)
    
    if (!await prisma.user.findUnique({
      where: { id: userId },
      
    })){
      const newUser =await prisma.user.create({data:{ id:userId,email:userEmail,name:userName}})
      return NextResponse.json({message:"User Created Successfully",newUser},{
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3036",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Credentials": "true",
      },
    })
   }
    

  }
  