import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { NextResponse } from 'next/server';

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client();
async function verifyIdToken(idToken: string | undefined){
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: process.env.clientId,  // Specify the WEB_CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[WEB_CLIENT_ID_1, WEB_CLIENT_ID_2, WEB_CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  // This ID is unique to each Google Account, making it suitable for use as a primary key
  // during account lookup. Email is not a good choice because it can be changed by the user.
  const userId = payload['sub'];
  const userEmail = payload['email'];
  const userName = payload['name'];

  // If the request specified a Google Workspace domain:
  // const domain = payload['hd'];
  return {userId,userEmail,userName}
}
export async function POST(request: NextRequest) {
    const headersList =headers();
    const idToken = (await headersList).get('Authorization')?.split(' ')[1];
    const {userId,userEmail,userName}= await verifyIdToken(idToken)
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
  