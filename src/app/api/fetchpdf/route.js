import prisma from '@/app/lib/prisma';
import { authOptions } from '@/app/api//auth/[...nextauth]/route.js';
import { getServerSession } from 'next-auth/next';
// import { NextResponse } from 'next/server';

export const GET = async(req, res) => {
    try {
        const session = await getServerSession(authOptions);
        console.log(session);
        const email = session.user?.email;
        console.log(email);
        console.log("getting user session on backend");
       
    
    
    
        const user = await prisma.user.findUnique({
            where: {
                email,
                
            },
        });
    
    
        const pdffinder= await prisma.pdf.findMany({
            where: {
              userId: user.id,
              isPaid: false,
            },
          });
    
        console.log(pdffinder);
      return Response.json({ message: pdffinder });
    } catch (err) {
      return Response.json({ error: 'failed to load data' });
    }
  }
