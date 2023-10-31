"use server"
import React from 'react'
import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

const payforpdf = async (id) => {
    
    const pdfpayer = await prisma.pdf.update({
        where: {
            id: id,
        },
        data: {
            isPaid: true,
          },
      });
    
    return pdfpayer;
}

export default payforpdf