import React from 'react'
import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

const deletepdf = async (id) => {
    const pdfdeleter = await prisma.pdf.delete({
        where: {
            id: id,
        },
      });
    return console.log(pdfdeleter);
}

export default deletepdf