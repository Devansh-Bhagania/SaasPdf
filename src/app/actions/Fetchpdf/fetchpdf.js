'use server';

import prisma from '@/app/lib/prisma';
// import bcrypt from 'bcryptjs';
import { authOptions } from '@/app/api//auth/[...nextauth]/route.js';
import { getServerSession } from 'next-auth/next';


export const fetchpdf = async () => {
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
        },
      });

    return pdffinder;
};
