'use server';

import prisma from '@/app/lib/prisma';
// import bcrypt from 'bcryptjs';
import { authOptions } from '@/app/api//auth/[...nextauth]/route.js';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';

export const addPdf = async (title, filePath) => {
  const session = await getServerSession(authOptions);
    console.log(session);
    const email = session.user?.email;
    console.log(email);
    console.log("getting user session on backend");
    console.log(title);
    console.log(filePath);



    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });


    const pdfadder = await prisma.pdf.create({
        data: {
          title: title,
          filePath: filePath,
          isPaid: false,
          userId: user.id,
        },
      });
      console.log(pdfadder);
    return pdfadder;
};
