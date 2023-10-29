"use client";
import { set } from 'lodash';
import React,{useState} from 'react'
// import { authOptions } from '@/app/api//auth/[...nextauth]/route.js';
// import { getServerSession } from 'next-auth/next';
// import prisma from '@/app/lib/prisma';
import { addPdf } from '../actions/pdfadd/addpdf';
import { useRouter } from "next/navigation"

function page() {
    const router = useRouter();
    // const session = await getServerSession(authOptions);
    // console.log(session);
    // const email = session.user?.email;
    // const userpin = await prisma.user.findUnique({
    //     where: {
    //         email: email,
    //     },
    // })
    // const user = await prisma.pdf.findMany({
    //     where: {
    //         userid: userpin?.userid,
    //     },
    // });
    // console.log(user);
    // const pdf = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    // console.log(pdf);
    // const pdfsave = await addPdf(pdf,email);
    // console.log(pdfsave);

    const [title, setTitle] = useState('');
    const [filePath, setFilePath] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {

            if(title == "" || filePath == ""){
                console.log("Form is not filled ");
            }
            else{
            setMessage("Adding PDF up in Database...");
            const message = await addPdf(title,filePath);
            // console.log(message);
            router.refresh();
            router.push("/protected/dashboard");
        }
       
       
    };
   
  return (
    <>
    {/* <div>Add pdf page Signed in as {session.user?.email}</div> */}
    {/* <p>{session.user?.name}</p> */}
    <div className='mx-auto w- full max-w-[600px] flex flex-col gap-5 p-10'>
       
            {/* title of the pdf  */}
            <label htmlFor="title">Title</label>
            <input type='text' className='shadow-xl border-2 border-black p-3 text-2xl' value={title} onChange={(e) => setTitle(e.target.    value)} />
            {/* filepath of the pdf  */}
            <label htmlFor="title">FilePath</label>
            <input type='text' className='shadow-xl border-2 border-black p-3 text-2xl' value={filePath} onChange={(e) => setFilePath(e.target.value)} />
            <button className="bg-blue-300 border-2 border-black px-2 py-2 rounded-full" onClick={handleSubmit}>Upload PDF</button>
          
            <p>{message}</p>
    </div>
    
    
    
    </>
  )
}

export default page