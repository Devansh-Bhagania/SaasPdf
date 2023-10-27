"use server";
import React from 'react'
import { authOptions } from '@/app/api//auth/[...nextauth]/route.js';
import { getServerSession } from 'next-auth/next';
import prisma from '@/app/lib/prisma';
import { addPdf } from '../actions/pdfadd/addpdf';


async function page() {
    
    const session = await getServerSession(authOptions);
    console.log(session);
    const email = session.user?.email;
    const userpin = await prisma.user.findUnique({
        where: {
            email: email,
        },
    })
    const user = await prisma.pdf.findMany({
        where: {
            userid: userpin?.userid,
        },
    });
    console.log(user);
    const pdf = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    console.log(pdf);
    // const pdfsave = await addPdf(pdf,email);
    // console.log(pdfsave);
   
  return (
    <>
    <div>Add pdf page Signed in as {session.user?.email}</div>
    <p>{session.user?.name}</p>
    
    
    </>
  )
}

export default page