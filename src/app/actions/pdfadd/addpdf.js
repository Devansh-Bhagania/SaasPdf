'use server';

import prisma from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';

export const addPdf = async (pdf,email) => {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });


    const pdfadder = await prisma.pdf.create({
        data: {
          title: 'pdffile1',
          filePath: pdf,
          isPaid: false,
          userId: user.id,
        },
      });

    return "Successfully created pdf!";
};
